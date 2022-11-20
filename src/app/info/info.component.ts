import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { iif } from 'rxjs';
import { Employee } from '../print/print.component';
import { CheckPassModalComponent } from './check-pass-modal/check-pass-modal.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  varType = "text"

  @Output() getPerson = new EventEmitter();
  @Output() checked = new EventEmitter
  @Input() selectedPerson: Employee
  checkPass: string = ""
  name: string = ""
  lastName: string = ""
  gender: string = ""
  email: string = ""
  password: any = ""
  repPass: any = ""
  id: string = ""
  a: any = 0
  passss: any = ""

  objMaker() {
    this.passss = {
      pass: this.password,
      repass: this.repPass,
      a: this.a
    }
    this.openDialog('500ms', '500ms')
  }
  enterPressed() {

    var person = {
      name: this.name,
      lastName: this.lastName,
      gender: this.gender,
      email: this.email,
      password: this.password,
      repPass: this.repPass,
      id: this.id
    }


    this.name = ""
    this.lastName = ""
    this.gender = ""
    this.email = ""
    this.password = ""
    this.repPass = ""
    this.id = ""
    this.getPerson.emit(person);
  }
  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CheckPassModalComponent, {
      width: '250px',
      data: this.passss,
      enterAnimationDuration,
      exitAnimationDuration,
    }).afterClosed().subscribe((value: boolean) => {
      console.log("subscribe")
      if (value == true) {
        this.enterPressed();
      }

      if (value == false) {
        this.password = ""
        this.repPass = ""
      }
    }
    )
    console.log("afterOpen")
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.selectedPerson != null) {

      this.name = this.selectedPerson.name
      this.lastName = this.selectedPerson.lastName
      this.gender = this.selectedPerson.gender
      this.email = this.selectedPerson.email
      this.password = this.selectedPerson.password
      this.repPass = this.selectedPerson.repPass
      this.id = this.selectedPerson.id
    }
  }


}

