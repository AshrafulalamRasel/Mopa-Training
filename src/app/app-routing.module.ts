import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CreateEmployeeComponent} from "./component/create-employee/create-employee.component";

const routes: Routes = [

  {
    path: '',
    component: CreateEmployeeComponent,
    children: []
  },
  ]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {

}
