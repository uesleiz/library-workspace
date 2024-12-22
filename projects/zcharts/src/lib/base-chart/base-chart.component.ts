import { AfterViewInit, Component, ElementRef, input } from '@angular/core';
import * as echarts from 'echarts';
import { SetOptionOpts } from 'echarts';

@Component({
  selector: 'zc-base-chart',
  standalone: true,
  imports: [],
  templateUrl: './base-chart.component.html',
  styleUrl: './base-chart.component.css'
})
export class BaseChartComponent implements AfterViewInit {
  options = input.required<echarts.EChartsOption>();
  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit(): void {
    const chart = echarts.init(this.elementRef.nativeElement.firstElementChild);
    if (this.options()) {
      chart.setOption(this.options())
    }
  }
}
