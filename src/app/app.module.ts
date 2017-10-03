import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { LayoutBackgroundComponent } from './components/layouts/layout-background/layout-background.component';
import { LogoWhiteComponent } from './components/logo-white/logo-white.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
  { path: '', component: LayoutBackgroundComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutBackgroundComponent,
    LogoWhiteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
