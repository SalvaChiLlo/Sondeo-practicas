import { Remuneracion } from './../remuneracion';
import { ChartDataService } from './../chart-data.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-avg-rem-per-company',
  templateUrl: './avg-rem-per-company.component.html',
  styleUrls: ['./avg-rem-per-company.component.css'],
})
export class AvgRemPerCompanyComponent implements OnInit {
  data: Remuneracion[] = [];
  chart: any = null;
  constructor(private chartData: ChartDataService) {}

  ngOnInit(): void {
    this.getData();

    this.chart = new Chart('chart', {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Data',
            fill: false,
            data: [],
            backgroundColor: '#559E59',
            hoverBackgroundColor: '#F4B522',
          },
        ],
      },
      options: {
        tooltips: {
          callbacks: {
            title(): string {
              return '';
            },
            label(item: any, data: any): string {
              console.log(item, data);
              const datasetLabel = data.labels[item.index];
              const dataPoint = item.yLabel;
              return datasetLabel + ': ' + dataPoint + '€';
            },
          },
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                fontColor: 'black',
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
      },
    });
  }

  private getData(): void {
    this.chartData.avgRemPerCompanyData().subscribe(
      (data: Remuneracion[]) => {
        this.data = data.map(
          (elem: Remuneracion): Remuneracion => {
            // tslint:disable-next-line: radix
            elem.avg = parseFloat(elem.avg).toFixed(2) + '';
            return elem;
          }
        );
        this.data.sort(
          (of1: Remuneracion, of2: Remuneracion) =>
            parseFloat(of1.avg) - parseFloat(of2.avg)
        );
        this.showData();
      },
      (error) => {
        console.log('ERROR: Unexcepted response', error);
      }
    );
  }

  private showData(): void {
    for (const key in this.data) {
      if (Object.prototype.hasOwnProperty.call(this.data, key)) {
        this.chart.data.labels.push(this.data[key].company_name);
        this.chart.data.datasets[0].data.push(parseFloat(this.data[key].avg));
        this.chart.update();
      }
    }
  }
}
