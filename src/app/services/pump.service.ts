import { Injectable } from '@angular/core';
import { Pump } from '../models/pump';
import { PUMPS } from '../data/pump-data';
import { findIndex } from 'lodash';
//import { RestService } from './rest.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()

export class PumpService {
  private pumps = PUMPS;

//  constructor(private restService: RestService) { }

  getPumpsFromData(): Pump[] {
    return this.pumps;
  }

  setHeader(): RequestOptions {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});
		let options = new RequestOptions({ headers: headers });
		return options;
	}

  addNewPump(pump: Pump) {
	  console.log(pump);
		 let body = pump
		 /*
		return this.restService.post(
					'http://cresonix.com/API/pump.php',
					body,
					this.setHeader()
				).map(res => res);
				*/
  }

/*
  updatePump(pump: Pump){
    let index=findIndex(this.upersons,(u:User)=>{
      return u.id=== user.id;
    })
    this.upersons[index]=user;
  }
*/

  deletePump (pump: Pump) {
    this.pumps.splice( this.pumps.indexOf(pump), 1 );
    console.log(this.pumps);
  }

}
