import { Component, OnInit, Output,EventEmitter} from '@angular/core';
// import { Server1 } from 'https';
import {Server} from '../../Server'
// import { EventEmitter } from 'events';
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output()
  dataPasser=new EventEmitter<Server>();
  constructor() { }

  ngOnInit() {
  }
  onAddServer(serverElement:Server) {
    this.dataPasser.emit(new Server('server',
    this.newServerName,this.newServerContent));
  }

  onAddBlueprint(serverElement:Server) {
    this.dataPasser.emit(new Server('blueprint',
    this.newServerName,this.newServerContent));
  }
  onClear(){
    this.dataPasser.emit(null);
  }
}
