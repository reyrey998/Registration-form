import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-check-pass-modal',
  templateUrl: './check-pass-modal.component.html',
  styleUrls: ['./check-pass-modal.component.css']
})
export class CheckPassModalComponent implements OnInit {

  @ViewChild("alertModal") alertModal: any;

  isMatchPassword: boolean;

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public passss: any,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  doBut() {
    if (this.passss.pass == this.passss.repass) {
      this.isMatchPassword = true;
    }
    else {
      this.isMatchPassword = false;
    }

    this.dialog.open(this.alertModal);

    this.dialogRef.close(this.isMatchPassword)
  }

  doOk() {
    this.dialog.closeAll();
  }
}
