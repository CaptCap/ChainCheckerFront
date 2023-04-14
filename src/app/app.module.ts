import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { RouterModule } from '@angular/router';
import { WalletTransactionsComponent } from './wallet-transactions/wallet-transactions.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SecondPageComponent,
    WalletTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
