import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './todo/Notfound.component';

const routes:Routes =[
{path:'',component:LoginComponent},
{path:"LoginComponent",component:LoginComponent},
{path :"register",component:RegisterComponent},
{path:'home',component:HomeComponent,children:[
  {
    path:'',loadChildren:()=>import("./dashboard/dashboard.module").then((u)=>u.DashboardModule),
  },
  {
    path:'todo',loadChildren:()=>import("./todo/todo.module").then((u)=>u.TodoModule),
  }
]},
{path:'**',component:NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,NotFoundComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
