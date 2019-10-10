import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';

export enum Types {
  AccidentesPersonales = "Accidentes Personales",
  APVMAX = "APV MAX 3.0",
  DominiumK = "Dominium Max 3.0 K",
  Dominium = "Dominium Max 3.0",
  MaxUniversitario = "Max Universitario",
  MiAPV = "Mi APV Seguro Pack 1.0",
  MiPROYECTOSeguro = "Mi PROYECTO Seguro Pack 1.0",
  VIVEOK = "VIVE OK",
  MiAPV50 = "Mi APV Seguro Pack 1.0 - 50",
  TemporalPlus50 = "Temporal Plus - 50",
  APVMAX100 = "APV MAX 3.0 - 100",
  TemporalPlus100 = "Temporal Plus - 100",
  APVMAX200 = "APV MAX 3.0 - 200",
} 

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {

  public data : any ;
  public groups : any;

  //Charts
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartData: ChartDataSets[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public loading = true;
  public type;

  constructor(private reportsService : ReportsService, 
              private route: ActivatedRoute) { } 

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.type = params.type;

        switch(this.type){
          case Types.AccidentesPersonales : {
            this.reportsService.getReportAccidentesPersonales10().subscribe(
              data => {
                console.log(data);
                this.data = data;  
                this.loading = false; 
                this.slowServices();
              });
              break;
          }
          case Types.APVMAX  : {
            this.reportsService.getReportApvMax10().subscribe(
              data => {
                this.data = data;  
                this.loading = false; 
                this.slowServices();
              });
              break;
          }
          case Types.APVMAX  : {
            this.reportsService.getReportApvMax10().subscribe(
              data => {
                this.data = data;  
                this.loading = false; 
                this.slowServices();
              });
              break;
          }
          case Types.DominiumK : {
            this.reportsService.getReportDominiumK10().subscribe(
              data => {
                this.data = data;  
                this.loading = false; 
                this.slowServices();
              });
              break;
          }
          case Types.Dominium : {
            this.reportsService.getReportDominium10().subscribe(
              data => {
                this.data = data;  
                this.loading = false; 
                this.slowServices();
              });
              break;
          }
          case Types.MaxUniversitario : {
            this.reportsService.getReportMaxUniversitario10().subscribe(
              data => {
                this.data = data;  
                this.loading = false; 
                this.slowServices();
              });
              break;
          }
          case Types.MiAPV : {
            this.reportsService.getReportMiAPV10().subscribe(
              data => {
                this.data = data;  
                this.loading = false; 
                this.slowServices();
              });
              break;
          }
          case Types.MiPROYECTOSeguro : {
            this.reportsService.getReportMiProyectoSeguro10().subscribe(
              data => {
                this.data = data;  
                this.loading = false; 
                this.slowServices();
              });
              break;
          }
          case Types.VIVEOK : {
            this.reportsService.getReportViveOK10().subscribe(
              data => {
                this.data = data;  
                this.loading = false; 
                this.slowServices();
              });
              break;
          }
          case Types.MiAPV50 : {
            this.reportsService.getReportMiAPV50().subscribe(
              data => {
                this.data = data;  
                this.loading = false; 
                this.slowServices();
              });
              break;
          }
          case Types.TemporalPlus50 : {
            this.reportsService.getReportTemporalPlus50().subscribe(
              data => {
                this.data = data;  
                this.loading = false; 
                this.slowServices();
              });
              break;
          }
          case Types.APVMAX100 : {
            this.reportsService.getReportApvMAx3100().subscribe(
              data => {
                this.data = data;  
                this.loading = false; 
                this.slowServices();
              });
              break;
          }
          case Types.TemporalPlus100 : {
            this.reportsService.getReportTemporalPlus100().subscribe(
              data => {
                this.data = data;  
                this.loading = false; 
                this.slowServices();
              });
              break;
          }
          case Types.APVMAX200 : {
            this.reportsService.getReportApvMAx3200().subscribe(
              data => {
                this.data = data;  
                this.loading = false; 
                this.slowServices();
              });
              break;
          }
          default : {
              this.type = Types.AccidentesPersonales;
              this.reportsService.getReportAccidentesPersonales10().subscribe(
                data => {
                  console.log(data);
                  this.data = data;  
                  this.loading = false; 
                  this.slowServices();
                });
                break;
          }
     }
    });
  }

  slowServices(){
    let services = [];
    this.data.forEach(element => {      
      services.push({
        'name' : element.name,
        'time' : element.times.reduce((a,b)=> {return (a > b) ? a : b})
      })    
    });

    let dataSort10 = services.sort((a,b) => Number(a.time) < Number(b.time) ? 1 : -1).slice(0,10);
    this.barChartData = [
      { data : [...dataSort10.map( a => a.time / 1000) ], label : 'Segundos' , backgroundColor : '#dc3545', hoverBackgroundColor : '#dc3545' }
    ]    
    this.barChartLabels = [ ...dataSort10.map(a => a.name)]
  }

  fastServices(){
    let services = [];
    this.data.forEach(element => {      
      services.push({
        'name' : element.name,
        'time' : element.times.reduce((a,b)=> {return (a > b) ? a : b})
      })    
    });

    let dataSort10 = services.sort((a,b) => Number(a.time) > Number(b.time) ? 1 : -1).slice(0,10);
    this.barChartData = [
      { data : [...dataSort10.map( a => a.time / 1000) ], label : 'Segundos', backgroundColor : '#28a745' , hoverBackgroundColor : '#28a745'}
    ]    
    this.barChartLabels = [ ...dataSort10.map(a => a.name)]
  }

  
}
