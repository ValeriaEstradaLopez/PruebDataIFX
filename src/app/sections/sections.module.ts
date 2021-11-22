import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';

import { StudentsComponent } from './students/students.component';
import { StaffComponent } from './staff/staff.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HousesComponent } from './houses/houses.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AgePipe } from '../age.pipe';
import { CreateComponent } from './students/create/create.component';



@NgModule({
  declarations: [
    
    StudentsComponent,
    StaffComponent,
    HomeComponent,
    HousesComponent,
    AgePipe,
    CreateComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule, 
    MatCardModule,
     MatButtonModule,
     MatTableModule,
     MatPaginatorModule,
     MatFormFieldModule,
     MatInputModule,
     
     

  ]
})
export class SectionsModule { }
