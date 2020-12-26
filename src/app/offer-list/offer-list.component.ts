import { OffersService } from './../offers.service';
import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css'],
})
export class OfferListComponent implements OnInit {
  offers: Offer[] = [];
  orden = 'Más reciente';
  constructor(private offerService: OffersService) {}

  ngOnInit(): void {
    this.setOffers();
  }

  setOffers(): void {
    this.offerService.getOffers().subscribe((offers) => {
      this.offers = offers;
    });
  }

  sort(): void {
    switch (this.orden) {
      case 'Más antiguas':
        this.offers = this.offers.sort((of1: Offer, of2: Offer) => {
          return (
            new Date(of1.inserted).getTime() - new Date(of2.inserted).getTime()
          );
        });
        break;
      case 'Más reciente':
        this.offers = this.offers.sort((of1: Offer, of2: Offer) => {
          return (
            new Date(of2.inserted).getTime() - new Date(of1.inserted).getTime()
          );
        });
        break;
      case 'Remuneración mayor primero':
        this.offers.sort((of1: Offer, of2: Offer): number => {
          console.log(
            // tslint:disable-next-line: radix
            parseInt(
              of1.remuneracion
                .slice(1, -1)
                .replace('.', '*')
                .replace(',', '')
                .replace('*', ',')
            ),
            // tslint:disable-next-line: radix
            parseInt(
              of2.remuneracion
                .slice(1, -1)
                .replace('.', '*')
                .replace(',', '')
                .replace('*', ',')
            )
          );
          return (
            // tslint:disable-next-line: radix
            parseInt(
              of2.remuneracion
                .slice(1, -1)
                .replace('.', '*')
                .replace(',', '')
                .replace('*', ',')
            ) -
            // tslint:disable-next-line: radix
            parseInt(
              of1.remuneracion
                .slice(1, -1)
                .replace('.', '*')
                .replace(',', '')
                .replace('*', ',')
            )
          );
        });
        break;
      case 'Remuneración menor primero':
        this.offers.sort((of1: Offer, of2: Offer): number => {
          return (
            // tslint:disable-next-line: radix
            parseInt(
              of1.remuneracion
                .slice(1, -1)
                .replace('.', '*')
                .replace(',', '')
                .replace('*', ',')
            ) -
            // tslint:disable-next-line: radix
            parseInt(
              of2.remuneracion
                .slice(1, -1)
                .replace('.', '*')
                .replace(',', '')
                .replace('*', ',')
            )
          );
        });
        break;
    }
    console.log(this.offers);
  }

  orderChangeHandler(order: any): void {
    this.orden = order;
    this.sort();
  }
}
