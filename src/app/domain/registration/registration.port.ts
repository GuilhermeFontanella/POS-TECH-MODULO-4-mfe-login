import { Observable } from "rxjs";
import { User } from "../auth/user.model";


export interface RegistrationPort {
    register(user: User): Observable<User>;
}