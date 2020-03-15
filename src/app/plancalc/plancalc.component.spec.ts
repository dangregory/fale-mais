import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import CalculationService from '../services/CalculationService';
import { MatDialogModule } from '@angular/material/dialog';
import { PlanCalcComponent } from './plancalc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PlanCalcComponent', () => {
  let component: PlanCalcComponent;
  let fixture: ComponentFixture<PlanCalcComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, MatDialogModule, BrowserAnimationsModule], 
    providers: [PlanCalcComponent, CalculationService]
  }));

  it('should be created', () => {
    const service: PlanCalcComponent = TestBed.get(PlanCalcComponent);
    expect(service).toBeTruthy();
   });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanCalcComponent ],
      providers: [CalculationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(PlanCalcComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
