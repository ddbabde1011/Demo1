import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
const routes: Routes = [
      { path:'', component:LoginComponent },
      { path:'register', component:RegisterComponent },
      { path: 'contact', component:ContactComponent},
      { path: 'about', component:AboutComponent},
      { path: 'dashboard-component', component:DashboardComponentComponent},
      { path: 'forgot-password', component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
