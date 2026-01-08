import { Observable } from "rxjs";
import { User } from "./user.model";

export interface AuthPort {
    login(email: string, password: string): Observable<User>;
    logout(): Observable<void>;
    getUser(): User | null;
}