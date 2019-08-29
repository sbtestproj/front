import {Component, Injectable, OnInit} from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import {possible} from '../../Models/Entities/possibleValues';
import {AddparamwindowComponent} from '../addparamwindow.component';
import { ParamService} from '../Service/param.service';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ThirdStepComponent implements OnInit {
  registrationForm: FormGroup;
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
    this.registrationForm = this.fb.group({
      possibleValues: this.fb.array([
      ])
    });
    this.main.secondFormGroup = this.registrationForm ;
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

  save() {
    this.testResult = new class implements possible {
      possibleValues: [{ newValue: undefined; newDescription: undefined }];
    }
    this.testResult = this.registrationForm.value;
    this.testResult.possibleValues.forEach(x => console.log('/n description ==' + x.newDescription + '/n value ==' + x.newValue));
  }
}
