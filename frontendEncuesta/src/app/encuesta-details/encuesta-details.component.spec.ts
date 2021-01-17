import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaDetailsComponent } from './encuesta-details.component';

describe('EncuestaDetailsComponent', () => {
  let component: EncuestaDetailsComponent;
  let fixture: ComponentFixture<EncuestaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
