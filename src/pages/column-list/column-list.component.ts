import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { MetaService } from '../../services/meta.service';
import { Record_sample } from '../../models/Record_sample';
import { Standarzation } from '../../models/Standarzation';
import { ParameterType } from '../../models/ParameterType';
@Component({
  selector: 'app-column-list',
  templateUrl: './column-list.component.html',
  styleUrls: ['./column-list.component.css']
})
export class ColumnListComponent implements OnInit {
  private metaService : MetaService;
  private route: ActivatedRoute;
  private tables : Standarzation[];
  private selectedTable : Standarzation[];
  private showRecord : Array<Map<string,object>>;
  private ruleResult : Array<Map<string,object>>;
  private p : ParameterType;
  private as : String[];
  constructor(metaService : MetaService, route: ActivatedRoute) { 
    this.metaService= metaService;
    this.route = route;
  }

  ngOnInit() {
    this.metaService.getTables().then(
      tables => this.tables = tables
    );
  }

  selectTable(table: Standarzation ){
    this.metaService
    .getColumnsByTable_name(table.table_name).then(
      selectedTable => this.selectedTable = selectedTable
    );
    this.metaService
      .getRecord_sample(table.table_name).then(
        showRecord => this.showRecord = showRecord
      );

      for(var i=0; i<this.showRecord.length;i++)
        var a = this.showRecord[i];
        for( var key in a ){
          this.as.push(a[key]);
        }
       
  }

  selectRule(table: Standarzation){

    this.p= new ParameterType(table.table_name, table.column_name);
    
    this.metaService
    .getYN_sample(this.p).then(
      ruleResult => this.ruleResult = ruleResult
    );


    
    
  }


}
