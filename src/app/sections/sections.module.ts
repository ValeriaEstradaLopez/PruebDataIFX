import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogContent, MatDialogModule} from '@angular/material/dialog';
import { SectionsRoutingModule } from './sections-routing.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
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
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { ViewComponent } from './students/view/view.component';

@NgModule({
  declarations: [
   
    StudentsComponent,
    StaffComponent,
    HomeComponent,
    HousesComponent,
    AgePipe,
    CreateComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SectionsRoutingModule, 
    MatCardModule,
     MatButtonModule,
     MatTableModule,
     MatPaginatorModule,
     MatFormFieldModule,
     MatInputModule,
     MatSlideToggleModule, 
     MatDatepickerModule,
     MatNativeDateModule,
  ]
})
export class SectionsModule { }
