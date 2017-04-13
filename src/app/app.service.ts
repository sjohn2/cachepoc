import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
 constructor (
    private http: Http
  ) {}

  getUser() {
    console.log("service called");
    return this.http.get('heroes.json')
    .map((res:Response) => res.json());
  }

}
