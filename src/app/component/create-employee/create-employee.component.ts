import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  createEmployeeForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  get f() {
    return this.createEmployeeForm.controls;
  }

  ngOnInit(): void {
    this.createEmployeeForm = this.formBuilder.group({
      userName: ['', Validators.required],
      emAge: ['', Validators.required],
    });
  }


  onSubmit() {
    this.submitted = true;
    if (this.createEmployeeForm.invalid) {
      return true;
    }
    alert("hi We are ready!!")
  }
}
