import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { User } from '../../domain/auth/user.model';
import { RegistrationPort } from 'src/app/domain/registration/registration.port';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firebaseConfig } from './firebase.config';

@Injectable({ providedIn: 'root' })
export class FirebaseRegisterService implements RegistrationPort {

  constructor(private http: HttpClient) {}

  register(data: User): Observable<any> {
    return this.createNewAuthUser(data).pipe(
        switchMap((authResponse: any) => {
            const uid = authResponse.localId;
            const token = authResponse.idToken;
            return this.createUserProfile(uid, token, data);
        })
    );
  }

  private createUserProfile(uid: string, token: string, data: User): Observable<any> {
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    const firestorePayload = {
        fields: {
            name: { stringValue: data.name },
            email: { stringValue: data.email },
            createdAt: { stringValue: new Date().toISOString() }
        }
    }
    return this.http.post(`${environment.FIRESTORE_USER}${uid}`, firestorePayload, { headers });
  }

  private createNewAuthUser(data: User): Observable<any> {
    const jsonData = JSON.stringify({email: data.email, password: data.password});
    return this.http.post(`${environment.REGISTER_NEW_USER}${firebaseConfig.apiKey}`, jsonData);
  }
}
