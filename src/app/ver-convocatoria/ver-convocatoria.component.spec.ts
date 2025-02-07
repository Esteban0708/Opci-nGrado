import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerConvocatoriaComponent } from './ver-convocatoria.component';

describe('VerConvocatoriaComponent', () => {
  let component: VerConvocatoriaComponent;
  let fixture: ComponentFixture<VerConvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerConvocatoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
