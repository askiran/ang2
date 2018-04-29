import { Component, OnInit } from '@angular/core';
import { PumpService } from '../../../services/pump.service';
import { Pump } from '../../../models/pump';
import { clone } from 'lodash';

@Component({
  selector: 'app-pumps',
  templateUrl: './add-new-pump.component.html',
  styleUrls: ['./add-new-pump.component.css']
})

export class AddNewPumpComponent implements OnInit {

  pumps: Pump[];
  pumpForm: boolean = false;
  isNewPump: boolean;
  newPump: any= {};
  editPumpForm: boolean = false;
  editedPump: any= {};
  constructor(private pumpService: PumpService) { }

  ngOnInit() {}

  savePump (newPump: Pump) {
    console.log(newPump);
    this.pumpService.addNewPump(newPump);
  }

  cancelNewPump () {
    this.newPump = {};
  }
}

