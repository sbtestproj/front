import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule, MatTreeModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination' ;
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TableConfigsComponent } from './table-configs/table-configs.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableConfigsComponent
  ],
  imports: [
    BrowserModule, Ng2SearchPipeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTreeModule,
    HttpClientModule,
    NgxPaginationModule, NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
