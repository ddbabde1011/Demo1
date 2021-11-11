import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { RegisterComponent } from './register/register.component';
import {MatSelectModule} from '@angular/material/select';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewOrderComponent } from './new-order/new-order.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponentComponent,
    ForgotPasswordComponent,
    NewOrderComponent,
    ManageusersComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    NgbModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
