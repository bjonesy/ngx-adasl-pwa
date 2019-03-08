import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { TranslateService } from '@ngx-translate/core';
import { auth } from 'firebase';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth, private translate: TranslateService) {}

  ngOnInit(): void {
    const locale = 'en-US';
    this.translate.setDefaultLang(locale);
    this.translate.use(locale);
  }

  login(): void {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }
}
