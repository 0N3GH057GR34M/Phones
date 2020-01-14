import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserAuthorizationStatusService {
    constructor() { }
    setuserstatus(status: number) {
        if (status === 200) { sessionStorage.setItem('userstatus', 'true'); }
        else { sessionStorage.setItem('userstatus', 'false'); }
    }
    getuserstatus() {
        return sessionStorage.getItem('userstatus') === 'true';
    }
}
