import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { UserAuthorizationStatusService } from '../user-authorization-status.service';
import { LoggerService } from '../logger.service';

@Component({
    selector: 'app-phone',
    templateUrl: './phone.component.html',
    styleUrls: ['./phone.component.css'],
    providers: [PhoneService]
})
export class PhoneComponent implements OnInit{
    userstatus;
    phones;
    constructor(private phoneservice: PhoneService, private userstatusservice: UserAuthorizationStatusService, private logger: LoggerService) { }
    ngOnInit() {       
        this.logger.log('user status got by component');
        this.phoneservice.getphones().subscribe(data => { this.phones = data; this.userstatus = this.userstatusservice.getuserstatus();});       
    }
    add(id) {
        this.phoneservice.add(id).subscribe(next => { this.phoneservice.getphones().subscribe(data => this.phones = data); });   
    }
    remove(id) {
        this.phoneservice.remove(id).subscribe(next => { this.phoneservice.getphones().subscribe(data => this.phones = data); });
    }
    logout() {
        this.phoneservice.logout();
    }
    getstatus() {
        this.phoneservice.getstatus();
    }
}
