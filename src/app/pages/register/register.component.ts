import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { League } from 'src/app/core/class/league';
import { AlertsService } from 'src/app/shared/services/alerts.service';

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
        required: true,
        minLength: 8
      }
    }
  };

  
  constructor(private auth: AuthService, private router: Router, private _alert: AlertsService) { }

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
          this._alert.alertSimple(e.error.error.message);
          this.loading = false
          console.error(e);
        },
        complete: () => {
          console.log('Complete')
        }
      });
    }
  }
}
