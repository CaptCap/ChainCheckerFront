import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChainTransaction } from '../entities/chainTransaction';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  transactions:ChainTransaction[]=[ ]
  constructor(public http:HttpClient) { }
  getTransactions():Observable<ChainTransaction[]>{
    return this.http.get<ChainTransaction[]>('https://chainchackerapi.azurewebsites.net/analise/getMain/1')
  }
  saveTransactions(){
    this.getTransactions().subscribe(t=>this.transactions=t)
  }
  ngOnInit(): void {
    this.saveTransactions()
    
  }
}
