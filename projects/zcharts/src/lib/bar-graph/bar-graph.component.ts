import { Component, input } from '@angular/core';
import { BaseChartComponent } from '../base-chart/base-chart.component';
import { EChartsOption } from 'echarts';
import { BarGraphData, BarGraphType } from './types/bar-braph.type';

@Component({
  selector: 'zc-bar-graph',
  standalone: true,
  imports: [BaseChartComponent],
  templateUrl: './bar-graph.component.html',
  styleUrl: './bar-graph.component.css'
})
export class BarGraphComponent {
  options!: EChartsOption;
  data = input<BarGraphData>();
  type = input<BarGraphType>('Basic');
  showLabelValues = input<boolean>(true)
  showLabelSeries = input<boolean>(true)
  width = input<number>(50);
  height = input<number>(200);

  ngOnInit() {
    const dataCategory = this.data()?.map((value) => {
      return value.name
    })
    const dataSeries = this.data()?.map((value) => {
      return {
        value: value.value,
        itemStyle: value.itemStyle
      }
    })

    this.options = {
      xAxis: {
        type: 'category',
        data: dataCategory,
        axisLabel: {
          show: this.showLabelValues(),
        },
        axisLine: {
          show: this.showLabelValues(),
        },
        axisTick: {
          show: this.showLabelValues(),
        },

      },
      yAxis: {
        type: 'value',
        show: this.showLabelSeries(),
        axisLabel: {
          show: this.showLabelSeries(),
        },
        axisLine: {
          show: this.showLabelSeries(),
        },
        axisTick: {
          show: this.showLabelSeries(),
        },

      },
      series: [
        {
          type: 'bar',
          data: dataSeries,
        },
      ],
    };
  }

  get size() {
    return {
      width: `${this.width()}%`,
      height: `${this.height()}px`
    }
  }



}
