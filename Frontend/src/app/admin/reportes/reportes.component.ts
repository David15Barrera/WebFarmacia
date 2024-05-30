import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  salesStartDate: string ="";
  salesEndDate: string ="";
  salesChart: any;
  productsChart: any;
  usersChart: any;

  constructor() {}

  ngOnInit(): void {
    this.initializeCharts();
  }

  initializeCharts(): void {
    this.salesChart = new Chart('salesChart', {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Ventas',
          data: [],
          backgroundColor: 'rgba(90, 42, 131, 0.6)',
          borderColor: 'rgba(90, 42, 131, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    this.productsChart = new Chart('productsChart', {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          label: 'Productos',
          data: [],
          backgroundColor: [
            'rgba(90, 42, 131, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)'
          ],
          borderColor: [
            'rgba(90, 42, 131, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });

    this.usersChart = new Chart('usersChart', {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Usuarios',
          data: [],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  generateSalesReport(): void {
    // Aquí agregarías la lógica para obtener datos del reporte, por ahora usamos datos simulados
    const data = this.getSalesReportMockData();
    
    this.salesChart.data.labels = data.labels;
    this.salesChart.data.datasets[0].data = data.values;
    this.salesChart.update();
  }

  getSalesReportMockData() {
    // Datos de ejemplo
    return {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      values: [100, 200, 150, 175, 225]
    };
  }
}
