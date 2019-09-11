import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {
  MatAutocompleteModule, MatButtonToggleModule,
  MatCheckboxModule, MatIconModule,
  MatInputModule,
  MatListModule, MatRadioModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule, MatTabsModule,
  MatTreeModule
} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination' ;
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TableConfigsComponent } from './table-configs/table-configs.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ParameterFilterPipe} from './Filters/parameter-filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ParameterFilterByidPipe} from './Filters/parameter-filter-byid.pipe';
import { InterceptorModule } from './Modules/interceptor.module';
import { DetailsComponent } from './details/details.component';
import {RouterModule} from '@angular/router';

// reachtexteditor
import { CKEditorModule} from '@ckeditor/ckeditor5-angular';


/*material*/
import { MaterialModule} from './Modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DialogtestComponent } from './dialogtest/dialogtest.component';
import { AddparamwindowComponent } from './addparamwindow/addparamwindow.component';
import {ParameterFilterByConfigItemNamePipe} from './Filters/parameter-filter-by-configItemName.pipe';
import {ParameterFilterByConfigItemTypePipe} from './Filters/parameter-filter-by-configItemType.pipe';
import {ParameterFilterByDefaultValuePipe} from './Filters/parameter-filter-by-defaultValue.pipe';
import {ParameterFilterByDescriptionPipe} from './Filters/parameter-filter-by-description.pipe';
import {ParameterFilterByDevicePipe} from './Filters/parameter-filter-by-device.pipe';
import {ParameterFilterBySourceNamePipe} from './Filters/parameter-filter-by-sourceName.pipe';
import {ParameterFilterBySourceTypePipe} from './Filters/parameter-filter-by-sourceType.pipe';

import {Modul_filterPipe} from './Filters/modul_filter.pipe';
import { Step2Component } from './addparamwindow/step2/step2.component';

import {SectionFilterPipe} from './Filters/section-filter.pipe';
import {DataTypeFilterPipe} from './Filters/data-type-filter.pipe';
import {FirstStepComponent} from './addparamwindow/first1/first-step.component';

import {Modul_version_filterPipe} from './Filters/modul_version_filter.pipe';
import { Step4Component } from './addparamwindow/step4/step4.component';
import {ThirdStepComponent} from './addparamwindow/step3/third-step.component';

/*  end material */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableConfigsComponent,
    ParameterFilterPipe,
    ParameterFilterByidPipe,
    DetailsComponent,
    DialogtestComponent,
    AddparamwindowComponent,
    ParameterFilterByConfigItemNamePipe,
    ParameterFilterByConfigItemTypePipe,
    ParameterFilterByDefaultValuePipe,
    ParameterFilterByDescriptionPipe,
    ParameterFilterByDevicePipe,
    ParameterFilterBySourceNamePipe,
    ParameterFilterBySourceTypePipe,
    SectionFilterPipe,
    DataTypeFilterPipe,


    Modul_filterPipe,

    Step2Component,

    FirstStepComponent,

    ThirdStepComponent,
    Modul_version_filterPipe,
    Step4Component

  ],
  imports: [
    // reachtexteditor
    CKEditorModule,
    InterceptorModule,
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    /* material */
    BrowserAnimationsModule, MatTableModule, MatPaginatorModule, MatTreeModule,
    MaterialModule, MatInputModule, //  from our module
    /* material end */
    HttpClientModule,
    NgxPaginationModule, NgbModule, FormsModule,
    RouterModule.forRoot([
      {path: 'table-configs', component: TableConfigsComponent},
      {path: 'details', component: DetailsComponent},
      {path: 'add_param', component: AddparamwindowComponent}
    ]), ReactiveFormsModule, MatStepperModule, MatCheckboxModule, MatListModule, MatSelectModule, MatAutocompleteModule, MatButtonToggleModule, MatTabsModule, MatRadioModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  /* for dialog material */
  entryComponents: [DialogtestComponent]
})
export class AppModule { }
