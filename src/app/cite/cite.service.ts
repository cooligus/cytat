import { Injectable, WritableSignal, signal } from '@angular/core';
import { Cite } from './cite';
import { NGXLogger } from 'ngx-logger';
import { CiteParams } from './cite-params';
import books from './books';

@Injectable({
  providedIn: 'root',
})
export class CiteService {
  currentContent: WritableSignal<Cite>;
  fail: WritableSignal<boolean>;
  hide: WritableSignal<boolean>;
  citeParams: CiteParams;
  paramsSig: WritableSignal<CiteParams>;
  constructor(private logger: NGXLogger) {
    this.currentContent = signal({} as Cite);
    this.fail = signal(false);
    this.hide = signal(true);
    this.citeParams = {} as CiteParams;
    this.paramsSig = signal(this.citeParams);
  }

  randomizeCite() {
    const verseMultiplier = 10;
    const verseAdder = 1;

    this.citeParams.book =
      Math.round(Math.random() * verseMultiplier) % books.length;
    this.citeParams.chapter =
      Math.round(Math.random() * verseMultiplier) + verseAdder;
    this.citeParams.start =
      Math.round(Math.random() * verseMultiplier) + verseAdder;
    this.citeParams.end =
      this.citeParams.start +
      Math.round(Math.random() * verseMultiplier) +
      verseAdder;

    this.paramsSig.set(this.citeParams);
  }
  newCite() {
    this.hide.set(true);

    this.randomizeCite();

    const url = `https://www.biblia.info.pl/api/biblia/bt/${
      books[this.citeParams.book]
    }/${this.citeParams.chapter}/${this.citeParams.start}-${
      this.citeParams.end
    }`;
    this.logger.debug(url);

    const myFetch = () =>
      fetch(url)
        .then((data) => {
          if (data.ok) this.hide.set(false);
          return data.json();
        })
        .then((json) => this.currentContent.set(json))
        .catch(() => {
          this.fail.set(true);
        });
    setTimeout(() => myFetch(), 1000);
  }
}
