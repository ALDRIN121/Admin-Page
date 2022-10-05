import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  issue: any;
  showUser:boolean;
  userDetail: any;
  assigMsg:any;
  selectedOption:any;
  newUser = new FormGroup({
    optionValue: new FormControl()
  })
  

  constructor(private service:AdminService) { }
  

  ngOnInit(): void {
    this.showUser= false;
    this.service.getIssues().subscribe((response)=>{
      this.issue = response.data
    })
    this.service.getUserDetails().subscribe((response)=>{
      console.log(response);
      this.userDetail = response.data
    })
  }

  deleteIssue(data:any){
    this.service.deleteIssue(data).subscribe((response)=>{
      if(response.success == true){
        this.ngOnInit()
      }
    })
  }

  setUsers(data:any){
    this.showUser = true;
    console.log(this.newUser.value.optionValue); //y
    console.log(data); //x

        let body = {
      'userID': this.newUser.value.optionValue,
      'name': data.name,
      'description': data.description,
      'issueType': data.issueType
    }
    this.service.updateIssue(body,data.id).subscribe((response)=>{
      console.log(response);
      if(response.success == true){
        this.ngOnInit()
        this.sendEmail(this.newUser.value.optionValue)
      }
    })

  }


  sendEmail(data:any){
    console.log(data);
    
    this.service.getEmail(data).subscribe((response:any)=>{
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
    let body = {
      "name": response.username,
      "userEmail": response.useremail
    }
    this.service.issuesEmail(body).subscribe((response:any)=>{
      console.log(response);
      
    })
  }
  

}
