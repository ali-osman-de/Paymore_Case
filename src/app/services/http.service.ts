import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService {
    constructor(private httpClient: HttpClient) { }
    
    baseUrl: string = "https://paymore-case.onrender.com/transactions";
    
    async get<T>(
        callback: (response: T) => void | Promise<void>,
        errorCallback?: (error: HttpErrorResponse) => void | Promise<void>,
        url?: string
    ): Promise<void> {
        try {
            const requestUrl = url ?? this.baseUrl;
            const response = await firstValueFrom(this.httpClient.get<T>(requestUrl));
            await callback(response);
        } catch (error) {
            if (errorCallback) {
                await errorCallback(error as HttpErrorResponse);
            }
        }
    }
}
