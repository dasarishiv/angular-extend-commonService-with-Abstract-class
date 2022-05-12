import { Component, Input } from '@angular/core';
import { ApiService } from './api-service';
import { MockapiService } from './mockapi.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  // providers: [
  //   {
  //     provide: ApiService,
  //     useClass: MockapiService,
  //   },
  // ],
})
export class HelloComponent {
  @Input() name: string;
  constructor(private apiService: ApiService) {
    apiService.getIssues('dotnet', 'runtime').subscribe();
  }
}
