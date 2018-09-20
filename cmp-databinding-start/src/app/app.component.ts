import { Component } from '@angular/core';
// import { Server } from 'https';
import {Server} from '../Server'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [new Server('server','himanshu','him')];
  
 
}
