import {FlightBookingModule} from './flight-booking/flight-booking.module';
import {CityPipe} from './shared/pipes/city.pipe';
import {FlightService} from './flight-booking/flight.service';
import {FlightSearchComponent} from './flight-booking/flight-search/flight-search.component';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {BonusMilesModule} from 'bonus-miles/bonus-miles';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        FlightBookingModule,
        BonusMilesModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}