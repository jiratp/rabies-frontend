import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService {
    onSignin: BehaviorSubject<string> = new BehaviorSubject('');

    constructor() { }
    sendData(user) {
        this.onSignin.next(user);
    }
}
