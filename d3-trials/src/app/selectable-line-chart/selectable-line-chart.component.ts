import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-selectable-line-chart',
  templateUrl: './selectable-line-chart.component.html',
  styleUrls: ['./selectable-line-chart.component.css']
})
export class SelectableLineChartComponent implements OnInit {
  data: any[] = [];
  options: any;
  originalData: any[];
  yAxislabel: string;

  variousVoltages: any[] = [
    { text: 'voltage_ll' },
    { text: 'voltage_ry' },
    { text: 'voltage_yb' },
    { text: 'voltage_br' }
  ];
  constructor() {}
  ngOnInit() {
    this.defaultVoltage();
    this.selectorLineChart();
  }
  selectorLineChart() {
    this.options = {
      chart: {
        type: 'lineChart',
        useInteractiveGuideline: true,
        height: 550,
        transitionDuration: 150,
        showLegend: false,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: d => {
          return new Date(d.timeStamp);
        },
        y: d => {
          if (this.yAxislabel === 'voltage_ll') {
            return d.voltage_ll;
          }
          if (this.yAxislabel === 'voltage_ry') {
            return d.voltage_ry;
          }
          if (this.yAxislabel === 'voltage_yb') {
            return d.voltage_yb;
          }
          if (this.yAxislabel === 'voltage_br') {
            return d.voltage_br;
          }
        },
        yScale: d3.time.scale(),
        yAxis: {
          axisLabel: this.yAxislabel,
          tickFormat: (d): any => {
            if (d == null) {
              return 0;
            }
            return d3.format('1f')(d);
          },
          axisLabelDistance: -10
        },
        xAxis: {
          axisLabel: 'TimeStamp',
          ticks: 10,
          tickFormat: d => {
            return d3.time.format('%m/%d/%Y')(new Date(d));
          },
          axisLabelDistance: 1
        }
      }
    };

    this.originalData = [
      {
        key: '3a54b928-9c22-47a7-8082-85e300651b0d',
        values: [
          {
            customerId: 'dd9f8faf-262a-4afa-b63e-dff905f43481',
            voltage_ll: 402.803,
            voltage_ry: 409.465,
            voltage_yb: 431.752,
            voltage_br: 417.367,
            timeStamp: 1521752848796
          },
          {
            customerId: 'dd9f8faf-262a-4afa-b63e-dff905f43481',
            voltage_ll: 431.083,
            voltage_ry: 407.484,
            voltage_yb: 403.839,
            voltage_br: 435.621,
            timeStamp: 1531411350626
          },
          {
            customerId: 'dd9f8faf-262a-4afa-b63e-dff905f43481',
            voltage_ll: 438.176,
            voltage_ry: 401.61,
            voltage_yb: 420.02,
            voltage_br: 422.094,
            timeStamp: 1529324648665
          },
          {
            customerId: 'dd9f8faf-262a-4afa-b63e-dff905f43481',
            voltage_ll: 402.158,
            voltage_ry: 433.243,
            voltage_yb: 429.423,
            voltage_br: 407.879,
            timeStamp: 1538754456762
          },
          {
            customerId: 'dd9f8faf-262a-4afa-b63e-dff905f43481',
            voltage_ll: 407.61,
            voltage_ry: 430.671,
            voltage_yb: 432.175,
            voltage_br: 424.437,
            timeStamp: 1526758739529
          },
          {
            customerId: 'dd9f8faf-262a-4afa-b63e-dff905f43481',
            voltage_ll: 437.389,
            voltage_ry: 409.989,
            voltage_yb: 423.912,
            voltage_br: 430.462,
            timeStamp: 1526419697599
          },
          {
            customerId: 'dd9f8faf-262a-4afa-b63e-dff905f43481',
            voltage_ll: 426.996,
            voltage_ry: 419.038,
            voltage_yb: 435.623,
            voltage_br: 410.202,
            timeStamp: 1530526995719
          },
          {
            customerId: 'dd9f8faf-262a-4afa-b63e-dff905f43481',
            voltage_ll: 410.062,
            voltage_ry: 409.933,
            voltage_yb: 428.543,
            voltage_br: 408.796,
            timeStamp: 1523445828435
          },
          {
            customerId: 'dd9f8faf-262a-4afa-b63e-dff905f43481',
            voltage_ll: 437.804,
            voltage_ry: 434.837,
            voltage_yb: 414.676,
            voltage_br: 401.518,
            timeStamp: 1541786007126
          },
          {
            customerId: 'dd9f8faf-262a-4afa-b63e-dff905f43481',
            voltage_ll: 424.144,
            voltage_ry: 417.226,
            voltage_yb: 417.942,
            voltage_br: 432.71,
            timeStamp: 1534750886662
          }
        ]
      }
    ];

    const sortArray = (array: any[], sortKey: string) => {
      return array.sort(function(a, b) {
        if (a[sortKey] > b[sortKey]) {
          return 1;
        }
        if (a[sortKey] < b[sortKey]) {
          return -1;
        }
        return 0;
      });
    };
    console.log(this.originalData.length);
    for (let i = 0; i < this.originalData.length; i++) {
      // console.log(sortArray(this.originalData[i].values, 'timeStamp'));
      this.data[i] = {
        key: this.originalData[i].key,
        values: sortArray(this.originalData[i].values, 'timeStamp')
      };
    }
  }
  defaultVoltage() {
    this.yAxislabel = 'voltage_ll';
  }

  mySelectHandler(handler) {
    this.yAxislabel = handler;
    this.selectorLineChart();
  }
}
