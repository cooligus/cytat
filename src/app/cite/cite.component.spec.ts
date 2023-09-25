import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiteComponent } from './cite.component';

describe('CiteComponent', () => {
  let component: CiteComponent;
  let fixture: ComponentFixture<CiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiteComponent],
    });
    fixture = TestBed.createComponent(CiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
