import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresadosIndexComponent } from './egresados-index.component';

describe('EgresadosIndexComponent', () => {
  let component: EgresadosIndexComponent;
  let fixture: ComponentFixture<EgresadosIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresadosIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresadosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
