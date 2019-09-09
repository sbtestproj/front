import {Component, Injectable, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HeaderComponent} from '../../header/header.component';
import { ParamService } from '../Service/param.service';
import {InterfaceToSave2, modules_to_save} from '../testout';


@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
@Injectable({
  providedIn: 'root'
})


export class Step4Component implements OnInit {


  constructor( private fb: FormBuilder, public head: HeaderComponent, public paramService: ParamService ) {}
  // variables


  public fourthFormGroup: FormGroup;

  ctrl_DescriptionChanged(desc: string) {
    this.paramService.FullData.configitemdescription = desc;
  }


  ngOnInit() {
    this.fourthFormGroup = this.fb.group({
      ctrl_Description: ['', Validators.required]
    });
    // this.ForTest = new class implements InterfaceToSave {
    //   configitemname: string;
    }
    // this.ForTest = this.main.testate;


  saveAndPost() {
    console.log('saved and posted');
  }
}
