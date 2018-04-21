import { Injectable } from '@angular/core';
import { Pump } from '../models/pump';
import { PUMPS } from '../data/pump-data';
import { findIndex } from 'lodash';

@Injectable()

export class PumpService {
  private pumps = PUMPS;

  getPumpsFromData(): Pump[] {
    return this.pumps;
  }

//   addUser(user:User){
//     this.upersons.push(user);
//     console.log(this.upersons);

//   }
//   updateUser(user:User){
//     let index=findIndex(this.upersons,(u:User)=>{
//       return u.id=== user.id;
//     })
//     this.upersons[index]=user;
//   }
  deletePump (pump: Pump) {
    this.pumps.splice( this.pumps.indexOf(pump), 1 );
    console.log(this.pumps);
  }

  constructor() { }

}
