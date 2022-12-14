import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { League } from 'src/app/core/class/league';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  loading: boolean = false;

  JSONRegister: any = {
    email: {
      label: 'Correo',
      value: '',
      type: 'text',
      validation: {
        required: true,
        /*minLength: 5,
        maxLength: 10*/
      }
    },
    password: {
      label: 'Contraseña',
      value: '',
      type: 'password',
      validation: {
        required: true
      }
    }
  };

  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ValidateForm(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      this.auth.newUser(form.value)
      .subscribe({
        next: (value) => {
          this.auth.saveToken = value;
          this.loading = false;
          this.router.navigate(['/uzsport/profile']);
        },
        error: (e) => {
          console.error(e);
        },
        complete: () => {
          console.log('Complete')
        }
      });
    }
  }
}
