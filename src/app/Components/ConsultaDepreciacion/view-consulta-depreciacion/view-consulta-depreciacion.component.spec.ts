import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConsultaDepreciacionComponent } from './view-consulta-depreciacion.component';

describe('ViewConsultaDepreciacionComponent', () => {
  let component: ViewConsultaDepreciacionComponent;
  let fixture: ComponentFixture<ViewConsultaDepreciacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConsultaDepreciacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewConsultaDepreciacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
