import { Injectable } from '@angular/core';
import { User } from '../../domain/auth/user.model';
import { BehaviorSubject } from 'rxjs';
import { SessionStorageService } from 'src/app/shared/session-storage.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationUseCase } from 'src/app/application/registration/registration.usecase';

@Injectable()
export class RegistrationiewModel {
  loading$ = new BehaviorSubject(false);
  error$ = new BehaviorSubject<string | null>(null);
  user$ = new BehaviorSubject<User | null>(null);
  formGroup!: FormGroup; 

  constructor(
    private registrationUseCase: RegistrationUseCase,
    private sessionService: SessionStorageService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      email: [null, Validators.required],
      name: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  register() {
    const newUser = {
      name: this.formGroup.value.name as string,
      email: this.formGroup.value.email as string,
      password: this.formGroup.value.password as string
    };

    this.loading$.next(true);
    this.registrationUseCase.execute(newUser).subscribe({
      next: user => {
        this.user$.next(user);
      },
      error: err => {
        this.error$.next(err.message || 'Erro no cadastro');
        this.loading$.next(false);
      }
    });
  }
}
