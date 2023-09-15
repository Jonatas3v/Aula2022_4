import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-clarinete',
  templateUrl: './clarinete.page.html',
  styleUrls: ['./clarinete.page.scss'],
})
export class ClarinetePage implements OnInit {

  url: any;
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(
      'https://pt.wikipedia.org/wiki/Clarinete'
    )
  }

}
