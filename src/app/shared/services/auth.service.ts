import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { map, Observable } from 'rxjs';
import { Login } from '../../core/class/login';
import { User } from 'src/app/core/class/users';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiKey = 'AIzaSyBoSt5MX460l1HpklUaXh4Ax6r8nw0hLdk';
  userToken!: Login;
  // Crear Usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  
  constructor(private http: HttpClient) { }

  logout() {
  }

  login(user: UsuarioModel) {
    const dataUser = {...user,
      returnSecureToken: true
    }

    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`, dataUser);
  }

  newUser(user: UsuarioModel) {
    const dataUser = {...user,
      returnSecureToken: true
    }

    return this.http.post<Login>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`, dataUser)
    .pipe(
      map((resp: Login) => {
        this.saveToken = resp;
        return resp;
      })
    );
  }


  getInfoUser(): Observable<User> {
    return new Observable(observer => {
      observer.next(new User())
    })
  }

  set saveToken(idToken: Login) {
    this.userToken = idToken;
    localStorage.setItem('user', JSON.stringify(idToken))
  }

  get getToken() {
    if(localStorage.getItem('user')) {
      this.userToken = JSON.parse(localStorage.getItem('user')!);
    } else {
      this.userToken = new Login();
    }

    return this.userToken;
  }
}
