import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AUTH_PORT } from './app/domain/auth/auth.token';
import { FirebaseAuthService } from './app/infra/firebase/firebase-auth.service';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: AUTH_PORT,
      useClass: FirebaseAuthService
    }
  ]
});