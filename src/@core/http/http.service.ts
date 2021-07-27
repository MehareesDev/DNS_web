import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  // Common function for http get operation
  get(url: string, parm?: any): Observable<any> {
    return parm ? this.http.get(url + '?' + parm) : this.http.get(url);
  }

  // Common function for http post operation
  post(url, data): Observable<any> {
    return this.http.post(url, data);
  }

  // Common function for http Put operation
  put(url, data, id?): Observable<any> {
    return id ? this.http.put(url + '/' + id, data) : this.http.put(url, data);
  }

  // Common function for http Delete operation
  delete(url, id?): Observable<any> {
    return id ? this.http.delete(url + '/' + id) : this.http.delete(url);
  }

  putS3(file, url): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'image/png');
    headers = headers.append('RequestType', 'S3');
    return this.http.put(url, file, {headers});
  }

  // Common function for http post operation
  postFiles(url, data): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(url, data, {headers});
  }
}
