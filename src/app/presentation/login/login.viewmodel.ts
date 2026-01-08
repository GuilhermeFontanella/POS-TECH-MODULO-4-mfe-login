// presentation/login/login.viewmodel.ts
import { Injectable } from '@angular/core';
import { LoginUseCase } from '../../application/auth/login.usecase';
import { User } from '../../domain/auth/user.model';
import { BehaviorSubject } from 'rxjs';
import { SessionStorageService } from 'src/app/shared/session-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginViewModel {
  loading$ = new BehaviorSubject(false);
  error$ = new BehaviorSubject<string | null>(null);
  user$ = new BehaviorSubject<User | null>(null);

  constructor(
    private loginUseCase: LoginUseCase,
    private sessionService: SessionStorageService,
    private router: Router
  ) {}

  login(email: string, password: string) {
    this.loading$.next(true);
    this.loginUseCase.execute(email, password).subscribe({
      next: user => {
        this.user$.next(user);
        this.sessionService.setUser(user);
        this.loading$.next(false);
        this.error$.next(null);
        this.router.navigate(['/home-page']);
      },
      error: err => {
        this.error$.next(err.message || 'Erro no login');
        this.loading$.next(false);
      }
    });
  }
}
