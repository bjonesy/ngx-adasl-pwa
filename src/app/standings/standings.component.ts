import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Team } from './models';

@Component({
  selector: 'ngx-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent {
  private itemsCollection: AngularFirestoreCollection<Team>;
  teams$: Observable<Array<Team>>;
  displayedColumns: Array<string> = [
    'position',
    'logo',
    'team',
    'mp',
    'w',
    'd',
    'l',
    'gd',
    'gf',
    'points'
  ];

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs
      .collection<Team>('adasl')
      .doc('seasons')
      .collection<Team>('2018-2019', team => team.orderBy('position'));

    this.teams$ = this.itemsCollection.valueChanges();
  }
}
