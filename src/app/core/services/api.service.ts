import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../models/config.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL: string;

  constructor(public http: HttpClient, private appConfig: AppConfig) {
    this.BASE_URL = appConfig.apiUrl;
  }

  get<T>(type: string): Observable<T> {
    return this.http.get<T>(this.getUrl(type));
  }

  post<T>(type: string, payload?: unknown): Observable<T> {
    return this.http.post<T>(this.getUrl(type), payload ?? {});
  }

  put<T>(type: string, payload: unknown): Observable<T> {
    return this.http.put<T>(this.getUrl(type), payload);
  }

  patch<T>(type: string, payload: unknown): Observable<T> {
    return this.http.patch<T>(this.getUrl(type), payload);
  }

  delete(type: string, payload: unknown): Observable<unknown> {
    return this.http.request('delete', this.getUrl(type), { body: payload });
  }

  getUrl(type: string) {
    let url = this.BASE_URL + type;
    return url;
  }
}
