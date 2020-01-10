import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
    constructor(private http: HttpClient) { }
    registr(login: string, password: number) {
        const params = new HttpParams().set('login', login.toString()).set('password', password.toString());
        this.http.get('https://localhost:44316/authorization/registring', { params }).subscribe(next => {
            window.location.replace('https://localhost:44316/user');
        }, error => {
            window.location.reload();
        });
    }
}
