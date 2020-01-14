import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PhoneService {
    constructor(private http: HttpClient, private logger: LoggerService) { }
    getphones(): any {
        this.logger.log('phones got');
        return this.http.get('https://localhost:44316/store/getphones');
    }
    getbasket(): any {
        this.logger.log('basket got');
        return this.http.get('https://localhost:44316/store/getbasket')
    }
    add(id) {
        const params = new HttpParams().set('id', id.toString());
        return this.http.get<Observable<any>>('https://localhost:44316/store/addtobasket', { params });
            //.subscribe(next => { window.location.reload(); this.logger.log('phone added');});
    }
    remove(id) {
        const params = new HttpParams().set('id', id.toString());
        return this.http.get<Observable<any>>('https://localhost:44316/store/removetobasket', { params });
            //.subscribe(next => { /*window.location.reload();*/ this.logger.log('phone removed');});
    }
    logout() {
        this.http.get('https://localhost:44316/authorization/logouting')
            .subscribe(next => { window.location.replace('https://localhost:44316'); this.logger.log('user loged out'); });
    }
    getstatus() {
        this.logger.log('user status got');
        console.log(sessionStorage.getItem('userstatus'));
    }    
}
