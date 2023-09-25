import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BibleService {
  async getVerse() {
    const response = await fetch(
      'https://www.biblia.info.pl/api/biblia/bt/mat/1/1-20',
    );

    return response.json();
  }
}
