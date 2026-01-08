import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../domain/auth/user.model';
import { RegistrationPort } from 'src/app/domain/registration/registration.port';
import { REGISTRATION_PORT } from 'src/app/domain/registration/registration.token';

@Injectable()
export class RegistrationUseCase {
  constructor(@Inject(REGISTRATION_PORT) private registrationPort: RegistrationPort) {}

  execute(data: User): Observable<User> {
    return this.registrationPort.register(data);
  }
}