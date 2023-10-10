import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-params-getting',
  templateUrl: './params-getting.component.html',
  styleUrls: ['./params-getting.component.css']
})
export class ParamsGettingComponent {
  form: FormGroup;
  constructor( private fb: FormBuilder) {
    this.form = this.fb.group({
      book: '',
      chapter: 1,
      start: 1,
      end: 2
    })
  }
}
