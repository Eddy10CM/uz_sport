import { Injectable, Pipe } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Couch } from 'src/app/core/class/couches';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class CouchService {
    Id: string = "";
    constructor(private firestone: AngularFirestore, private auth: AuthService) { }
    Get(): Couch[] {
        // return this.firestone.collection<Couch>('Coaches').doc().ref.get()
        let couches: Couch[] = [];

        this.firestone
            .collection<Couch>('Coaches')
            .snapshotChanges()
            .subscribe(item => {
                item.map(row => {
                    couches.push(row.payload.doc.data());
                })
            })

        return couches;
    }
    GetAll() {
        return this.firestone.collection<Couch>('Coaches',
            ref => ref.where('Name','!=','')
        )
            .snapshotChanges()
            .pipe(
                map((couch) => {
                    console.log(couch, "couch")
                    let couches:Couch[]=[];
                    couch.map((c) => {
                        console.log(c)
                        let couchD:Couch = c.payload.doc.data() as Couch;
                        couchD.Id= c.payload.doc.id;
                        couches.push(couchD)
                    })
                    return couches;
                })
            );
    }
    Add(newCouch: Couch) {
        return this.firestone.collection<Couch>('Coaches').doc().set(Object.assign({}, newCouch));
    }
    Update(Id: string, updateCouch: Couch) {
        return this.firestone.collection<Couch>('Coaches').doc(Id).set(updateCouch, { merge: true })
    }
}