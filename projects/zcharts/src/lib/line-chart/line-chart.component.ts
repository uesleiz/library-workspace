import { Component, input } from '@angular/core';
import { BaseChartComponent } from '../base-chart/base-chart.component';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'zc-line-chart',
  standalone: true,
  imports: [
    BaseChartComponent
  ],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
  labels = input<number[]>([]);
  series = input<number[]>([]);

  options: EChartsOption = {
    xAxis: { type: 'category', data: this.labels() },
    yAxis: { type: 'value' },
    series: [{ data: this.series(), type: 'line' }],
  };

}


