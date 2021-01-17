import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEncuestaComponent } from './create-encuesta.component';

describe('CreateEncuestaComponent', () => {
  let component: CreateEncuestaComponent;
  let fixture: ComponentFixture<CreateEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
