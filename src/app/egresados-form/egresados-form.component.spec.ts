import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresadosFormComponent } from './egresados-form.component';

describe('EgresadosFormComponent', () => {
  let component: EgresadosFormComponent;
  let fixture: ComponentFixture<EgresadosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresadosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresadosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
