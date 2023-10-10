import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsGettingComponent } from './params-getting.component';

describe('ParamsGettingComponent', () => {
  let component: ParamsGettingComponent;
  let fixture: ComponentFixture<ParamsGettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParamsGettingComponent]
    });
    fixture = TestBed.createComponent(ParamsGettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
