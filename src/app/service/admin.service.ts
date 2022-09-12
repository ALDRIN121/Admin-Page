import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  private url1 = "http://127.0.0.1:8000"

  getUserDetails(){
    return this.http.get<any>(this.url1+"/api/login");
  }
  getLocalRepo(){
    return this.http.get<any>(this.url1+"/admin/api/localRepo");
  }
  getIssues(){
    return this.http.get<any>(this.url1+"/admin/api/issue");
  }
  getTask(){
    return this.http.get<any>(this.url1+"/admin/api/task");
  }
  getShedule(){
    return this.http.get<any>(this.url1+"/admin/api/shedule");
  }
  deleteUser(id:any){
    return this.http.delete<any>(this.url1+"/api/login/"+id)
  }
  deleteLocalRepo(id:any){
    return this.http.delete<any>(this.url1+"/api/localRepo/"+id)
  }
  deleteShedule(id:any){
    return this.http.delete<any>(this.url1+"/api/shedule/"+id)
  }
  deleteTask(id:any){
    return this.http.delete<any>(this.url1+"/api/task/"+id)
  }
  deleteIssue(id:any){
    return this.http.delete<any>(this.url1+"/api/issue/"+id)

  }

}
