import {Component} from '@angular/core';

@Component({
    selector: 'flight-app', // <flight-app></...>
    template: `
        <div class="container">
            <div class="row">
                <h1>Flight App</h1> 
                <flight-search></flight-search>
            </div>
            <hr>
            <div class="row">
                <bonus-miles></bonus-miles>
            </div>
        </div>
    `
})
export class AppComponent {
    public info: string = "Welt";
}

