import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpResponse, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserAuthorizationStatusService } from './user-authorization-status.service';
import { LoggerService } from './logger.service';

@Injectable()
export class AuthorizationInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(req).pipe(tap(
            (next: HttpResponse<any>) => {
                if (next.status === 200) { this.userservice.setuserstatus(next.status); this.logger.log('user status set true with status code 200'); }
                else if (next.status === 206) { this.userservice.setuserstatus(next.status); this.logger.log('user status set false with status code 206');}
            },
            (error: HttpResponse<any>) => {
                if (error.status === 401) { this.userservice.setuserstatus(error.status); window.location.replace('https://localhost:44316/user'); this.logger.log('user status set false with status code 401'); this.logger.log('redirect to login page');}
            }));
    }
    constructor(private userservice: UserAuthorizationStatusService, private logger: LoggerService) { }
}
