import{Injectable} from '@angular/core'
import{Http,Response} from '@angular/http'
import 'rxjs/add/observable/of';
// or 
import{Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class EmployeeService {
    private apiUrl="http://5c98e96e42365600143931a7.mockapi.io/api/employee";
    constructor(private _http:Http){

    }
    GetList():Observable<any[]>{
        return this._http.get(this.apiUrl).map((response:Response)=>response.json());
    }
}