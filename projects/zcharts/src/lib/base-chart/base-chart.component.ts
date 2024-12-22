import { AfterViewInit, Component, ElementRef, input, ViewChild } from '@angular/core';
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
  @ViewChild('zchartContainer', { static: true }) zchartContainer!: ElementRef;
  width = 0;
  height = 0;
  constructor(private elementRef: ElementRef) { }
  ngOnInit() {
    const parent = this.zchartContainer.nativeElement.parentElement.parentElement
    const parentSizes = parent.getBoundingClientRect()
    this.height = parentSizes.height
    this.width = parentSizes.width

  }
  ngAfterViewInit(): void {
    const chart = echarts.init(this.elementRef.nativeElement.firstElementChild);
    if (this.options()) {
      chart.setOption(this.options())
    }
  }

  get divSize() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
    }
  }

}
