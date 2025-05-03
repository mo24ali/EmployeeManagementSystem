import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-llist',
  standalone: false,
  templateUrl: './employee-llist.component.html',
  styleUrl: './employee-llist.component.css'
})
export class EmployeeLlistComponent {

  employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeServiceService){ }
  
  ngOnInit():void{
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }
  
}
