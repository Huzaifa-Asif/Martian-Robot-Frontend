import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
    ) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // method for GET request
  get(path) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiURL + '/' + path).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  // method for POST request
  post(path, data) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.apiURL + '/' + path, data).subscribe((response: any) => {
        resolve(response);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  // method for PATCH request
  patch(path,unique, data) {
    return new Promise((resolve, reject) => {
      this.http.patch(environment.apiURL + '/' + path+ '/' +unique, data).subscribe((response: any) => {
        resolve(response);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  // method for DELETE request
  remove(path,unique) {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.apiURL + '/' + path+ '/' +unique).subscribe((response: any) => {
        resolve(response);
      }, (error: any) => {
        reject(error);
      });
    });
  }


}
