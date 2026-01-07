// application/auth/logout.usecase.ts
import { Inject, Injectable } from '@angular/core';
import { AuthPort } from '../../domain/auth/auth.port';
import { Observable } from 'rxjs';
import { AUTH_PORT } from 'src/app/domain/auth/auth.token';

@Injectable()
export class LogoutUseCase {
  constructor(@Inject(AUTH_PORT) private auth: AuthPort) {}

  execute(): Observable<void> {
    return this.auth.logout();
  }
}
