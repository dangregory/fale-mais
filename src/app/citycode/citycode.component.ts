import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dddselector',
  templateUrl: './citycode.component.html',
  styleUrls: ['./citycode.component.scss']
})
export class CitycodeComponent {

  constructor(private matDialogRef: MatDialogRef<CitycodeComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  selectCityCode(code) {
    this.matDialogRef.close(code.ddd);
  }
}
