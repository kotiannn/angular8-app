/* @summary Controller to manage behavior of add/remove IP
 * @author Raksha Kotian <rakshakotian35@gmail.com>
 *
 * Created at     : 2019-09-17,
 * Last modified  : 2019-09-19
 */

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ip-manager',
  templateUrl: './ip-manager.component.html',
  styleUrls: ['./ip-manager.component.css']
})
export class IpManagerComponent implements OnInit {
  currentPlan;
  currenttype;
  ipaddr;
  currentplan;
  ipCollection;
  getTypeFromStorage;
  invaliderrormsg = 'Please enter a valid IP address';
  constructor() { }

  ngOnInit() {
    this.currentPlan=localStorage.getItem('usertype');
    this.ipformInit();
    this.updateExistingIp();
    this.getTypeFromStorage = localStorage.getItem('usertype');
    if (this.getTypeFromStorage != null) {
     this.currenttype = this.getTypeFromStorage;
    }
  }
 // Handle Add button permission based on user Plan
 enableAddbtn() {

  const ipCollectionlen = this.ipCollection.length;
  if (this.currenttype != null) {
      if (this.currenttype === 'Premium') {
        if (ipCollectionlen >= 10) {
          return true;
        } else {
          return false;
        }
      } else {
        if (ipCollectionlen >= 5) {
          return true;
        } else {
          return false;
        }
      }
  }
}

// Populate UI elements if already present in localstorage
updateExistingIp() {
  if (localStorage.getItem('ipCollection') !== null) {
    const data = JSON.parse(localStorage.getItem('ipCollection'));
    this.ipCollection = data;
  }
}


 // To initialise and reset IP address
ipformInit() {
  this.ipCollection = [{
    ip : '',
    valid: false
  }];
}


  // Saves IP address collection
  onSaveIPCollection() {
    const ipCollectionStr = JSON.stringify(this.ipCollection);
    localStorage.setItem('ipCollection', ipCollectionStr );
    Swal.fire( 'Success!',
    'Successfully added IP Address',
    'success');
    }

  // Reset a user Plan
  removeplan(): void {
    localStorage.clear();
    this.currenttype = null;
    this.ipformInit();
  }

  // Clear IP collection from UI and storage
  clearIPcollection(): void {
    localStorage.removeItem('ipCollection');
    this.ipformInit();
  }

  // IP address validator
  isValidIP(item) {
      const ip = item.ip;
      if (ip) {
        const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
        const regex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);
        item.valid = regex.test(ip);
        return regex.test(ip);
      } else {
        item.valid = false;
        return true;
      }
  }

  // Save the IP collection if no validation error
   isSaveValid() {
    const errfiltered = this.ipCollection.filter( v => v.valid === false );
    const atleastoneIP = this.ipCollection.filter( v => v.ip !== '' );
    if (errfiltered.length == 0 && atleastoneIP.length > 0) {
      return false;
    } else {
      return true;
    }
   }

  // Insert a new UI element to add IP address
  addIpAddr(val) {
    this.ipCollection.push({ip: '', valid: false});
  }

  // Remove selected UI text box and clear input box if its the last element
  deleteIpaddr(index) {
    if (this.ipCollection.length === 1) {
     this.ipformInit();
    } else {
      this.ipCollection.splice(index, 1);
    }

  }

}
