import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Issue } from './issue';

@Injectable()
export class RemoteApiService implements ApiService {
  constructor(private httpClient: HttpClient) {}

  getIssues(owner: string, repo: string) {
    console.log('calling this RemoteApiService');
    return this.httpClient.get<Issue[]>(
      `https://api.github.com/repos/${owner}/${repo}/issues`
    );
  }
}
