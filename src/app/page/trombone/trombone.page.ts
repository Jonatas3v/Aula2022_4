import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trombone',
  templateUrl: './trombone.page.html',
  styleUrls: ['./trombone.page.scss'],
})
export class TrombonePage implements OnInit {
  url: any;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url=this.domSanitizer.bypassSecurityTrustResourceUrl(
      'https://pt.wikipedia.org/wiki/Trombone'
    )
  }

}
