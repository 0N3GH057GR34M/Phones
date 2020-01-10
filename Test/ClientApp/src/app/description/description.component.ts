import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
    phone: any;
    constructor(private http: HttpClient, private route: ActivatedRoute,) { }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        const params = new HttpParams().set('id', id);
        return this.http.get('https://localhost:44316/store/getphonedescription', { params }).subscribe(data => this.phone = data);
    }
}
