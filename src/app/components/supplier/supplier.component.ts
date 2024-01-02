import { Component, OnInit } from '@angular/core';
import { supplier } from '../../model/supplier';
import { SupplierService } from '../../services/supplier.service';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf],
  templateUrl: './supplier.component.html',
})
export class SupplierComponent implements OnInit {
  suppliers: supplier[] = [];
  supplier = new supplier();
  isSaving: boolean = false;
  isLoading: boolean = false;
  isShowEditor: boolean = false;
  constructor(
    private supplierService: SupplierService) {

     }

  ngOnInit(): void {
    //this.getAllSuppliers();
  }

  getAllSuppliers() {
    this.isLoading = true;
    this.supplierService.all()
    .subscribe(
      res => {
        this.suppliers= res;
        this.isLoading = false;
    })
  }

  save() {
    this.isSaving = true;
    this.supplierService.save(this.supplier)
    .subscribe(
      res => { 
        this.supplier = new supplier();
        this.isSaving = false;
        this.isShowEditor = false;
        //this.messageService.saveSuccess();
        this.getAllSuppliers();
      }
    )
  }

  edit(editSupplier: supplier) {
    this.isShowEditor = true;
    this.supplier = editSupplier;
  }

  delete(deleteSupplier: any) {
    if(deleteSupplier) {

    }
  }

  showHideEditor() {
    this.isShowEditor = !this.isShowEditor;
  }

  cancel() {
    this.isShowEditor = false;
    this.supplier = new supplier();
  }
}
