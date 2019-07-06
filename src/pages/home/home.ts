import { Component, ViewChild } from '@angular/core';
import {
  AlertController,
  IonicPage,
  NavController,
  NavParams,
  Platform
} from 'ionic-angular';

import {PeopleServiceProvider} from '../../providers/people-service/people-service';

import { Chart } from 'chart.js';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { WaterPage } from '../water/water';
import { WindPage } from '../wind/wind';
import { AirPage } from '../air/air';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // providers: [PeopleServiceProvider]
})


export class HomePage {
  public people: any;
  WaterPage:WaterPage;
  WindPage: WindPage;
  AirPage: AirPage;
  constructor(public navCtrl: NavController) {}

  goWaterPage() {
    this.navCtrl.setRoot(WaterPage);
  }

  goWindPage() {
    this.navCtrl.setRoot(WindPage);
  }

  goAirPage(){
    this.navCtrl.setRoot(AirPage);
  }

  @ViewChild('lineChart') lineChart;
  c
  ctx

  public technologies: any = {
    "technologies": [
      {
        'technology': '',
        'valuelabel':'40F',
        'time': 40,
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 55,
        'valuelabel':'55F',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 79,
        'valuelabel':'79F',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 63,
        'valuelabel':'63F',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 70,
        'valuelabel':'70F',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 55,
        'valuelabel':'55F',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 85,
        'valuelabel':'85F',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 47,
        'valuelabel':'47F',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 56,
        'valuelabel':'56F',
        'color': 'red',
        'hover': "green"
      }
    ]
  };

  public technologies1: any = {
    "technologies1": [
      {
        'technology': '',
        'time': 65,
        'valuelabel':'65F',
        'color': 'blue',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 72,
        'valuelabel':'72F',
        'color': 'blue',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 71,
        'valuelabel':'71F',
        'color': 'blue',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 69,
        'valuelabel':'69F',
        'color': 'blue',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 65,
        'valuelabel':'65F',
        'color': 'blue',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 78,
        'valuelabel':'78F',
        'color': 'blue',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 71,
        'valuelabel':'71F',
        'color': 'blue',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 69,
        'valuelabel':'69F',
        'color': 'blue',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 78,
        'valuelabel':'78F',
        'color': 'blue',
        'hover': "green"
      }
    ]
  };

  public technologies2: any = {
    "technologies2": [
      {
        'technology': '',
        'time': 1,
        'valuelabel':'1mps',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 5,
        'valuelabel':'5mps',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 9,
        'valuelabel':'9mps',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 4,
        'valuelabel':'4mps',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 2,
        'valuelabel':'2mps',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 12,
        'valuelabel':'12mps',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 9,
        'valuelabel':'9mps',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 2,
        'valuelabel':'2mps',
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 7,
        'valuelabel':'7mps',
        'color': 'red',
        'hover': "green"
      }
    ]
  };

  public lineChartEl: any;
  public chartLabels: any = [];
  public chartValues: any = [];
  public chartValueslabal: any = [];
  public chartColours: any = [];
  public chartHoverColours: any = [];

  public lineChartEl1: any;
  public chartLabels1: any = [];
  public chartValues1: any = [];
  public chartValueslabal1: any = [];
  public chartColours1: any = [];
  public chartHoverColours1: any = [];

  public lineChartEl2: any;
  public chartLabels2: any = [];
  public chartValues2: any = [];
  public chartValueslabal2: any = [];
  public chartColours2: any = [];
  public chartHoverColours2: any = [];

  ionViewDidLoad() {
    this.c = document.getElementById("lineChart");
    this.ctx = this.c.getContext("2d");
    console.log(this.lineChart)
    this.defineChartData();
    this.createLineChart();
  }

  defineChartData() {
    let k: any;

    for (k in this.technologies.technologies) {
      var tech = this.technologies.technologies[k];
      this.chartLabels.push(tech.technology);
      this.chartValues.push(tech.time);
      this.chartValueslabal.push(tech.valuelabel);
      this.chartColours.push(tech.color);
      this.chartHoverColours.push(tech.hover);

      var tech1 = this.technologies1.technologies1[k];
      this.chartLabels1.push(tech1.technology);
      this.chartValues1.push(tech1.time);
      this.chartValueslabal.push(tech1.valuelabel);
      this.chartColours1.push(tech1.color);
      this.chartHoverColours1.push(tech1.hover);

      var tech2 = this.technologies2.technologies2[k];
      this.chartLabels2.push(tech2.technology);
      this.chartValues2.push(tech2.time);
      this.chartValueslabal.push(tech2.valuelabel);
      this.chartColours2.push(tech2.color);
      this.chartHoverColours2.push(tech2.hover);
    }
  }
  

  createLineChart() {

    var gradientFill = this.ctx.createLinearGradient( 0,100, 0,400);
    gradientFill.addColorStop(1, "#66ffff");
    gradientFill.addColorStop(0, "#ff0066");
    

    this.lineChartEl = new Chart(this.lineChart.nativeElement,
      {
        
        type: 'line',
        data: {
          labels: ["1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am"],

          datasets: [{
            label: 'Air Temprature',
            data: this.chartValues,
            pointBackgroundColor:"red",
            pointRadius: 5,
            backgroundColor: 'red',
            borderColor: "red",
            hoverBackgroundColor: "yellow",
            fill: false,
            lineTension:0.45
            
          },
          {
            label: 'Water Temprature',
            data: this.chartValues1,
            pointBackgroundColor:"blue",
            pointRadius: 5,
            backgroundColor: 'blue',
            borderColor: "blue",
            hoverBackgroundColor: "yellow",
            fill: false,
            lineTension:0.45
          },
          {
            label: 'Wind Speed',
            data: this.chartValues2,
            pointBackgroundColor:"green",
            pointRadius: 5,
            backgroundColor: 'green',
            borderColor: "green",
            hoverBackgroundColor: "yellow",
            fill: false,
            lineTension:0.45
          }
        ]

        },
        options: {
          responsive: true,
          animation: {
            duration: 1,
            onComplete: function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                
                var x =0;
    
                this.data.datasets.forEach(function (dataset, i) {
                    x = x + 1;
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function (bar, index) {
                        var data = dataset.data[index];                            
                        ctx.fillText(data, bar._model.x, bar._model.y - 5);
                    });
                });
            }
        },
          maintainAspectRatio: false,
          legend: {
            labels: {
              boxWidth: 10,
              fontColor: "white"
            },
            position: 'top',
            display: true,
          },
          
          showLines: true,
          rotation: 9,
          scales: {
            gridLines: {
              display: false,
              drawBorder: false,
              offsetGridLines: false
            },
            yAxes: [{
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false
              },
              ticks: {
                display: false,
                beginAtZero: true,
                stepSize: 5,
                max: 100
              }
            }],

            xAxes: [{
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: true,
                color:"green",
                drawOnChartArea: false,
                // display: false
              },
              ticks: {
                padding: 20,
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold"
              }
            }]
          }
        }
      });
      
  }
}