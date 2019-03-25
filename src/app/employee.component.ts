import{Component,OnInit} from '@angular/core'
import{EmployeeService} from './employee.service'
@Component({
    selector:'employee-list',
    templateUrl:'./employee.component.html',
    providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit{
    public employees:any[];
    constructor(private employeeService:EmployeeService){

    }
    ngOnInit(){
        this.employees=this.employeeService.GetList();
    }
}