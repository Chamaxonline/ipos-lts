import { Component, OnInit } from '@angular/core';
import { supplier } from '../../model/supplier';
import { SupplierService } from '../../services/supplier.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { TextInputComponent } from '../../shared/components/text-input/text-input.component';
import { TextAreaInputComponent } from '../../shared/components/text-area-input/text-area-input.component';

@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    TextInputComponent,
    TextAreaInputComponent,
  ],
  templateUrl: './supplier.component.html',
})
export class SupplierComponent implements OnInit {
  registerForm!: FormGroup;
  suppliers: supplier[] = [];
  supplier = new supplier();
  isSaving: boolean = false;
  isLoading: boolean = false;
  isShowEditor: boolean = false;
  constructor(
    private supplierService: SupplierService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getAllSuppliers();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      _id: [''],
      code: [''],
      name: ['', Validators.required],
      address: ['', Validators.required],
      contact1: ['', Validators.required],
      contact2: [''],
      contact3: [''],
      whatsapp: [''],
    });
  }

  getAllSuppliers() {
    this.isLoading = true;
    this.supplierService.all().subscribe((res) => {
      this.suppliers = res;
      this.isLoading = false;
    });
  }

  save() {
    if (this.registerForm.valid) {
      this.isSaving = true;
      this.supplierService.save(this.registerForm.value).subscribe((res) => {
        this.registerForm.reset();
        this.supplier = new supplier();
        this.isSaving = false;
        this.isShowEditor = false;
        //this.messageService.saveSuccess();
        this.getAllSuppliers();
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  edit(editSupplier: supplier) {
    this.isShowEditor = true;
    this.supplier = editSupplier;
  }

  delete(deleteSupplier: any) {
    if (deleteSupplier) {
    }
  }

  showHideEditor() {
    this.isShowEditor = !this.isShowEditor;
  }

  cancel() {
    this.registerForm.reset();
    this.isShowEditor = false;
    this.supplier = new supplier();
  }
}
