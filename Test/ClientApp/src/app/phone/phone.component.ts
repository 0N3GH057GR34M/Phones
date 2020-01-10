import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-phone',
    templateUrl: './phone.component.html',
    styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
    userstatus;
    phones;
    constructor(private http: HttpClient) { }
    ngOnInit() {
        this.http.get('https://localhost:44316/authorization/userchecking')
            .subscribe(next => { this.userstatus = true }, error => { this.userstatus = false});
        return this.http.get('https://localhost:44316/store/getphones').subscribe(data => this.phones = data);
    }
    add(id) {
        const params = new HttpParams().set('id', id.toString());
        return this.http.get('https://localhost:44316/store/addtobasket', { params })
            .subscribe(next => { window.location.reload(); }, error => { window.location.replace('https://localhost:44316/user'); });
    }
    remove(id) {
        const params = new HttpParams().set('id', id.toString());
        return this.http.get('https://localhost:44316/store/removetobasket', { params })
            .subscribe(next => { window.location.reload(); }, error => { window.location.replace('https://localhost:44316/user'); });
    }
    logout() {
        this.http.get('https://localhost:44316/authorization/logouting')
            .subscribe(next => { window.location.replace('https://localhost:44316'); });
    }
}
