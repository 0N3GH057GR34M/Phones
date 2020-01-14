import { Component } from '@angular/core';
import { PhoneService } from '../phone.service';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.css']
})
export class BasketComponent {
    phones;
    constructor(private phoneservice: PhoneService) { }
    ngOnInit() {
        this.phoneservice.getbasket().subscribe(data => this.phones = data);
    }
    remove(id) {
        this.phoneservice.remove(id).subscribe(next => {
            this.phoneservice.getbasket().subscribe(data => this.phones = data);
        });
    }
}
