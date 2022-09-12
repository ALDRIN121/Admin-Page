import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalLocalRepo: any;
  totalIssue: any;
  totalShedule: any;
  totalTask: any;
  totalUsers: any;
  userDetails: any;

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.service.getLocalRepo().subscribe((response)=>{
      this.totalLocalRepo = Object.keys(response.data).length
    })
    this.service.getIssues().subscribe((response)=>{
      this.totalIssue = Object.keys(response.data).length
    })
    this.service.getShedule().subscribe((response)=>{
      this.totalShedule = Object.keys(response.data).length
    })
    this.service.getTask().subscribe((response)=>{
      this.totalTask = Object.keys(response.data).length
    })
    this.service.getUserDetails().subscribe((response)=>{
      this.totalUsers = Object.keys(response.data).length
      this.userDetails = response.data
    })
  }

  deleteUser(data:any){
    this.service.deleteUser(data).subscribe((response)=>{
      if(response.success == true){
        this.getData()
      }
    })
  }

}
