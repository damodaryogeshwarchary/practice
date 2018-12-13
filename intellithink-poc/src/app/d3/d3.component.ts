import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})
export class D3Component implements OnInit {
  options: any;
  data: any;
  constructor() {}

  ngOnInit() {
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
          return d.y;
        },
        y: d => {
          return new Date(d.x);
        },
        yScale: d3.time.scale(),
        yAxis: {
          ticks: d3.time.months,
          tickFormat: d => {
            return d3.time.format('%b')(new Date(d));
          }
        },
        xAxis: {
          axisLabel: 'Gross volume',
          tickFormat: (d): any => {
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
        key: 'ullamco',
        values: [
          {
            x: 'Fri Apr 13 2018 09:16:58 GMT+0000 (UTC)',
            y: 9
          },
          {
            x: 'Sun Feb 11 2018 10:33:07 GMT+0000 (UTC)',
            y: 16
          },
          {
            x: 'Thu Jan 25 2018 23:38:33 GMT+0000 (UTC)',
            y: 17
          },
          {
            x: 'Wed Jan 17 2018 17:50:25 GMT+0000 (UTC)',
            y: 25
          },
          {
            x: 'Mon Dec 03 2018 13:23:53 GMT+0000 (UTC)',
            y: 32
          },
          {
            x: 'Wed Aug 15 2018 19:47:30 GMT+0000 (UTC)',
            y: 48
          },
          {
            x: 'Tue Apr 17 2018 04:29:02 GMT+0000 (UTC)',
            y: 49
          },
          {
            x: 'Tue Aug 14 2018 12:48:18 GMT+0000 (UTC)',
            y: 50
          },
          {
            x: 'Sun Jun 17 2018 03:33:21 GMT+0000 (UTC)',
            y: 51
          },
          {
            x: 'Fri Nov 23 2018 09:12:24 GMT+0000 (UTC)',
            y: 67
          },
          {
            x: 'Sat Jan 06 2018 04:11:31 GMT+0000 (UTC)',
            y: 77
          },
          {
            x: 'Fri Apr 20 2018 01:25:00 GMT+0000 (UTC)',
            y: 87
          },
          {
            x: 'Thu Sep 13 2018 20:45:33 GMT+0000 (UTC)',
            y: 97
          },
          {
            x: 'Tue Feb 27 2018 16:43:47 GMT+0000 (UTC)',
            y: 97
          }
        ]
      },
      {
        key: 'mollit',
        values: [
          {
            x: 'Sat Aug 18 2018 14:09:07 GMT+0000 (UTC)',
            y: 2
          },
          {
            x: 'Mon Mar 26 2018 00:08:32 GMT+0000 (UTC)',
            y: 3
          },
          {
            x: 'Thu Sep 13 2018 03:33:32 GMT+0000 (UTC)',
            y: 18
          },
          {
            x: 'Tue Feb 27 2018 23:39:36 GMT+0000 (UTC)',
            y: 29
          },
          {
            x: 'Fri Sep 07 2018 17:38:21 GMT+0000 (UTC)',
            y: 29
          },
          {
            x: 'Tue May 01 2018 00:35:39 GMT+0000 (UTC)',
            y: 55
          },
          {
            x: 'Thu May 24 2018 17:14:37 GMT+0000 (UTC)',
            y: 57
          },
          {
            x: 'Mon Nov 19 2018 22:58:04 GMT+0000 (UTC)',
            y: 68
          },
          {
            x: 'Mon Jun 04 2018 19:33:25 GMT+0000 (UTC)',
            y: 68
          },
          {
            x: 'Sat Oct 20 2018 17:21:06 GMT+0000 (UTC)',
            y: 85
          },
          {
            x: 'Fri Oct 12 2018 19:15:40 GMT+0000 (UTC)',
            y: 87
          },
          {
            x: 'Wed Oct 10 2018 19:12:37 GMT+0000 (UTC)',
            y: 89
          },
          {
            x: 'Wed Oct 31 2018 20:00:09 GMT+0000 (UTC)',
            y: 94
          }
        ]
      }
    ];
  }
}
