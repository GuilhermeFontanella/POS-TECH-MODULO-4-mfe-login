// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { StoreModule } from '@ngrx/store';
// import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
// import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { TopNavbarModule } from 'src/app/ui/top-navbar/top-navbar.module';
// import { ThemeDirectiveModule } from 'src/utils/directives/theme.module';
// import { themeReducer } from 'src/utils/reducers/them.reducer';
// import { AppRoutingModule } from './app-routing.module';
// import { ContentWrapperComponent } from './ui/component-wrapper/content-wrapper.component';
// import { NavbarComponent } from './ui/navbar/navbar.component';
// import { SideMenuComponent } from './ui/side-menu/side-menu.component';
// import { MenuOutline, UserOutline, LogoutOutline, EyeFill, EyeInvisibleFill, PoweroffOutline, BulbOutline, BulbFill, SettingOutline } from '@ant-design/icons-angular/icons';
// const icons = [
//   MenuOutline,
//   UserOutline,
//   LogoutOutline,
//   EyeFill,
//   EyeInvisibleFill,
//   PoweroffOutline,
//   BulbOutline,
//   BulbFill,
//   SettingOutline
// ];

// describe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [AppComponent],
//       imports: [
//         BrowserModule,
//         AppRoutingModule,
//         NzLayoutModule,
//         TopNavbarModule,
//         HttpClientModule,
//         NzIconModule,
//         BrowserAnimationsModule,
//         StoreModule.forRoot({ theme: themeReducer }),
//         ThemeDirectiveModule,
//         ContentWrapperComponent,
//         SideMenuComponent,
//         NavbarComponent
//       ],
//       providers: [
//         { provide: NZ_ICONS, useValue: icons }
//       ]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create AppComponent', () => {
//     expect(component).toBeTruthy();
//   })
// });
