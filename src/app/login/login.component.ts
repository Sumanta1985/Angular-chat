import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private SERVER_URL = 'http://localhost:3000';
  channels = [];
  // chat='Sumanta';
  constructor() {}

  ngOnInit() {
    const socket = socketIo(this.SERVER_URL);

    socket.on('connect', ()=> {
      console.log('connected to server from login.html');
      console.log('socketid in login component', socket.id);
      socket.on('getchannels', (chatChannels) => {
        console.log('chatChannels', chatChannels);
        this.channels = chatChannels;
        console.log('channels:', this.channels);
      });
    });


    socket.on('disconnect', function () {
      console.log('Disconnected from Server from Index page');
    });
  }
}
