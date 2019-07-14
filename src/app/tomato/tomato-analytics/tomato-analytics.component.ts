import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { TomatoService } from '../tomato.service';
@Component({
  selector: 'app-tomato-analytics',
  templateUrl: './tomato-analytics.component.html',
  styleUrls: ['./tomato-analytics.component.scss'],
})
export class TomatoAnalyticsComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    legend: {
      labels: {
        fontColor: '#fff',
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
            color: '#fff',
          },
          ticks: {
            fontColor: '#fff',
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: '#fff',
          },
          ticks: {
            fontColor: '#fff',
          },
        },
      ],
    },
  };
  public barChartLabels: Label[] = [
    '7/1',
    '7/2',
    '7/3',
    '7/4',
    '7/5',
    '7/6',
    '7/7',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    {
      label: 'FOCUS TIME',
      data: [5, 10, 10, 6, 7, 9, 13],
      backgroundColor: [
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        '#FF4384',
      ],
    },
  ];

  constructor(public tomato: TomatoService) {}

  ngOnInit() {}
}
