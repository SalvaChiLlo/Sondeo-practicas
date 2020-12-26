import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-order',
  templateUrl: './select-order.component.html',
  styleUrls: ['./select-order.component.css'],
})
export class SelectOrderComponent implements OnInit {
  @Output()
  orderChangeHandler: EventEmitter<string> = new EventEmitter<string>();
  lista: string[] = [
    'Más reciente',
    'Más antiguas',
    'Remuneración mayor primero',
    'Remuneración menor primero',
  ];
  seleccionado = this.lista[0];

  constructor() {}

  ngOnInit(): void {}

  onChange(): void {
    this.orderChangeHandler.emit(this.seleccionado);
  }
}
