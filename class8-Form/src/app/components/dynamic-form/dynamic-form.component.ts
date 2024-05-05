import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';
@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, JsonPipe],
templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {

  // EXAMPLE-1 : Using FormGroup and  FormControl.
  /* registerForm = new FormGroup({
    userName : new FormControl('Angular17'),
    password : new FormControl(),
    confirmPassword : new FormControl(),

    address : new FormGroup({
      city : new FormControl(),
      state : new FormControl(),
      postalCode : new FormControl(),
    })
  });

  loadApiData(){
    console.log(this.registerForm.value);

    // Insert a new api data
    this.registerForm.setValue({
      userName : 'Angular17',
      password : 'password',
      confirmPassword : 'password',
      address : {
        city : 'Bangalore',
        state : 'Karnataka',
        postalCode : '560001'
      }
    })

    // Update the Form Value
    this.registerForm.patchValue({
      userName: "AngularV1777",
      password: "admin@12333",
      confirmPassword: "admin@12333",
      address: {
        city: "Bangaloreee",
        state: "Karnatakaaa",
        postalCode: "56000111"
      }
    })
  } */

  // EXAMPLE-2 : Using Form Builder
  constructor(private formBuilder: FormBuilder) {}

  registerForm = this.formBuilder.group({
    userName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    address: this.formBuilder.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required],
    })
  })

  loadApiData(){
    this.registerForm.patchValue({
      userName: "AngularV17",
      password: "admin@123",
      confirmPassword: "admin@123",
      address: {
        city : 'Bangalore',
        state : 'Karnataka',
        postalCode : '560001'
      }
    })
  }

  // EXAMPLE-2 Method
  get userName(){return this.registerForm.get('userName')}
}

// 8.5 = innerWidth
// 8 = feet

// 12Feet = innerWidth or 7 Feet
// 10Feet = innerHeight