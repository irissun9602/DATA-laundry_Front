import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { MetaService } from '../../services/meta.service';
import { Record_sample } from '../../models/Record_sample';
import { Standarzation } from '../../models/Standarzation';

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
  private showRecord : Record_sample[];
  private ruleResult : Record_sample[];
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
  }

  selectRule(table: Standarzation){
    this.metaService
    .getYN_sample(table.detail_code_name).then(
      ruleResult => this.ruleResult = ruleResult
    );
    
    
  }


}
