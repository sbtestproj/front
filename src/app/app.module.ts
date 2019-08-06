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
import {ParameterFilterPipe} from './Filters/parameter-filter.pipe';
import {FormsModule} from '@angular/forms';
import {ParameterFilterByidPipe} from './Filters/parameter-filter-byid.pipe';
import { ServiceHttpService} from './Service/service-http.service';
import { InterceptorModule } from './interceptor/interceptor.module';
import { DetailsComponent } from './details/details.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableConfigsComponent,
    ParameterFilterPipe,
    ParameterFilterByidPipe,
    DetailsComponent
  ],
  imports: [
    InterceptorModule,
    BrowserModule, Ng2SearchPipeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTreeModule,
    HttpClientModule,
    NgxPaginationModule, NgbModule, FormsModule,
    RouterModule.forRoot([
      {path:'table-configs', component:TableConfigsComponent},
      {path:'details', component:DetailsComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
