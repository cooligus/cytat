import { Component, Signal, effect } from '@angular/core';
import { CiteService } from './cite/cite.service';
import { CiteParams } from './cite/cite-params';
import {TreeNode} from 'primeng/api'
import books from './cite/books';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Losowy cytat z biblii';
  citeParams: Signal<CiteParams>;
  book = '';
  nodes!: TreeNode[];
  selectedNodes!: TreeNode;

  constructor(private citeServ: CiteService, private logger: NGXLogger) {
    this.citeParams = this.citeServ.paramsSig.asReadonly();
    effect(() => {
      this.book = books[this.citeParams().book];
    });
  }
  newCite() {
    this.citeServ.newCite();
  }
}
