import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEncuestaComponent } from './update-encuesta.component';

describe('UpdateEncuestaComponent', () => {
  let component: UpdateEncuestaComponent;
  let fixture: ComponentFixture<UpdateEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
