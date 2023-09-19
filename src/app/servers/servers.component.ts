import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>
  //            <h4>Inline template</h4>
  //           <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer: boolean = false;
  serverCreationStatus = "No server was created";

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }
}
