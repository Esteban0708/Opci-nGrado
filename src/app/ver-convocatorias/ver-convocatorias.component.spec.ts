import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerConvocatoriasComponent } from './ver-convocatorias.component';

describe('VerConvocatoriasComponent', () => {
  let component: VerConvocatoriasComponent;
  let fixture: ComponentFixture<VerConvocatoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerConvocatoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerConvocatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
