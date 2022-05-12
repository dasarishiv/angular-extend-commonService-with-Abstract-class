import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ApiService } from './api-service';
import { RemoteApiService } from './remote-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from './share/share.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ShareModule],
  declarations: [AppComponent],
  providers: [
    {
      provide: ApiService,
      useClass: RemoteApiService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
