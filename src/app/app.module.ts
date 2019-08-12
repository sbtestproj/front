import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
import { InterceptorModule } from './Modules/interceptor.module';
import { DetailsComponent } from './details/details.component';
import {RouterModule} from '@angular/router';
import { FillCofigTableComponent } from './fill-cofig-table/fill-cofig-table.component';

/*material*/
import { MaterialModule} from './Modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DialogtestComponent } from './dialogtest/dialogtest.component';
import { AddparamwindowComponent } from './addparamwindow/addparamwindow.component';
/*  end material */


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableConfigsComponent,
    ParameterFilterPipe,
    ParameterFilterByidPipe,
    DetailsComponent,
    FillCofigTableComponent,
    DialogtestComponent,
    AddparamwindowComponent
  ],
  imports: [
    InterceptorModule,
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    /* material */
    BrowserAnimationsModule, MatTableModule, MatPaginatorModule, MatTreeModule,
    MaterialModule, //  from our module
    /* material end */
    HttpClientModule,
    NgxPaginationModule, NgbModule, FormsModule,
    RouterModule.forRoot([
      {path: 'table-configs', component: TableConfigsComponent},
      {path: 'details', component: DetailsComponent},
      {path: 'add_param', component: AddparamwindowComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  /* for dialog material */
  entryComponents: [DialogtestComponent]
})
export class AppModule { }
