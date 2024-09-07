import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TradeDetails } from './trademessage';
@Injectable({
  providedIn: 'root'
})
export class TradeMessageService {

  // API URI
  private _url: string = "http://localhost:9292/consumer-app/kafka/messages"
  constructor(private http: HttpClient) { }

  getTradeMessageDetails(): any {
    return this.http.get<TradeDetails>(this._url);
  }

}
