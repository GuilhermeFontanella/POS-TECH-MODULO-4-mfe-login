// shared/session-storage.service.ts
import { Injectable } from '@angular/core';
import { User } from '../domain/auth/user.model';

const SESSION_KEY = 'mfe-user';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {

  setUser(user: User) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
  }

  getUser(): User | null {
    const json = sessionStorage.getItem(SESSION_KEY);
    return json ? JSON.parse(json) : null;
  }

  clearUser() {
    sessionStorage.removeItem(SESSION_KEY);
  }
}
