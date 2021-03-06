import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

// modules
import { AccountRoutingModule } from './account.route';
import { AccountAppComponent } from './account.app.component';

@NgModule({
  declarations: [
    // components
    AccountAppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AccountModule { }
