import { Component, OnInit } from '@angular/core';
import { HarryPotterServiceService } from 'src/app/Service/harry-potter-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private hpService: HarryPotterServiceService) { }

  ngOnInit(): void {
    this.getSolicitudes();
  }

  getSolicitudes(){
    console.log(this.hpService.getSolicitudes());
    
  }
}
