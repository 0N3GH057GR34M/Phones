import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.css']
})
export class BasketComponent {
    status;
    phones;
    constructor(private http: HttpClient) { }
    ngOnInit() {
        return this.http.get('https://localhost:44316/store/getphones').subscribe(data => this.phones = data);
    }
    remove(id) {
        const params = new HttpParams().set('id', id.toString());
        return this.http.get('https://localhost:44316/store/removetobasket', { params }).subscribe(next => { window.location.reload(); });
    }
}
