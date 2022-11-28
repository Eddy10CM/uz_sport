import { Injectable, Pipe } from '@angular/core';
import { User } from 'src/app/core/class/users';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, pipe } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public UserInfo!: User;
  constructor(private firestone: AngularFirestore, private auth: AuthService) { }

  GetUser(email: string) {
    console.log("🚀 ~ file: user.service.ts ~ line 16 ~ UserService ~ GetUser ~ email", email)
    console.log(this.auth.getToken)
    return this.firestone.collection<User>('Users',
    ref => ref.where('email', '==', this.auth.getToken.email)
    .limit(1)
    )
    .snapshotChanges()
    .pipe(
      map((user) => {
        let Id = '';
        user.map((u) => {
          this.UserInfo = u.payload.doc.data() as User;
          Id = u.payload.doc.id;
        })
        return {user: this.UserInfo, id: Id}
      })
    );
  }

  AddUser(newUser: User) {
    return this.firestone.collection<User>('Users').doc().set(Object.assign({},newUser));//.add(newUser);
  }
}
