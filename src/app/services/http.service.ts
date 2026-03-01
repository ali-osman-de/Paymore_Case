import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService {
    constructor(private httpClient: HttpClient) { }
    
    baseUrl: string = "http://localhost:3000/transactions";
    
    async get<T>(
        callback: (response: T) => void | Promise<void>,
        errorCallback?: (error: HttpErrorResponse) => void | Promise<void>
    ): Promise<void> {
        try {
            const response = await firstValueFrom(this.httpClient.get<T>(this.baseUrl));
            await callback(response);
        } catch (error) {
            if (errorCallback) {
                await errorCallback(error as HttpErrorResponse);
            }
        }
    }

    async getAllDataBySized<T>(
        callback: (response: T) => void | Promise<void>,
        errorCallback?: (error: HttpErrorResponse) => void | Promise<void>,
        page?: number,
        limit?: number
    ): Promise<void> {
        try {
            const requestUrl = this.baseUrl + `?_page=${page}&_per_page=${limit}`;
            const response = await firstValueFrom(this.httpClient.get<T>(requestUrl));
            await callback(response);
        } catch (error) {
            if (errorCallback) {
                await errorCallback(error as HttpErrorResponse);
            }
        }
    }
}
