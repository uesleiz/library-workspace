import { Component } from '@angular/core';
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
  options: EChartsOption = {
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
  };
}
