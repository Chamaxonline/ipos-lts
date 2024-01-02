import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(protected http: HttpClient) {}

  protected getRequestHeaders(): { headers: HttpHeaders } {
    var headers = new HttpHeaders({
      ClientSecret: '5fdba47152ea6117845f7f4e',
      'Content-Type': 'application/json',
    });
    return { headers: headers };
  }

  protected get<T>(endpointUrl: any): Observable<T> {
    return this.http.get<T>(endpointUrl, this.getRequestHeaders());
  }

  protected post<T>(endpointUrl: any, object: any): Observable<T> {
    return this.http.post<T>(
      endpointUrl,
      JSON.stringify(object),
      this.getRequestHeaders()
    );
  }

  protected delete<T>(endpointUrl: any, object: any): Observable<T> {
    let options = {
      headers: this.getRequestHeaders().headers,
      body: JSON.stringify(object),
    };
    return this.http.delete<T>(endpointUrl, options);
  }
}
