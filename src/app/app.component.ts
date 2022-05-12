import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api-service';
import { Issue } from './issue';
import { MockapiService } from './mockapi.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [
  //   {
  //     provide: ApiService,
  //     useClass: MockapiService,
  //   },
  // ],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  $issues: Observable<Issue[]> = this.apiService.getIssues('dotnet', 'runtime');

  constructor(private apiService: ApiService) {
    // this.$issues = apiService.getIssues('dotnet', 'runtime').subscribe((issues) => {
    //   console.log('issues', issues);
    //   this.issues = issues;
    // });
  }
}
