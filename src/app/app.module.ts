import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { ChatpageComponent } from './chatpage/chatpage.component';
import { ChatmessageComponent } from './chatpage/chatmessage/chatmessage.component';
import { SidebarComponent } from './chatpage/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SidebarComponent,
    ChatpageComponent,
    ChatmessageComponent
  ],
  imports: [BrowserModule,
            FormsModule,
            AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
