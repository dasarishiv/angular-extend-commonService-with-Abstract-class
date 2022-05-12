import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from '../hello.component';
import { ApiService } from '../api-service';
import { MockapiService } from '../mockapi.service';

@NgModule({
  imports: [CommonModule],
  declarations: [HelloComponent],
  exports: [HelloComponent],
  providers: [
    {
      provide: ApiService,
      useClass: MockapiService,
    },
  ],
})
export class ShareModule {}
