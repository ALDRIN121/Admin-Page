import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task: any;

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.service.getTask().subscribe((response)=>{
      this.task = response.data
    })
  }

  deleteTask(data:any){
    this.service.deleteTask(data).subscribe((response)=>{
      if(response.success == true){
        this.ngOnInit()
      }
    })
  }

  sendEmail(data:any){
    console.log(data);
    
    this.service.getEmail(data.userID).subscribe((response:any)=>{
      if(response.success == true){
        console.log(response);
        this.email(response.data[0]);
        
      }
    })
    // this.service.taskEmail(data,data).subscribe((response)=>{
    //   console.log(response);
      
    // })
    
  }
  email(response){
    window.alert("email send successfully")
    // let body = {
    //   "name": response.username,
    //   "userEmail": response.useremail
    // }
    // this.service.taskEmail(body).subscribe((response:any)=>{
    //   console.log(response);
      
    // })
  }

}
