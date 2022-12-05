import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { BehaviorSubject, map, Observable, share } from 'rxjs';
import { Login } from '../../core/class/login';
import { User } from 'src/app/core/class/users';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiKey = 'AIzaSyBoSt5MX460l1HpklUaXh4Ax6r8nw0hLdk';
  userToken!: Login;
  IdUser!: string;
  private $isLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // Crear Usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  
  constructor(private http: HttpClient) { }

  logout() {
  }

  login(user: UsuarioModel): Observable<Login> {
    const dataUser = {...user,
      returnSecureToken: true
    }

    return this.http.post<Login>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`, dataUser);
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

  changeIsLogin(logged: boolean): void {
    this.$isLogin.next(logged);
  }

  IdUserLogin(Id: string): void {
    this.IdUser = Id;
    localStorage.setItem('idUser', Id);
  }

  SaveUser(user: User): void {
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  GetUser(): User {
    if(localStorage.getItem('userInfo')) {
      return JSON.parse(localStorage.getItem('userInfo')!);
    } else {
      return new User();
    }
  }


  getInfoUser(): Observable<boolean> {
    return this.$isLogin.asObservable().pipe(share());
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
