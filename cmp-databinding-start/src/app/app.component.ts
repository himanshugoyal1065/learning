import { Component } from '@angular/core';
// import { Server } from 'https';
import {Server} from '../Server'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:Server[]= [new Server('server','himanshu','him')];
  
  onDataReceived(serverElement:Server){
    if(serverElement===null){
      this.serverElements=[];
    }
    else{
    this.serverElements.push(serverElement);
    }
  }
}
