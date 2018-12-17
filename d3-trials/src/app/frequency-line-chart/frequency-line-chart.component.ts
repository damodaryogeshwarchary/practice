import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-frequency-line-chart',
  templateUrl: './frequency-line-chart.component.html',
  styleUrls: ['./frequency-line-chart.component.css']
})
export class FrequencyLineChartComponent implements OnInit {
  data: any[] = [];
  options: any;
  originalData: any[];
  // sortedData: any[];
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
          return new Date(d.timeStamp);
        },
        y: d => {
          return d.frequency;
        },
        yScale: d3.time.scale(),
        yAxis: {
          axisLabel: 'Frequency',
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
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '48.3',

            timeStamp: 1534427342023
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '51.24',

            timeStamp: 1535114936162
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '48.52',

            timeStamp: 1520491377041
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '49.87',

            timeStamp: 1520814042080
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '50.33',

            timeStamp: 1531497927467
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '48.6',

            timeStamp: 1525298286779
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '48.07',

            timeStamp: 1542158005100
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '51.47',

            timeStamp: 1529217789238
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '50.3',

            timeStamp: 1534616010760
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '48.66',

            timeStamp: 1533693762823
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '51.36',

            timeStamp: 1535719565662
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '48.56',

            timeStamp: 1536050874016
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '51.96',

            timeStamp: 1534709874897
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '50.62',

            timeStamp: 1522121601733
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '50.1',

            timeStamp: 1518465885827
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '50.73',

            timeStamp: 1530530113476
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '47.72',

            timeStamp: 1522977085400
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '48.1',

            timeStamp: 1541507953332
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '52.28',

            timeStamp: 1519812296833
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '51',

            timeStamp: 1541904165626
          }
        ]
      },
      {
        key: '3a54b928-9c22-47a7-8082-85e300651b0e',
        values: [
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '51.3',

            timeStamp: 1534427342023
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '51.24',

            timeStamp: 1535114936162
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '48.52',

            timeStamp: 1520491377041
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '50.87',

            timeStamp: 1520814042080
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '50.33',

            timeStamp: 1531497927467
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '48.6',

            timeStamp: 1525298286779
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '48.07',

            timeStamp: 1542158005100
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '51.47',

            timeStamp: 1529217789238
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '50.3',

            timeStamp: 1534616010760
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '48.66',

            timeStamp: 1533693762823
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '51.36',

            timeStamp: 1535719565662
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '48.56',

            timeStamp: 1536050874016
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '51.96',

            timeStamp: 1534709874897
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '50.62',

            timeStamp: 1522121601733
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '50.1',

            timeStamp: 1518465885827
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '50.73',

            timeStamp: 1530530113476
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '47.72',

            timeStamp: 1522977085400
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '48.1',

            timeStamp: 1541507953332
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '52.28',

            timeStamp: 1519812296833
          },
          {
            assetId: '3a54b928-9c22-47a7-8082-85e300651b0d',
            frequency: '51',

            timeStamp: 1541904165626
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
      console.log(sortArray(this.originalData[i].values, 'timeStamp'));
      this.data[i] = {
        key: this.originalData[i].key,
        values: sortArray(this.originalData[i].values, 'timeStamp')
      };
    }
    debugger;
  }
}
