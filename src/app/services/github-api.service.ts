import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { }




  getInfo() {
    return this.http.get('https://api.github.com/users/niracash').pipe(
      shareReplay(1)

    );
  }
}
