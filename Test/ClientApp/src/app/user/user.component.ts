import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    user;
    constructor(private http: HttpClient) { }
    confirm(login: string, password: number) {
        const params = new HttpParams().set('login', login.toString()).set('password', password.toString());
        this.http.get('https://localhost:44316/authorization/authorizing', { params }).subscribe(next => {
            window.location.replace('https://localhost:44316');
        }, error => {
            window.location.reload();
        });
    }
    registration() {
        window.location.replace('https://localhost:44316/registration');
    }
}
