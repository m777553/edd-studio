import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {WeddingComponent} from "./common/main-pages/wedding/wedding.component";

const routes: Routes = [
  {
     path: 'wedding',
    pathMatch: 'full',
    component: WeddingComponent
  },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
