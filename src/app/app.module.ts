import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferComponent } from './offer/offer.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectOrderComponent } from './select-order/select-order.component';
import { FormsModule } from '@angular/forms';
import { AvgRemPerCompanyComponent } from './avg-rem-per-company/avg-rem-per-company.component';

@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    OfferListComponent,
    SelectOrderComponent,
    AvgRemPerCompanyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
