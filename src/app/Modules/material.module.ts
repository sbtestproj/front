import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule, MatInputModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule, MatButtonModule, MatDialogModule
  ],
  exports: [ MatDialogModule, MatButtonModule, MatInputModule]
})
export class MaterialModule { }
