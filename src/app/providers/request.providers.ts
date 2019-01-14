import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CallApiService {
    public HOST: String = '';
    private errorObserver: any;
    public error: any;

    constructor(private http: HttpClient) {
        this.errorObserver = null;
        this.error = Observable.create(observer => {
            this.errorObserver = observer;
        });

        if (environment.production) {
            this.HOST = environment.apiEndpoint;
        } else {
            this.HOST = environment.apiEndpoint;
        }
    }

    public callWithOutScope(
        url: string, method: string,
        params: any, authorizeKey: string,
        authorization: string
    ) {
        if (method === 'GET') {
            return this._get(url, params, authorizeKey, authorization);
        } else {
            return this._post(url, params, authorizeKey, authorization);
        }
    }

    public _get(url: string, params: any, authorizeKey: string, authorization: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json'
                })
            };

            if (authorizeKey !== '') {
                httpOptions = {
                    headers: new HttpHeaders({
                      'Content-Type':  'application/json',
                      'Authorization': authorization
                    })
                };
            }

            this.http.get(this.HOST + url, httpOptions).toPromise().then((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }

    public _post(url: string, params: any, authorizeKey: string, authorization: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json'
                })
            };

            if (authorizeKey !== '') {
                httpOptions = {
                    headers: new HttpHeaders({
                      'Content-Type':  'application/json',
                      'Authorization': authorization
                    })
                };
            }

            this.http.post(this.HOST + url, params, httpOptions).toPromise().then((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }

    public handleError(error, reject) {
        reject(error);
        this.errorObserver.next(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}


