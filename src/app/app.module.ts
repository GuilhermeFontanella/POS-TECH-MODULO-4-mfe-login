import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AUTH_PORT } from './domain/auth/auth.token';
import { FirebaseAuthService } from './infra/firebase/firebase-auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    { provide: AUTH_PORT, useClass: FirebaseAuthService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }