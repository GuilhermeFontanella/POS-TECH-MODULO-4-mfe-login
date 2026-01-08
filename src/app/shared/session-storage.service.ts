// shared/session-storage.service.ts
import { Injectable } from '@angular/core';
import { User } from '../domain/auth/user.model';
import { BehaviorSubject } from 'rxjs';

const SESSION_KEY = 'user';

@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  private userSubject = new BehaviorSubject<User | null>(this.getUser());
  user$ = this.userSubject.asObservable();

  constructor() {
    window.addEventListener('storage', (event) => {
      if (event.key === SESSION_KEY) {
        const user = event.newValue ? JSON.parse(event.newValue) : null;
        this.userSubject.next(user);
      }
    });
  }

  setUser(user: User) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
    this.userSubject.next(user);
  }

  getUser(): User | null {
    const json = sessionStorage.getItem(SESSION_KEY);
    return json ? JSON.parse(json) : null;
  }

  clearUser() {
    sessionStorage.removeItem(SESSION_KEY);
    this.userSubject.next(null);
  }
}
