import { InjectionToken } from '@angular/core';
import { RegistrationPort } from './registration.port';

export const REGISTRATION_PORT = new InjectionToken<RegistrationPort>('REGISTRATION_PORT');