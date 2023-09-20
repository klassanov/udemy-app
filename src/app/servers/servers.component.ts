import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // Inline declaration is also possible
  // template: `<app-server></app-server>
  //            <h4>Inline template</h4>
  //           <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer: boolean = false;
  serverCreationStatus = "No server was created";
  updatedServerName = '';

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: Event){
    //event.target.value is ok if event is of type any, but we decided to specify its typa
    console.log(event);

    //Explicit cast and assing to variable
    let currentValue = (<HTMLInputElement>event.target).value;
    console.log(currentValue);
    this.updatedServerName = currentValue;
  }
}
