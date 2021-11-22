import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { HarryPotterServiceService } from 'src/app/Service/harry-potter-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  dataSource!: MatTableDataSource<any>;
  house: any =[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selectedValue: string;
  constructor(private hpService: HarryPotterServiceService ) { 
  }

  ngOnInit(): void {
  }
  buscarCasa(){
    this.hpService.getHouse(this.selectedValue).subscribe(casa=>{
     this.house=casa;
      this.dataSource=new MatTableDataSource(this.house);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      console.log(casa);
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
