import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Team } from 'src/app/core/class/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  TeamCollection!: AngularFirestoreCollection<Team>;
  Teams: Team[] = [];

  constructor(private firestore: AngularFirestore) {
    this.TeamCollection = this.firestore.collection<Team>('Teams');
  }

  GetAll() {
    return this.firestore.collection<Team>('Teams')
    .snapshotChanges()
    .pipe(
        map((team) => {
            console.log(team, "team")
            let teams:Team[]=[];
            team.map((c) => {
                console.log(c)
                let teamc:Team = c.payload.doc.data() as Team;
                teamc.Id= Number(c.payload.doc.id);
                teams.push(teamc)
            })
            return teams;
        })
    );
  }

  AddTournament(team: Team) {
    const resp = this.firestore.collection<Team>('Teams').add(team)
    return resp;
  }
  Add(team_: Team) {
    return this.firestore.collection<Team>('Teams').doc().set(Object.assign({}, team_));
  }
  Update(Id: string, updateTeam: Team) {
      console.log(Id,
          updateTeam,'Id,updateTeam')
      return this.firestore.collection<Team>('Teams').doc(Id).set(updateTeam, { merge: true })
  }
  delete(Id: string) {
      return this.firestore.collection<Team>('Teams').doc(Id).delete()
  }
}
