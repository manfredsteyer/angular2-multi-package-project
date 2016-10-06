import {NgModule} from "@angular/core";
import {BonusMilesComponent} from "./bonus-miles.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        BonusMilesComponent
    ],
    exports: [
        BonusMilesComponent
    ],
    bootstrap: [
        BonusMilesComponent
    ]
})
export class BonusMilesModule {
}