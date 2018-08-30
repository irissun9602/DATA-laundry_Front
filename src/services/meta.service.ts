import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { All_tab_cols } from '../models/All_tab_cols';
@Injectable()
export class MetaService{
  private URL = 'http://localhost:8080/data_L/api/';
   private http: Http; 
   constructor(http: Http) { 
     this.http = http; 
    } 
    getTables(): Promise<All_tab_cols[]> { 
      return this.http.get(this.URL + "tables")
      .toPromise()
      .then(response => response.json() as All_tab_cols[])
      .catch(this.handleError); 
    }

    getColumnsByTable_name(name : String): Promise<All_tab_cols[]> { 
      let url = this.URL + 'columns/table_name/'+name;
      return this.http.get(url)
      .toPromise()
      .then(response => response.json() as All_tab_cols[])
      .catch(this.handleError); 
    }


    getColumns(): Promise<All_tab_cols[]> { 
      return this.http.get(this.URL + "columns")
      .toPromise()
      .then(response => response.json() as All_tab_cols[])
      .catch(this.handleError); 
    }

    getColumnsNumber(): Promise<All_tab_cols[]> { 
      return this.http.get(this.URL + "columns/number")
      .toPromise()
      .then(response => response.json() as All_tab_cols[])
      .catch(this.handleError); 
    }

    private handleError(error: any): Promise<any> { 
      console.error('An error occurred', error); // for demo purposes only 
      return Promise.reject(error.message || error);
     }
}
