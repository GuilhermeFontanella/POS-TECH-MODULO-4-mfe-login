// presentation/login/login.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LoginViewModel } from './login.viewmodel';
import { LoginUseCase } from 'src/app/application/auth/login.usecase';
import { LogoutUseCase } from 'src/app/application/auth/logout.usecase';
import { AUTH_PORT } from 'src/app/domain/auth/auth.token';
import { FirebaseAuthService } from 'src/app/infra/firebase/firebase-auth.service';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    NzButtonModule, 
    NzInputModule,
    NzCardModule,
    NzFormModule
  ],
  providers: [
    LoginViewModel,
    LoginUseCase,
    LogoutUseCase,
    {
      provide: AUTH_PORT,
      useClass: FirebaseAuthService
    }
  ]
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(public vm: LoginViewModel) {}

  login() {
    this.vm.login(this.email, this.password);
  }
}
