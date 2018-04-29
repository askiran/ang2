import { Component, OnInit } from '@angular/core';
import { PumpService } from '../../services/pump.service';
import { Pump } from '../../models/pump';
import { clone } from 'lodash';

@Component({
  selector: 'app-pumps',
  templateUrl: './pumps.component.html',
  styleUrls: ['./pumps.component.css']
})

export class PumpsComponent implements OnInit {

  pumps: Pump[];
  constructor(private pumpService: PumpService) { }

  ngOnInit() {
    this.getPumps();
  }

  getPumps = function(){
    this.pumps = this.pumpService.getPumps()
                    .subscribe(
                        (pumpsRes) => {
                          this.pumps = pumpsRes.pumpData; console.log(this.pumps);
                        }
                    );
  };

  removePump(pump: Pump) {
    // this.pumpService.deletePump(pump);
  }
}

