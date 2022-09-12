import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-local-repo',
  templateUrl: './local-repo.component.html',
  styleUrls: ['./local-repo.component.css']
})
export class LocalRepoComponent implements OnInit {
  localRepo: any;

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.service.getLocalRepo().subscribe((response)=>{
      this.localRepo = response.data
    })
  }

  deletelocalRepo(data:any){
    this.service.deleteLocalRepo(data).subscribe((response)=>{
      if(response.success == true){
        this.ngOnInit()
      }
    })
  }

}
