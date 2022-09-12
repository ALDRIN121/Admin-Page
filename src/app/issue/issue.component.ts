import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  issue: any;

  constructor(private service:AdminService) { }
  

  ngOnInit(): void {
    this.service.getIssues().subscribe((response)=>{
      this.issue = response.data
    })
  }

  deleteIssue(data:any){
    this.service.deleteIssue(data).subscribe((response)=>{
      if(response.success == true){
        this.ngOnInit()
      }
    })
  }
  

}
