// presentation/login/login.viewmodel.ts
import { Injectable } from '@angular/core';
import { LoginUseCase } from '../../application/auth/login.usecase';
import { User } from '../../domain/auth/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginViewModel {
  loading$ = new BehaviorSubject(false);
  error$ = new BehaviorSubject<string | null>(null);
  user$ = new BehaviorSubject<User | null>(null);

  constructor(private loginUseCase: LoginUseCase) {}

  login(email: string, password: string) {
    this.loading$.next(true);
    this.loginUseCase.execute(email, password).subscribe({
      next: user => {
        this.user$.next(user);
        this.loading$.next(false);
        this.error$.next(null);
      },
      error: err => {
        this.error$.next(err.message || 'Erro no login');
        this.loading$.next(false);
      }
    });
  }
}
