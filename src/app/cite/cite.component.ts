import { Component, OnInit, Signal } from '@angular/core';
import { CiteService } from './cite.service';
import { Cite } from './cite';

@Component({
  selector: 'app-cite',
  templateUrl: './cite.component.html',
  styleUrls: ['./cite.component.css'],
})
export class CiteComponent implements OnInit {
  cite: Signal<Cite>;
  fail: Signal<boolean>;
  hide: Signal<boolean>;
  book = '';
  constructor(private citeServ: CiteService) {
    this.cite = this.citeServ.currentContent.asReadonly();
    this.fail = this.citeServ.fail.asReadonly();
    this.hide = this.citeServ.hide.asReadonly();
  }

  ngOnInit() {
    this.citeServ.newCite();
  }
}
