import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CitycodeComponent } from './citycode.component';

describe('CitycodeComponent', () => {
  let component: CitycodeComponent;
  let fixture: ComponentFixture<CitycodeComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, MatDialogModule], 
    providers: [
        CitycodeComponent,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
    ] 
  }));

   it('should be created', () => {
    const service: CitycodeComponent = TestBed.get(CitycodeComponent);
    expect(service).toBeTruthy();
   });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitycodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
