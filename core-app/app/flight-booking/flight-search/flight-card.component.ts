
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html'
})
export class FlightCardComponent  {
    
    constructor() { }

    @Input() item: Flight;
    @Input() selectedItem: Flight;
    @Output() selectedItemChange = new EventEmitter();

    select() {
        this.selectedItemChange.emit(this.item);
    }

}