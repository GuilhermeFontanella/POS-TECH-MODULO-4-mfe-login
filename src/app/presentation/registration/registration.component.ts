// presentation/login/login.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RegistrationiewModel } from './registration.viewmodel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { RegistrationUseCase } from 'src/app/application/registration/registration.usecase';
import { REGISTRATION_PORT } from 'src/app/domain/registration/registration.token';
import { FirebaseRegisterService } from 'src/app/infra/firebase/firebase-register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
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
    RegistrationiewModel,
    RegistrationUseCase,
    {
      provide: REGISTRATION_PORT,
      useClass: FirebaseRegisterService
    }
  ]
})
export class RegistrationComponent implements OnInit {
  @Output('goBack') goBack = new EventEmitter();
  constructor(public vm: RegistrationiewModel) {}

  ngOnInit(): void {
      this.vm.user$.subscribe(user => {
        if (user) this.goBack.emit();
      });
  }

  register() {
    this.vm.register();
  }
}
