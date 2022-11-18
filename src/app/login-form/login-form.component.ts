import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
    },
  );
submitted = false;

constructor(
  private formBuilder: FormBuilder,
  private router: Router
  ) {}

ngOnInit(): void {
  
}

get x(): { [key: string]: AbstractControl } {
  return this.loginForm.controls;
}

onSubmit(): void {
  this.submitted = true;

  if (this.loginForm.invalid) {
    
   
    return;
  }else {
    alert("Ju jeni loguar me sukses!")
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000)
  }
}

}
