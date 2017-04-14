import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class AppService {
 private dataObs$ = new ReplaySubject(1); 
 constructor (
   private http: Http
  ) {}

  getUser(forceRefresh?: boolean) {
    // If the Subject was NOT subscribed before OR if forceRefresh is requested 
        if (!this.dataObs$.observers.length || forceRefresh) {
            this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(
                data => this.dataObs$.next(data),
                error => {
                    this.dataObs$.error(error);
                    // Recreate the Observable as after Error we cannot emit data anymore
                    this.dataObs$ = new ReplaySubject(1);
                }
            );
        }

        return this.dataObs$;
  }

}
