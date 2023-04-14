import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { WalletTransactionsComponent } from './wallet-transactions/wallet-transactions.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'second-page', component: SecondPageComponent},
  {path:'wallet-transactions', component: WalletTransactionsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
