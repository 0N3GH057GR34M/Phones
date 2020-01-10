import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PhoneComponent } from './phone/phone.component';
import { UserComponent } from './user/user.component';
import { DescriptionComponent } from './description/description.component';
import { BasketComponent } from './basket/basket.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        PhoneComponent,
        UserComponent,
        DescriptionComponent,
        BasketComponent,
        RegistrationComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'user', component: UserComponent },
            { path: '', component: PhoneComponent },
            { path: 'description/:id', component: DescriptionComponent },
            { path: 'basket', component: BasketComponent },
            { path: 'registration', component: RegistrationComponent },
        ])
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule { }
