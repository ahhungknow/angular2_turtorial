import{Injectable} from '@angular/core'
@Injectable()
export class EmployeeService {
    GetList(): any[] {
        let employees: any[] = [
            {
                Id: 1, Name: "Nguyễn Văn A"
            },
            {
                Id: 2, Name: "Nguyễn Văn B"
            },
            {
                Id: 3, Name: "Nguyễn Văn C"
            },
            {
                Id: 4, Name: "Nguyễn Văn D"
            }
        ];
        return employees;
    }
}