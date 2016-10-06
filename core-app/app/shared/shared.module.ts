import {CityPipe} from './pipes/city.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe
    ],
    providers: [
    ],
    exports: [
        CityPipe
    ]  
})
export class SharedModule {
}