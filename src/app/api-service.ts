import { Observable } from 'rxjs';
import { Issue } from './issue';

export abstract class ApiService {
  abstract getIssues(owner: string, repo: string): Observable<Issue[]>;
}
