import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private SERVER_URL = 'http://localhost:3000';
  channels = [];
  // chat='Sumanta';
  constructor(private router: Router) {}

  ngOnInit() {
    const socket = socketIo(this.SERVER_URL);

    socket.on('connect', () => {
      console.log('connected to server from login.html');
      console.log('socketid in login component', socket.id);
      socket.on('getchannels', (chatChannels) => {
        console.log('chatChannels', chatChannels);
        this.channels = chatChannels;
        console.log('channels:', this.channels);
        // this.channels.forEach((channel) => {
        //   const options = jQuery('<option></option>');
        //   console.log('channel', channel);
        //   options.text(channel.c_name);
        //   jQuery('#channel').append(options);
        // });
      });
    });


    // socket.on('disconnect', function () {
    //   console.log('Disconnected from Server from Index page');
    // });
  }
  onSubmit(form: NgForm) {
    console.log("form:", form);
    // this.router.navigate(['chat']);


  }
}
