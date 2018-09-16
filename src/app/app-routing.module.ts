import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'chat', component: ChatpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
