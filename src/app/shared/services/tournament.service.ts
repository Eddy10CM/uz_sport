import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Tournament } from 'src/app/core/class/tournament';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  TournamentCollection!: AngularFirestoreCollection<Tournament>;
  Tournaments: Tournament[] = [];

  constructor(private firestore: AngularFirestore) {
    this.TournamentCollection = this.firestore.collection<Tournament>('Tournament');
  }

  GetAll(idLeague: string) {
    return this.firestore.collection<Tournament>('Tournament', ref => ref.where('IdLeague', '==', idLeague)).snapshotChanges()
    .pipe(
      map((tournament) => {
        tournament.map((t) => {
          const data = t.payload.doc.data() as Tournament;
          data.Id = t.payload.doc.id;
          this.Tournaments.push(data) 
        })
        return this.Tournaments;
      })
    )
  }

  AddTournament(tournamnet: Tournament) {
    const resp = this.firestore.collection<Tournament>('Tournament').add(tournamnet)
    return resp;
  }
}
