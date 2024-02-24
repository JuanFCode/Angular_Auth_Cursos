import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateForm';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string ="fa-eye-slash";
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder){

  }
  ngOnInit(){
    this.signupForm = this.fb.group({
      name:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })

  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"

  }

  onSingup() {
    if (this.signupForm.valid) {
      // Enviar el objeto a la base de datos
      console.log(this.signupForm.value);
    } else {
      //Lanzar un error y con los campos requeridos

     ValidateForm.validateAllFormFileds(this.signupForm);
      alert('Tu formulario es invalido');
    }
  }



}
