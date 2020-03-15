import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';

// Services
import CalculationService from './services/CalculationService';

// Components
import { AppComponent } from './app.component';
import { PlanCalcComponent } from './plancalc/plancalc.component';
import { CitycodeComponent } from './citycode/citycode.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanCalcComponent,
    CitycodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterTestingModule
  ],
  providers: [
    CalculationService,
    {
        provide: MatDialogRef,
        useValue: {}
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ CitycodeComponent ]
})
export class AppModule { }
