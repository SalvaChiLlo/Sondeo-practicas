import { Offer } from '../offer';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements OnInit {
  @Input() offer!: Offer;
  id!: number;
  remuneracion!: string;
  companyName!: string;
  description!: string;
  profile!: string;
  observation!: string;
  inserted!: string;
  anaylyzed!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.setOffer();
  }

  setOffer(): void {
    this.id = this.offer.id;
    this.remuneracion = this.offer.remuneracion;
    this.companyName = this.offer.company_name;
    this.description = this.offer.description;
    this.profile = this.offer.profile;
    this.observation = this.offer.observation;
    this.inserted = this.offer.inserted;
    this.anaylyzed = this.offer.anaylyzed;
  }
}
