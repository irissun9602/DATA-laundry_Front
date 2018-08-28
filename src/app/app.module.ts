import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MetaService} from '../services/meta.service';
import { ColumnListComponent } from '../pages/column-list/column-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path : '', redirectTo: '/api/columns/number', pathMatch:'full'},
      { path: 'api/columns/number', component: ColumnListComponent},
      { path: 'api/columns', component: AppComponent},
      
    ])
  ],
  providers: [MetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
