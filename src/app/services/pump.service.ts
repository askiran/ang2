import { Injectable } from '@angular/core';
import { Pump } from '../models/pump';
import { PUMPS } from '../data/pump-data';
import { findIndex } from 'lodash';
import { RestService } from './rest.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class PumpService {
  private pumps = PUMPS;

  constructor(private restService: RestService) { }

  setHeader(): RequestOptions {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http:localhost:4200'
     });
    const options = new RequestOptions({ headers: headers });
      return options;
  }

  getPumps(): Observable<any> {
    return this.restService.get(
      'http://cresonix.com/API/pump-list.php?type=ADMIN&userId=1',
      this.setHeader()
    ).map(res => res);
  }

  addNewPump(pump: Pump) {
    pump.iduser = '16';
    pump.created_by = '30';

    const body = pump;

    return this.restService.post(
        'http://cresonix.com/API/pump.php',
        body,
        this.setHeader()
      ).subscribe (re => {
        console.log(re);
      });
  }

/*
  updatePump(pump: Pump){
    let index=findIndex(this.upersons,(u:User)=>{
      return u.id=== user.id;
    })
    this.upersons[index]=user;
  }


  deletePump (pump: Pump) {
    this.pumps.splice( this.pumps.indexOf(pump), 1 );
    console.log(this.pumps);
  }
*/
}
