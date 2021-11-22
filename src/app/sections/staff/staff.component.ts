import { Component, OnInit, ViewChild } from '@angular/core';
import { HarryPotterServiceService } from 'src/app/Service/harry-potter-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  dataSource!: MatTableDataSource<any>;
  staff: any =[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private hpService: HarryPotterServiceService ) { }
  
 

  ngOnInit(): void {
    this.getStaff();
  }
  getStaff(){
    this.hpService.getAllStaf().subscribe(staff=>{
      this.staff=staff;
      this.dataSource=new MatTableDataSource(this.staff);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
