import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Player } from 'src/app/core/class/player';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  Id: string = "";
  constructor(private firestone: AngularFirestore, private auth: AuthService) { }
  Get(): Player[] {
      // return this.firestone.collection<Couch>('Coaches').doc().ref.get()
      let players: Player[] = [];

      this.firestone
          .collection<Player>('Players')
          .snapshotChanges()
          .subscribe(item => {
              item.map(row => {
                  players.push(row.payload.doc.data());
              })
          })

      return players;
  }
  GetAll() {
      return this.firestone.collection<Player>('Players')
          .snapshotChanges()
          .pipe(
              map((player) => {
                  console.log(player, "player")
                  let players:Player[]=[];
                  player.map((c) => {
                      console.log(c)
                      let playerD:Player = c.payload.doc.data() as Player;
                      playerD.Id= c.payload.doc.id;
                      players.push(playerD)
                  })
                  return players;
              })
          );
  }
  Add(newPlayer: Player) {
    console.log(newPlayer)
      return this.firestone.collection<Player>('Players').doc().set(Object.assign({}, newPlayer));
  }
  Update(Id: string, player: Player) {
      console.log(Id,
          player,'Id,player')
      return this.firestone.collection<Player>('Players').doc(Id).set(player, { merge: true })
  }
  delete(Id: string) {
      return this.firestone.collection<Player>('Players').doc(Id).delete()
  }
}
