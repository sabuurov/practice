// @ts-ignore
import { NgModule } from "@angular/core";
// @ts-ignore
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GroupComponent } from "./group/group.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  {path : '', component : DashboardComponent},
  {path : 'user', component : UserComponent},
  {path : 'group', component : GroupComponent}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
