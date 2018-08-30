import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { All_tab_cols } from '../../models/All_tab_cols';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-column-list',
  templateUrl: './column-list.component.html',
  styleUrls: ['./column-list.component.css']
})
export class ColumnListComponent implements OnInit {
  private metaService : MetaService;
  private route: ActivatedRoute;
  private tables : All_tab_cols[];
  private selectedTable : All_tab_cols[];

  constructor(metaService : MetaService, route: ActivatedRoute) { 
    this.metaService= metaService;
    this.route = route;
  }

  ngOnInit() {
    this.metaService.getTables().then(
      tables => this.tables = tables
    );
  }

  selectTable(table: All_tab_cols){
    this.metaService.getColumnsByTable_name(table.table_name).then(
      selectedTable => this.selectedTable = selectedTable
    );
  }


}
