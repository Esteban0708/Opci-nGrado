import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionGrupoComponent } from './inscripcion-grupo.component';

describe('InscripcionGrupoComponent', () => {
  let component: InscripcionGrupoComponent;
  let fixture: ComponentFixture<InscripcionGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionGrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
