import { Component, Input, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.css']
})
export class MediasComponent implements OnInit {
  min8: number = 1;
  max8: number = 2;
  avg8: number = 3;
  median8: number = 4;
  min5: number = 1;
  max5: number = 2;
  avg5: number = 3;
  median5: number = 4;
  min4: number = 1;
  max4: number = 2;
  avg4: number = 3;
  median4: number = 4;

  constructor(private offerService: OffersService) { }

  ngOnInit(): void {
    this.setPrices()
  }

  setPrices(): void {
    console.log('COMPONENT GET PRICE')
    this.offerService.getPrices8().subscribe((prices) => {
      this.min8 = Math.floor(prices[0].min)
      this.max8 = Math.floor(prices[0].max)
      this.avg8 = Math.floor(prices[0].avg)
      this.median8 = Math.floor(prices[0].median)
    });
    this.offerService.getPrices5().subscribe((prices) => {
      this.min5 = Math.floor(prices[0].min)
      this.max5 = Math.floor(prices[0].max)
      this.avg5 = Math.floor(prices[0].avg)
      this.median5 = Math.floor(prices[0].median)
    });
    this.offerService.getPrices4().subscribe((prices) => {
      this.min4 = Math.floor(prices[0].min)
      this.max4 = Math.floor(prices[0].max)
      this.avg4 = Math.floor(prices[0].avg)
      this.median4 = Math.floor(prices[0].median)
    });
  }

}
