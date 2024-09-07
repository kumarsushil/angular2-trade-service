import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TradeMessageService } from './trademessage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trade Account Security Details';
  status: string;
  errorMessage: string;
  requestFinished = false;
  requestValid = false; 

  // Properly initialize the array with a type (e.g., any or a specific type)
  public tradeMessageDetail: any[] = [];  
  public tradeMessageDetails: any[] = [];  // Define the type as an array of any

  constructor(private tradeMessageService: TradeMessageService) {

  }

  ngOnInit() {

  }

  onSearch() {   
    this.tradeMessageService.getTradeMessageDetails()
      .subscribe(
      data => {
       // Ensure data is an array, and then process it
       if (Array.isArray(data) && data.length > 0) {
        data.forEach((item: any) => {
          let tradeMessageDetail = {
            tradeId: item.tradeId,
            account: item.account,
            securityId: item.securityId,
            idSource: item.idSource,
            isin: item.isin,
            sedol: item.sedol,
            cusip: item.cusip,
            ric: item.ric,
            ticker: item.ticker,
            qty: item.qty,
            price: item.price,
            complete: false
          };
          this.tradeMessageDetails.push(tradeMessageDetail);
        });
      }
          this.requestFinished = true;
          if (this.status === "404" || this.status === "Error") {            
            this.requestValid = false;
          }
          else {
            this.errorMessage = "";
            this.requestValid = true;
          }
        },
        error => {
          this.errorMessage = "Unexpected Error Occurred!";
          this.requestValid = false;
          console.log(this.errorMessage);
        }
      );
  }

}
