import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.css']
})
export class SheduleComponent implements OnInit {
  shedules: any;

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.service.getShedule().subscribe((response)=>{
      this.shedules = response.data
    })
  }

  deleteShedule(data:any){
    this.service.deleteShedule(data).subscribe((response)=>{
      if(response.success == true){
        this.ngOnInit()
      }
    })
  }
  

}
