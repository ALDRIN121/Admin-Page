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

}
