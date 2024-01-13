import { Component, OnInit } from '@angular/core';
import { customer } from '../../model/customer';
import { CommonService } from '../../services/common.service';
import { NgForOf, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TextInputComponent } from '../../shared/components/text-input/text-input.component';
import { TextAreaInputComponent } from '../../shared/components/text-area-input/text-area-input.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    TextInputComponent,
    TextAreaInputComponent,
  ],
  templateUrl: './customer.component.html',
  styles: ``,
})
export class CustomerComponent implements OnInit {
  registerForm!: FormGroup;
  customer = new customer();
  customers = new Array<customer>();
  isShowEditor = false;

  constructor(private commonService: CommonService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
    // this.getAll();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      _id: [''],
      phoneNumber: ['', Validators.required],
      whatsappNumber: ['', Validators.required],
      title: ['Mr. '],
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: [''],
      comment: [''],
      totalBillValue: [null],
      totalOutstanding: [null],
      isAllowedPrintName: [false],
    });
  }

  showHideEditor() {
    this.isShowEditor = !this.isShowEditor;
  }

  save() {
    if (this.registerForm.valid) {
      this.commonService.saveCustomer(this.registerForm.value).subscribe((res) => {
        this.customer = new customer();
        this.registerForm.reset();
        //this.isSaving = false;
        // this.isShowEditor = false;
        //this.messageService.saveSuccess();
        this.getAll();
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  cancel() {
    this.registerForm.reset();
    this.isShowEditor = false;
  }

  getAll() {
    this.commonService.customers().subscribe((res) => {
      this.customers = res;
    });
  }

  edit(editCustomer: customer) {
    this.isShowEditor = true;
    this.customer = editCustomer;
  }
}
