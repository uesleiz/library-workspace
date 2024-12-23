import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LineChartComponent } from '../../../zcharts/src/lib/line-chart/line-chart.component';
import { DoughnutChartComponent } from '../../../zcharts/src/lib/doughnut-chart/doughnut-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LineChartComponent, DoughnutChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
  customData = [
    { value: 1048, name: 'Search Engine', itemStyle: { color: 'red' } },
    { value: 735, name: 'Direct', itemStyle: { color: 'red' } },
    { value: 580, name: 'Email', itemStyle: { color: 'red' } },
    { value: 484, name: 'Union Ads', itemStyle: { color: 'red' } },
    { value: 300, name: 'Video Ads', itemStyle: { color: 'red' } }
  ]

}
