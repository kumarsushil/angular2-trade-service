export interface TradeDetails {
    Message: string,
    Status: string,
    TradeMessage: TradeMessageDetail[];
}

/*export interface tradeMessageDetails{
    TradeMessageDetail[] = [];
}*/

export interface TradeMessageDetail {
    tradeId: string,
    account: string,
    securityId: string,
    idSource : string,
    isin: string,
    sedol: string,
    cusip: string,
    ric: string,
    ticker: string,
    qty: number,
    price:number
}
