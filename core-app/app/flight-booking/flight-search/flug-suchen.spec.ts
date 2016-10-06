import {Flight} from '../../entities/flight';
import {
    inject,
    async,
    fakeAsync,
    tick,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Observable} from 'rxjs';
import {FlightSearchComponent} from "./flight-search.component";
import {FlightService} from "../flight.service";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// This should only be called once.
TestBed.initTestEnvironment(
    BrowserDynamicTestingModule, 
    platformBrowserDynamicTesting());

class FlightServiceMock {
    //findById(id) { return null; }
    find(von, nach) {
        var result = [[{ id: 1, from: 'Graz', to: 'Hamburg', date: '2017-01-01' }]];
        return Observable.from(result);
    }
    //save(flug) { return null; }
}

describe('FlugSuchen', () => {




    beforeEach(() => {


        
        TestBed.configureTestingModule({
            imports: [HttpModule, FormsModule, CommonModule],
            declarations: [FlightSearchComponent],
            providers: [
                {provide: FlightService, useClass: FlightServiceMock},
                {provide: 'CONFIG', useValue: { baseUrl: '' }}
            ]
        });
        TestBed.compileComponents();
    });

    it('should have no selected flight initially', () => {
        var flightSearch = TestBed.createComponent(FlightSearchComponent);
        expect(flightSearch.componentInstance.selectedFlight).toBeUndefined();
    });

    it('should load flights', async(() => {


        TestBed
            .overrideComponent(FlightSearchComponent, { set: { providers:[ {provide: FlightService, useClass: FlightServiceMock} ] }})
            .compileComponents()
            .then(() => {

                var flightSearch = TestBed.createComponent(FlightSearchComponent);

                flightSearch.componentInstance.from = "Graz";
                flightSearch.componentInstance.to = "Hamburg";

                flightSearch.componentInstance.search().then((fluege: Flight[]) => {
                    expect(fluege.length).toEqual(1);
                });
            });
    }));
});