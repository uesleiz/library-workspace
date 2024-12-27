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
  hasTotal = input<boolean>(true)
  totalCountStyle = input<string | Partial<CSSStyleDeclaration>>();
  totalLabelStyle = input<string | Partial<CSSStyleDeclaration>>();


  ngOnInit() {
    this.options = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'horizontal',
        show: false,
        top: '5%',
        left: 'center',
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
              show: false,
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

  get total() {
    let total = 0;
    for (let i = 0; i < this.data().length; i++) {
      if (this.data()[i]?.value) {
        total += this.data()[i].value;
      }
    }
    return total;
  }



}
