import { Component, Input } from '@angular/core';
import { ChaincheckService } from '../chaincheck.service';
import { ChainTransaction } from '../entities/chainTransaction';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() transactions:ChainTransaction[]=[]
  constructor(public service:ChaincheckService) {

  }
  checkStatus(hash:string){
    this.transactions.length > 0? this.service.changeTransactionStatus(hash, this.transactions):this.service.saveTransactionStatus(hash)

  }

}
