import { Component, OnInit } from '@angular/core';
// import { Server1 } from 'https';
import {Server} from '../../Server'
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }
  // onAddServer() {
  //   this.serverElements.push(new Server(
  //     'server',
  //     this.newServerName,
  //     this.newServerContent
  //     ));
  // }

  // onAddBlueprint() {
  //   this.serverElements.push(new Server(
  //      'blueprint',
  //      this.newServerName,
  //      this.newServerContent
  //   ));
  // }
}
