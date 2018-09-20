import { Component, OnInit, Input } from '@angular/core';
import {Server} from '../../Server'
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
   @Input("s")
   element:Server;
  constructor() { }

  ngOnInit() {
  }

}
