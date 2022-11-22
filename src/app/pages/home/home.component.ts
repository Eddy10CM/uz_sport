import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newUserTest: UsuarioModel = new UsuarioModel({
    email : 'eddy10.cm@gmail.com',
    nombre : 'Carlos Eduardo Moreno Calderon',
    password: '123456'
  });

  Items!: Observable<any[]>;
  constructor(private apiService: AuthService, firestore: AngularFirestore) {
    /*this.Items = firestore.collection('Login', ref => ref.where('username', '==', 'up.ulises.o@gmail.com')).valueChanges();
    console.log("🚀 ~ file: home.component.ts ~ line 24 ~ HomeComponent ~ constructor ~ this.Items", this.Items)
    let y = firestore.collection('Login');
    const j = y.get();
    j.subscribe(x => {
      x.docs.map(y => console.log(y.data()))
    });
    console.log("🚀 ~ file: home.component.ts ~ line 26 ~ HomeComponent ~ constructor ~ y", j)*/
  }

  ngOnInit(): void {
    //this.apiService.newUser(this.newUserTest).subscribe(data => console.log(data));
  }

}
