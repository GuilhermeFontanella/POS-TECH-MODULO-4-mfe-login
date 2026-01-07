// infra/firebase/firebase-auth.service.ts
import { Injectable } from '@angular/core';
import { from, map, switchMap, Observable } from 'rxjs';
import { AuthPort } from '../../domain/auth/auth.port';
import { User } from '../../domain/auth/user.model';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { SessionStorageService } from '../../shared/session-storage.service';
import { firebaseApp } from './firebase.config';

@Injectable({ providedIn: 'root' })
export class FirebaseAuthService implements AuthPort {

  private auth = getAuth(firebaseApp);

  constructor(private session: SessionStorageService) {}

  login(email: string, password: string): Observable<User> {
    return from(
      signInWithEmailAndPassword(this.auth, email, password)
    ).pipe(
      switchMap(result =>
        from(result.user.getIdToken()).pipe(
          map(token => {
            const user: User = {
              id: result.user.uid,
              email: result.user.email!,
              name: result.user.displayName ?? '',
              token
            };

            this.session.setUser(user);
            return user;
          })
        )
      )
    );
  }

  logout(): Observable<void> {
    return from(signOut(this.auth)).pipe(
      map(() => {
        this.session.clearUser();
        return void 0;
      })
    );
  }

  getUser(): User | null {
    return this.session.getUser();
  }
}
