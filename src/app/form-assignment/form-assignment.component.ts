import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent implements OnInit {

  getFullName = '';
  getEmail = '';
  getMobileNumber = '';
  getCity = '';
  getFamilyName: any;
  getFamilyRelation: any;
  utilityArray = [];
  count: number = 0;

  registerForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      emailId: ['', [Validators.email, Validators.required]],
      createPassword: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]],
      currentCity: ['', Validators.required],
      family: this.fb.array([])
    });
  }


  ngOnInit(): void {
  }

  family(): FormArray {
    return this.registerForm.get('family') as FormArray;
  }
  newFamily(): FormGroup {
    return this.fb.group({
      rname: ['', Validators.required],
      relation: ['', Validators.required],
    })
  }
  addFamily() {
    this.family().push(this.newFamily());
  }
  onSubmit() {
    this.getFullName = this.registerForm.get('fullName')?.value;
    this.getEmail = this.registerForm.get('emailId')?.value;
    this.getMobileNumber = this.registerForm.get('mobileNumber')?.value;
    this.getCity = this.registerForm.get('currentCity')?.value;
    for (let i = 0; i <= this.count; i++) {
      this.getFamilyName = this.family().at(i);
    }
    // console.log(this.registerForm.value.family);
    // console.log(this.getFamilyName);
    // this.utilityArray = Object.values(this.getFamilyName)
    // console.log(this.utilityArray);
  }

  removeFamily() {
    this.family().removeAt(this.family().length - 1);
  }

}
