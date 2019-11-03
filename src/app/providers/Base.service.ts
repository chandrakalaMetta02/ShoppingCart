import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export class BaseService {

    constructor(protected http: HttpClient) { }
    
    /**
     * Common request function with basic mapping.
     * @param url Request URL.
     * @param body Body of the request if any
     * @param options An optional extra information object as per the request method.
     * @param method Request method.
     */
    _makeRequest<T>(
        url: string,
        body?: any,
        method: HttpMethod = 'GET',
        options?: {
            requiredMap?: boolean;
            responseType?: string;
            headers?: HttpHeaders;
            params?: HttpParams;
            observe?: 'body' | 'events' | 'response';
            isSimpleReq?:boolean;
        }): Observable<T> {
        if(!options) options={};
        if(options && !options.headers){
            options['headers'] = new HttpHeaders();
        }
        const http = this.http;
        let request;
       
           
        let headers=options && options.headers;
        let params = options && options.params;
     
        let requestOptions = { headers, params};
        switch (method) {
            case 'POST':
            case 'PUT':
            case 'DELETE':
                requestOptions['responseType']= options && options.responseType as any || 'json',
                requestOptions['observe']= options && options.observe || 'body';
                const args = (method === 'DELETE') ? [url, requestOptions] : [url, body, requestOptions];
                request = this._getHttpFn(method).apply(http, args);

                break;
            case 'GET':
            default:
                request = this.http.get(url, { headers, params});

        }
        return request;
    }

    _getHttpFn(method: HttpMethod) {
        const http = this.http;
        let fn = this.http.post;

        switch (method) {
            case 'POST':
                fn = http.post;
                break;
            case 'PUT':
                fn = http.put;
                break;
            case 'DELETE':
                fn = http.delete;
        }

        return fn;
    }
}