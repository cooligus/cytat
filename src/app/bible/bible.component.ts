import { Component, OnInit } from '@angular/core';
import { BibleService } from './bible.service';
import { Bible } from './bible';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.css'],
})
export class BibleComponent implements OnInit {
  cite!: Bible;
  constructor(private bibleServ: BibleService) {}

  ngOnInit() {
    this.bibleServ.getVerse().then((json) => (this.cite = json));
  }
}
