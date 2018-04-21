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
    this.pumps = this.pumpService.getPumpsFromData();
  };

  removePump(pump: Pump) {
    this.pumpService.deletePump(pump);
  }
}

