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
    { value: 1048, name: 'Em uso', itemStyle: { color: 'red' } },
    { value: 2500, name: 'total', itemStyle: { color: 'grey' } },
  ]
}
