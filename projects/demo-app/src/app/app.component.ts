import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LineChartComponent } from '../../../zcharts/src/lib/line-chart/line-chart.component';
import { DoughnutChartComponent } from '../../../zcharts/src/lib/doughnut-chart/doughnut-chart.component';
import { BarGraphComponent } from '../../../zcharts/src/lib/bar-graph/bar-graph.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarGraphComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
  customData = [
    { value: 120, itemStyle: { color: '#ff0000' }, name: 'Teste 3' },
    { value: 1201, itemStyle: { color: '#00bfff' }, name: 'Teste 4' },
    { value: 200, itemStyle: { color: '#00ff00' }, name: 'Teste 5' },
    { value: 240, itemStyle: { color: '#00ff00' }, name: 'Teste 6' },
    { value: 1000, itemStyle: { color: '#9800ff' }, name: 'Teste 9' },
  ]
}
