import { AvgRemPerCompanyComponent } from './avg-rem-per-company/avg-rem-per-company.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'offersList', component: OfferListComponent },
  { path: 'remByCompany', component: AvgRemPerCompanyComponent },
  { path: '', redirectTo: 'offersList', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
