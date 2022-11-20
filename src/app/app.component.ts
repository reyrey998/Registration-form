import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from './print/print.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPerson: Employee
  edId: number = -1;
  title = 'tosinso-app';
  i: number = 0
  tableId: number = 0
  employeeList: Employee[] = [];

  getData(person: any) {

  
    if (this.edId == -1) {
      this.employeeList.push(person);
      console.log(this.employeeList)
     this.tableId = this.i + 1
    }
    else {
      this.employeeList.forEach((emp, index) => {
        if (index == this.edId) {
          console.log(emp);

          emp.name = person.name;
          emp.lastName = person.lastName;
          emp.gender = person.gender;
          emp.email =person.email;
          emp.password = person.password
          emp.repPass= person.repPass
          emp.id=person.id

          this.edId = -1;

          console.log(emp);

        }
      })
    }
    
  }



  deleteRow(idx: number) {
    this.employeeList = this.employeeList.filter((employee, index) => index != idx);
  }
  editRow(idx: number) {
    this.selectedPerson = this.employeeList.find((employee, index) => index == idx) as any;
    this.edId = idx
    //  this.setdata(this.selectedPerson)
  }
  _insert() {

  }

  insert = () => {

  }

}
