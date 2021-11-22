import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { studentsModel } from 'src/app/models/studens.model';
import { HarryPotterServiceService } from 'src/app/Service/harry-potter-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  dataSource!: MatTableDataSource<any>;
  students: any =[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private hpService: HarryPotterServiceService ) { }
  
  ngOnInit(): void {
    
    this.getStudents();
   
  }
  
  getStudents(){
    this.hpService.getAllStudens().subscribe( (student) =>{
      this.students=student;
      
      this.dataSource=new MatTableDataSource(this.students);
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
  ngAfterViewInit() {
   
    
  }
}
