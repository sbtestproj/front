import {Component, Injectable, OnInit} from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import {possible} from '../../Models/Entities/possibleValues';
import {AddparamwindowComponent} from '../addparamwindow.component';
import { ParamService} from '../Service/param.service';
import {ConfigItemPossibleValues} from '../../Models/Entities/configItemPossibleValues';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ThirdStepComponent implements OnInit {
  item: ConfigItemPossibleValues[] = [];
  registrationForm: FormGroup;
  check = true; // to be able to check next button's status
  public testResult: possible;
  constructor(
    private fb: FormBuilder,
    public main: AddparamwindowComponent,
    public paramService: ParamService
  ) {
  }

  /**
   * Form initialization
   */
  ngOnInit() {
    this.item = [];
    // this.paramService.FullData.configitempossiblevalues = null;
    this.registrationForm = this.fb.group({
      possibleValues: this.fb.array([
      ])
    });
    this.main.thirdFormGroup = this.registrationForm ;
    this.registrationForm.statusChanges.subscribe(st => {this.main.thirdFormGroup = this.registrationForm; } );
  }
  get possibleValues() {
    return this.registrationForm.get('possibleValues') as FormArray;
  }
  deleteAllPossibleValues() {
    if (this.possibleValues !== null) {
      for (let i = 0; i <= this.possibleValues.length; i++) {
        this.possibleValues.removeAt(i);
      }
    }
  }
  deletePossibleValues(i: number) {
      this.possibleValues.removeAt(i);
      // if (i === 0 && this.possibleValues.length === 0) {
      //   this.addPossibleValues();
      // }
  }

  addPossibleValues() {
    if (this.registrationForm.valid) {
      this.possibleValues.push(this.getUnit());
    }
  }
  private getUnit() {
    return this.fb.group({
      newValue: ['', Validators.compose([Validators.required, Validators.min(this.paramService.FullData.minvalue),
      Validators.max(this.paramService.FullData.maxvalue)])],
      newDescription: ['', Validators.required],
    });
  }
  // to be able to controll check buttons status
  checkMate() {
    this.check = false;
  }

  save() {
    this.testResult = new class implements possible {
      possibleValues: [{ newValue: undefined; newDescription: undefined }];
    }
  //  ******************************************************************
    this.check = true; //to be able to control next buttons status
   // *******************************************************************
    this.testResult = this.registrationForm.value;
    this.item = [];
    this.testResult.possibleValues.forEach(x => {
      console.log('/n description ==' + x.newDescription + '/n value ==' + x.newValue);
      this.item.push( { config_items_id: null, config_item_possible_values_id: null, config_item_possible_value: x.newValue, config_item_possible_value_description: x.newDescription});
      this.paramService.FullData.configitempossiblevalues = this.item ;
    } );
  }
}
