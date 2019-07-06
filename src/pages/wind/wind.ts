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
import { HomePage } from '../home/home';
import { WaterPage } from '../water/water';
import { AirPage } from '../air/air';


@Component({
  selector: 'page-wind',
  templateUrl: 'wind.html',
  // providers: [PeopleServiceProvider]
})

export class WindPage {
  public people: any;

  HomePage:HomePage;
  WaterPage:WaterPage;
  AirPage:AirPage;
  constructor(public navCtrl: NavController) {}

  goHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

  goAirPage() {
    this.navCtrl.setRoot(AirPage);
  }
  goWaterPage() {
    this.navCtrl.setRoot(WaterPage);
  }

  // constructor(public PeopleServiceProvider: PeopleServiceProvider){
  //   this.loadPeople();
  // }

  // loadPeople(){
  //   this.PeopleServiceProvider.load()
  //   .then(data => {
  //     this.people = data;
  //   });
  // }
  // @ViewChild('pieChart') pieChart;
  // @ViewChild('barChart') barChart;
  @ViewChild('lineChart') lineChart;
  c
  ctx

  public technologies: any = {
    "technologies": [
      {
        'technology': '',
        'time': 1,
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 5,
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 9,
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 4,
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 2,
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 12,
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 9,
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 2,
        'color': 'red',
        'hover': "green"
      },
      {
        'technology': '',
        'time': 7,
        'color': 'red',
        'hover': "green"
      }
    ]
  };
  // public pieChartEl: any;
  // public barChartEl: any;
  public lineChartEl: any;
  public chartLabels: any = [];
  public chartValues: any = [];
  public chartColours: any = [];
  public chartHoverColours: any = [];






  ionViewDidLoad() {
    this.c = document.getElementById("lineChart");
    this.ctx = this.c.getContext("2d");
    console.log(this.lineChart)
    this.defineChartData();
    // this.createPieChart();
    // this.createBarChart();
    this.createLineChart();
  }
  /**
   *
   * Parse the JSON data, push specific keys into selected arrays for use with
   * each chart
   *
   */
  defineChartData() {
    let k: any;

    for (k in this.technologies.technologies) {
      var tech = this.technologies.technologies[k];

      this.chartLabels.push(tech.technology);
      this.chartValues.push(tech.time);
      this.chartColours.push(tech.color);
      this.chartHoverColours.push(tech.hover);
    }
  }
/**
   *
   * Configure the Pie chart, define configuration options
   *
   */
  // createPieChart() {

  //   this.pieChartEl = new Chart(this.pieChart.nativeElement,
  //     {
  //       type: 'pie',
  //       data: {
  //         labels: this.chartLabels,
  //         datasets: [{
  //           label: 'Daily Technology usage',
  //           data: this.chartValues,
  //           duration: 2000,
  //           easing: 'easeInQuart',
  //           backgroundColor: this.chartColours,
  //           hoverBackgroundColor: this.chartHoverColours
  //         }]
  //       },
  //       options: {
  //         maintainAspectRatio: false,
  //         layout: {
  //           padding: {
  //             left: 50,
  //             right: 0,
  //             top: 0,
  //             bottom: 0
  //           }
  //         },
  //         animation: {
  //           duration: 5000
  //         }
  //       }
  //     });



  //   this.chartLoading = this.pieChartEl.generateLegend();
  // }




  /**
   *
   * Configure the Bar chart, define configuration options
   *
   */
  // createBarChart() {
  //   this.barChartEl = new Chart(this.barChart.nativeElement,
  //     {
  //       type: 'bar',
  //       data: {
  //         labels: this.chartLabels,
  //         datasets: [{
  //           label: 'Daily Technology usage',
  //           data: this.chartValues,
  //           duration: 2000,
  //           easing: 'easeInQuart',
  //           backgroundColor: this.chartColours,
  //           hoverBackgroundColor: this.chartHoverColours
  //         }]
  //       },
  //       options: {
  //         maintainAspectRatio: false,
  //         legend: {
  //           display: true,
  //           boxWidth: 80,
  //           fontSize: 15,
  //           padding: 0
  //         },
  //         scales: {
  //           yAxes: [{
  //             ticks: {
  //               beginAtZero: true,
  //               stepSize: 5,
  //               max: 100
  //             }
  //           }],
  //           xAxes: [{
  //             ticks: {
  //               autoSkip: false
  //             }
  //           }]
  //         }
  //       }
  //     });
  // }




  /**
   *
   * Configure the Line chart, define configuration options
   *
   */

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
            label: 'speed',
            data: this.chartValues,
            pointRadius: 5,
            // pointStyle:"star",
            // duration: 2000,
            // easing: 'easeInQuart',
            backgroundColor: gradientFill,
            borderColor: "pink",
            hoverBackgroundColor: "#66ff33",
            fill: true
          }],
          
        },
        options: {
            animation: {
                duration: 1,
                onComplete: function () {
                    var chartInstance = this.chart,
                        ctx = chartInstance.ctx;
                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
        
                    this.data.datasets.forEach(function (dataset, i) {
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
            display: false,

            // boxWidth: 80,
            // fontSize: 15,
            // padding: 0
          },
          showLines: true,
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
                max: 30
              }
            }],

            xAxes: [{
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: true,
                color:"purple",
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