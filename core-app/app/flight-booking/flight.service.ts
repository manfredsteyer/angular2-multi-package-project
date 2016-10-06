import { Injectable} from '@angular/core';
import { Http, URLSearchParams, Headers} from '@angular/http';


@Injectable()
export class FlightService {

    constructor(private http: Http) {
    }

    public find(from: string, to: string) {

        let url = "http://www.angular.at/api/flight";
        
        let headers = new Headers();
        headers.set('Accept', 'text/json');
        

        let search = new URLSearchParams();  //?from=Graz&nach=Hamburg
        search.set('from', from);
        search.set('to', to);

        return this.http.get(url, { headers, search })
                        .map(resp => resp.json());

    }

}