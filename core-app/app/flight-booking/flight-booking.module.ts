import { FlightCardComponent } from './flight-search/flight-card.component';
import {SharedModule} from '../shared/shared.module';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        FormsModule, CommonModule, SharedModule
    ],
    declarations: [
        FlightSearchComponent, FlightCardComponent
        
    ],
    providers: [

    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule {
}