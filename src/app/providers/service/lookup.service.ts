import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { CallApiService } from './../request.providers';
import { Utility } from './../../api/utility';

@Injectable()
export class LookupService {

    requestProvider: any;
    responseLookup: any;

    constructor(private http: HttpClient, private callApiService: CallApiService) {
        this.requestProvider = callApiService;
    }

    getProvince() {
        const ProvinceListActive = Utility.Province.Inquiry.ByList.ListActive;
        // tslint:disable-next-line:max-line-length
        this.requestProvider.callWithOutScope(ProvinceListActive.url, ProvinceListActive.method, ProvinceListActive.param, '', '').then((response) => {
          const reponse = response;
          this.responseLookup.Province = response;
        }).catch((error) => {
          this.responseLookup.Province = [];
        });
    }
}
