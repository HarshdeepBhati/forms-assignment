import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,FormArray } from '@angular/forms';
@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent implements OnInit {

registerForm = this.fb.group(
  {
    fullName: ['',Validators.required],
    emailId: ['',[Validators.email,Validators.required]],
    createPassword:['',[Validators.required,Validators.minLength(6)]],
    mobileNumber:['',[Validators.required,Validators.pattern('[- +()0-9]+')]],
    currentCity:['',Validators.required],
    family: this.fb.array([
      this.fb.control('')
    ],Validators.required)
  }
);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  get family()
  {
    return this.registerForm.get('family') as FormArray;
  }
  onSubmit(){
    console.log(this.registerForm.value)
  }
  addFamily(){
    this.family.push(this.fb.control(''));
  }
  removeFamily()
  {
    this.family.removeAt(this.family.length-1);
  }
}
