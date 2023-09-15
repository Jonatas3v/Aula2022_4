import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-violao',
  templateUrl: './violao.page.html',
  styleUrls: ['./violao.page.scss'],
})
export class ViolaoPage implements OnInit {
  url: any;

  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit() {
    this.url= this.domSanitizer.bypassSecurityTrustResourceUrl(
      'https://pt.wikipedia.org/wiki/Guitarra_clássica'
    )
  }

}
