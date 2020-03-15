import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlanCalcComponent } from './plancalc/plancalc.component';
import { MatDialogModule } from '@angular/material/dialog';

import CalculationService from './services/CalculationService';

describe('AppComponent', () => {

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, MatDialogModule], 
        providers: [AppComponent]
      }));

       it('should be created', () => {
        const service: AppComponent = TestBed.get(AppComponent);
        expect(service).toBeTruthy();
       });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, PlanCalcComponent
      ],
      providers: [
        CalculationService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
