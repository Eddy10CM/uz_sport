import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { League } from '../../core/class/league';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  LeaagueCollection!: AngularFirestoreCollection<League>;
  Leagues: League[] = [];

  constructor(private firestore: AngularFirestore) {
    //this.LeaagueCollection = this.firestore.collection<League>('Leagues');
  }

  GetAll() {
    
    return this.firestore.collection<League>('Leagues').snapshotChanges()
    .pipe(
      map((league) => {
        this.Leagues = [];
        league.map((l) => {
          const data = l.payload.doc.data() as League;
          data.Id = l.payload.doc.id;
          this.Leagues.push(data);
        })
        return this.Leagues;
      })
    );
    //return this.firestore.collection<League>('Leagues').valueChanges();
  }

  GetLeague(NameLeague: string) {
    let LeagueLocal: League;
    return this.firestore.collection<League>('Leagues', ref => ref.where('NameLeague', '==', NameLeague)).snapshotChanges()
    .pipe(
      map((data) => {
        data.map((league) => {
          LeagueLocal = league.payload.doc.data() as League;
          LeagueLocal.Id = league.payload.doc.id;
        })
        return LeagueLocal;
      })
    );
    //collection('Login', ref => ref.where('username', '==', 'up.ulises.o@gmail.com')).valueChanges();
  }

  AddLeague(league: League) {
    const resp = this.firestore.collection<League>('Leagues').add(league)
    return resp;
  }
}
