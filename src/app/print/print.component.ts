import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  c: number
  @Input()
  employeeList: Employee[] = []
  // @Input() tableId: number

  @Output() editedRow = new EventEmitter()
  @Output() deletedRow = new EventEmitter()

  result2: string = ""

  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, idx: number): void {
    this.dialog.open(DeleteModalComponent, {
      width: '250px',
      data: idx,
      
      enterAnimationDuration,
      exitAnimationDuration,
    }).afterClosed().subscribe(value => {
      if (value == true) {
        console.log(value);
        this.delete(idx);
      }
    })
  }

  ngOnInit(): void {
    // this.tableId = this.c
  }
  enterPressed2() {

    this.result2 = "Registeration for" + " " + this.employeeList.length + " " + " person is done!"
    // this.result2 = `Registeration for ${this.employeeList.length} is done`

  }

  Edit(idx: number) {
    this.editedRow.emit(idx)
  }
  delete(idx: number) {
    this.deletedRow.emit(idx)
  }
}

export class Employee {
  name: string
  lastName: string
  gender: string
  email: string
  check: string
  id: string
  password: any
  repPass: any

}
