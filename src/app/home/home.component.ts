/* @summary Controller to manage behavior of add/remove IP
 * @author Raksha Kotian <rakshakotian35@gmail.com>
 *
 * Created at     : 2019-09-18,
 * Last modified  : 2019-09-19
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
  
  }

  ngOnInit() {
    localStorage.removeItem('ipCollection');
    this.formInit();
  }

// To initialise and reset user plan 
formInit() {
  this.registerForm = this.formBuilder.group({
    type: ['', Validators.required]
});
}
// Saves User Plan
onSave() {
  // stop here or add alert message if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  if ( this.registerForm.value.type != null ) {
      localStorage.setItem('usertype', this.registerForm.value.type);
      this.formInit();
     }
}
}
