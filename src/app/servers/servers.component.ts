import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowUserName = false;
  serverCreationStatus = "No server was created!";
  resetUserName = '';
  serverName = 'Testserver';
  userName = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    if (!this.isEmptyOrSpaces(this.userName)){
      this.allowUserName = true;
    } 

  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onReset(){
    this.userName = '';
    
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }

  onUpdateUserName(event: any){
    this.userName = event.target.value; 
  }

  isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

}
