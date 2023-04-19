import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChainTransaction, TransactionStatus } from './entities/chainTransaction';
import { environment } from '../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class ChaincheckService {
  private apiUrl = environment.apiUrl;

  transactions:ChainTransaction[]=[
    {hash: 'Download', transactionType: 'Download',date: 'Download', from : 'sfdvsfv', to:'dsjjkjsc', value : '10000',status: TransactionStatus.Normal},
    
    {hash: 'Download', transactionType: 'Download',date: 'Download',from : 'sfdvsfv', to:'dsjjkjsc',value : '10000', status: TransactionStatus.Danger},
    

    ]

  constructor(public http:HttpClient) { }
  getTransactions(hash:string):Observable<ChainTransaction[]>{
    return this.http.get<ChainTransaction[]>('https://chainchackerapi.azurewebsites.net/analise/getByWallet/' + hash + '/1')
  }
  saveTransactions(hash:string){
    this.getTransactions(hash).subscribe(t=>this.transactions=t)
  }
  getTransactionStatus(hash:string):Observable<TransactionStatus>{
    return this.http.get<TransactionStatus>(' https://chainchackerapi.azurewebsites.net/analise/getTransactionStatus/' + hash )
  }
  saveTransactionStatus(hash:string){
    this.getTransactionStatus(hash).subscribe(t=>this.transactions[this.transactions.findIndex(x=>x.hash===hash)].status=t)
  }
  changeTransactionStatus(hash:string, transactions:ChainTransaction[]){
    this.getTransactionStatus(hash).subscribe(t=>transactions[transactions.findIndex(x=>x.hash===hash)].status=t)
  }
  getSomeData() {
    return this.http.get(`${this.apiUrl}/some-endpoint`);}

}
