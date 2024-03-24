import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(3),
      ]),

      username: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\S+$'),
        Validators.minLength(3),
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{0,}$`
        ),
        Validators.minLength(8),
      ]),

      cpassword: new FormControl('', [Validators.required]),
    });
  }

  handlSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      return;
    }
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.validateAllFormFields(this.registerForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
