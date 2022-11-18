import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

 
  registerForm: FormGroup = this.formBuilder.group(
    {
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    },
    {
      validators: this.match('password', 'confirmPassword'),
    }
  );

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  ngOnInit(): void {
    
  }

  get x(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  match(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors['matching']) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ matching: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}


  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      
      return;
    }else{
      alert("Ju jeni regjistruar me sukses!")
      setTimeout(() => {
        
        this.router.navigate(['/home']);
      }, 1000)
    }
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }
}
