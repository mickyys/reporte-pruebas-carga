import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http : HttpClient) { }

  getReport(){
    return this.http.get('assets/report.json');
  }

  getReportAccidentesPersonales10(){
    return this.http.get('assets/10/Accidentes Personales.postman_test_run.json').pipe(map(data => data['results'].map((data) => { return { ...data, collapse : false }})));
  }
  getReportApvMax10(){
    return this.http.get('assets/10/APV MAX 3.0.postman_test_run.json').pipe(map(data => data['results'].map((data) => { return { ...data, collapse : false }})));
  }
  getReportDominiumK10(){
    return this.http.get('assets/10/Dominium Max 3.0 - K.postman_test_run.json').pipe(map(data => data['results'].map((data) => { return { ...data, collapse : false }})));
  }
  getReportDominium10(){
    return this.http.get('assets/10/Dominium Max 3.0.postman_test_run.json').pipe(map(data => data['results'].map((data) => { return { ...data, collapse : false }})));
  }
  getReportMaxUniversitario10(){
    return this.http.get('assets/10/Max Universitario.postman_test_run.json').pipe(map(data => data['results'].map((data) => { return { ...data, collapse : false }})));
  }
  getReportMiAPV10(){
    return this.http.get('assets/10/Mi APV Seguro Pack 1.0 .postman_test_run.json').pipe(map(data => data['results'].map((data) => { return { ...data, collapse : false }})));
  }
  getReportMiProyectoSeguro10(){
    return this.http.get('assets/10/Mi PROYECTO Seguro Pack 1.0.postman_test_run.json').pipe(map(data => data['results'].map((data) => { return { ...data, collapse : false }})));
  }
  getReportViveOK10(){
    return this.http.get('assets/10/VIVE OK.postman_test_run.json').pipe(map(data => data['results'].map((data) => { return { ...data, collapse : false }})));
  }
  getReportMiAPV50(){
    return this.http.get('assets/50/Mi APV Seguro Pack 1.0 .postman_test_run.json').pipe(map(data => data['results'].map((data) => { return { ...data, collapse : false }})));
  }
  getReportTemporalPlus50(){
    return this.http.get('assets/50/Temporal Plus.postman_test_run.json').pipe(map(data => data['results'].map((data) => { return { ...data, collapse : false }})));
  }
  getReportApvMAx3100(){
    return this.http.get('assets/100/APV MAX 3.0.postman_test_run.json').pipe(map(data => data['results'].map((data) => { return { ...data, collapse : false }})));
  }
  getReportTemporalPlus100(){
    return this.http.get('assets/100/Temporal Plus.postman_test_run.json').pipe(map(data => data['results'].map((data) => { return { ...data, collapse : false }})));
  }
  getReportApvMAx3200(){
    return this.http.get('assets/200/Dominium Max 3.0.postman_test_run.json').pipe(map(data => data['results'].map((data) => { return { ...data, collapse : false }})));
  }
}
