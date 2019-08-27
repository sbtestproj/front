import {Component, Injectable, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HeaderComponent} from '../../header/header.component';
import { ParamService } from '../Service/param.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
@Injectable({
  providedIn: 'root'
})


export class Step4Component implements OnInit {
 public fourthFormGroup: FormGroup;
  // variables
  // ********* getting data from stemp2 **********



// ***************************************  functions ***************************************************
  // ******** Saving Data For Config Item Table *****************




  constructor(private fb: FormBuilder, public head: HeaderComponent, public paramService: ParamService) {}

  ngOnInit() {
    this.fourthFormGroup = this.fb.group({
      fourthCtrl: ['', Validators.required]
    });
    // this.ForTest = new class implements InterfaceToSave {
    //   configitemname: string;
    }
    // this.ForTest = this.main.testate;


  saveAndPost() {
    console.log('saved and posted');
  }
}
