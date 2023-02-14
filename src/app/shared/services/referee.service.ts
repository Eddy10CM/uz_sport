import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Referee } from 'src/app/core/class/referees';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  Id: string = "";
  constructor(private firestone: AngularFirestore, private auth: AuthService) { }
  Get(): Referee[] {
      // return this.firestone.collection<Couch>('Coaches').doc().ref.get()
      let couches: Referee[] = [];

      this.firestone
          .collection<Referee>('Referees')
          .snapshotChanges()
          .subscribe(item => {
              item.map(row => {
                  couches.push(row.payload.doc.data());
              })
          })

      return couches;
  }
  GetAll() {
      return this.firestone.collection<Referee>('Referees',
          ref => ref.where('Name','!=','')
      )
          .snapshotChanges()
          .pipe(
              map((referee) => {
                  console.log(referee, "referee")
                  let referees:Referee[]=[];
                  referee.map((c) => {
                      console.log(c)
                      let refereeD:Referee = c.payload.doc.data() as Referee;
                      refereeD.Id= c.payload.doc.id;
                      referees.push(refereeD)
                  })
                  return referees;
              })
          );
  }
  Add(newReferee: Referee) {
      return this.firestone.collection<Referee>('Referees').doc().set(Object.assign({}, newReferee));
  }
  Update(Id: string, referee: Referee) {
      console.log(Id,
          referee,'Id,referee')
      return this.firestone.collection<Referee>('Referees').doc(Id).set(referee, { merge: true })
  }
  delete(Id: string) {
      return this.firestone.collection<Referee>('Referees').doc(Id).delete()
  }
}
