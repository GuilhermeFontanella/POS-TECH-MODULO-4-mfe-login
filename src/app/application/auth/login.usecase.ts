// application/auth/login.usecase.ts
import { Inject, Injectable } from '@angular/core';
import { AuthPort } from '../../domain/auth/auth.port';
import { Observable } from 'rxjs';
import { User } from '../../domain/auth/user.model';
import { AUTH_PORT } from 'src/app/domain/auth/auth.token';

@Injectable()
export class LoginUseCase {
  constructor(@Inject(AUTH_PORT) private auth: AuthPort) {}

  execute(email: string, password: string): Observable<User> {
    return this.auth.login(email, password);
  }
}
