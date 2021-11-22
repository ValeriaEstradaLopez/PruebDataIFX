
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousesComponent } from './houses/houses.component';
import { StaffComponent } from './staff/staff.component';
import { StudentsComponent } from './students/students.component';
import { CreateComponent } from './students/create/create.component';
import { ViewComponent } from './students/view/view.component';

const routes: Routes = [

  {path:'',
component: HomeComponent},

{path:'students',
component: StudentsComponent},
{path:'students/create',
component: CreateComponent},
{path:'students/view',
component: ViewComponent},
{path:'profesors',
component: StaffComponent},
{path:'houses',
component: HousesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
