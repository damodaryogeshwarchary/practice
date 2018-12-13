import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { NvD3Module } from 'angular2-nvd3';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})
export class D3Component implements OnInit {
  options: object;
  data: object;
  constructor() {}

  ngOnInit() {
    console.log(d3);
    this.options = {
      chart: {
        type: 'lineChart',
        useInteractiveGuideline: true,
        height: 450,
        transitionDuration: 350,
        showLegend: false,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: d => {
          return d.x;
        },
        y: d => {
          return d.y;
        },
        yAxis: {
          axisLabel: 'Gross volume',
          tickFormat: d => {
            if (d == null) {
              return 0;
            }
            return d3.format('.02f')(d);
          },
          axisLabelDistance: 400
        }
      }
    };

    this.data = [
      {
        key: 'Cumulative Return',
        values: [
          {
            label: 'A',
            value: -29.765957771107
          },
          {
            label: 'B',
            value: 0
          },
          {
            label: 'C',
            value: 32.807804682612
          }
        ]
      }
    ];
  }
}
