import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string;

  logoUrl: string;

  constructor() {
    this.logoUrl = './../../../../assets/img/league/adasl-logo.png';
  }
}
