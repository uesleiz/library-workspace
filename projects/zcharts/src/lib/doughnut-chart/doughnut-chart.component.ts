import { Component, input } from '@angular/core';
import { BaseChartComponent } from '../base-chart/base-chart.component';
import { EChartsOption } from 'echarts';
import { SeriesData } from './types/doughnut.type';

@Component({
  selector: 'zc-doughnut-chart',
  standalone: true,
  imports: [BaseChartComponent],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.css'
})
export class DoughnutChartComponent {
  data = input.required<SeriesData[]>()
  legendTop = input<string>();
  radius = input<string[]>(['60%', '70%']);
  name = input<string>('Doughnut Chart');
  hasLegend = input<boolean>(false);
  options!: EChartsOption;
  width = input<number>(30);
  height = input<number>(100);

  ngOnInit() {
    this.options = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'horizontal',
        show: this.hasLegend(),
        top: '5%',
        left: 'center',
        // formatter: (name) => {
        //   const seriesData = this.data().find(item => item.name === name);
        //   const value = seriesData?.value ?? 0;
        //   return `{nameStyle|${name}} {valueStyle|${value}}`;
        // },
        // textStyle: {
        //   fontSize: 14,
        //   color: '#000',
        //   rich: {
        //     nameStyle: {
        //       color: '#000',
        //       fontWeight: 'bold',
        //       width: 100,
        //       align: 'left',
        //     },
        //     valueStyle: {
        //       color: '#666',
        //       align: 'right',
        //     },
        //   },
        // },
      },
      series: [
        {
          name: this.name(),
          type: 'pie',
          radius: this.radius(),
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 14,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: this.data()
        }
      ]
    };
  }


  get size() {
    return {
      width: `${this.width()}%`,
      height: `${this.height()}px`
    }
  }



}
