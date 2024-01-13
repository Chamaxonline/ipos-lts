import { Component, OnInit } from '@angular/core';
import { item, itemType } from '../../model/item';
import { supplier } from '../../model/supplier';
import { ItemService } from '../../services/item.service';
import { SupplierService } from '../../services/supplier.service';
import { MessagingService } from '../../services/messaging.service';
import { NgForOf, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TextInputComponent } from '../../shared/components/text-input/text-input.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    TextInputComponent,
    NgxPaginationModule,
    LoaderComponent,
  ],
  templateUrl: './item.component.html',
  styles: ``,
})
export class ItemComponent implements OnInit {
  bulkEditItemForm: FormGroup[] = [];
  itemForm!: FormGroup;
  items!: item[];
  item = new item();
  bulkEditItems = new Array<item>();
  itemTypes = new Array<itemType>();
  suppliers = new Array<supplier>();
  isSaving!: boolean;
  isLoading!: boolean;
  isShowEditor!: boolean;
  searchText!: string;
  isShowBulkEditor!: boolean;
  currentPageNo!: number;
  pageSize = 20;

  constructor(
    private itemService: ItemService,
    private supplierService: SupplierService,
    private messageService: MessagingService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.getAllitems(0);
    // this.getAllTypes();
    this.addBulkEditItems();
    // this.getAllSuppliers();
    this.initializeForm();
  }

  initializeForm() {
    this.itemForm = this.fb.group({
      _id: [''],
      code: ['', Validators.required],
      name: ['', Validators.required],
      _typeId: [null],
      searchkeyWords: [''],
      isInactive: [false],
      isCommonItem: [false],
      cost: [null],
      price: [null],
      maxDiscount: [null],
      wholesalePrice: [null],
      supplier: this.fb.group({
        _id: [''],
      }),
      reorderLevel: [null],
      reorderQty: [null],
      stockItemCode: [''],
      unitSize: [null],
    });
  }

  addBulkEditItems() {
    for (let x = 0; x <= 9; x++) {
      // this.bulkEditItems.push(new item());
      const item = this.fb.group({
        _id: [''],
        code: ['', Validators.required],
        name: ['', Validators.required],
        cost: [null],
        price: [null],
        maxDiscount: [null],
      });
      this.bulkEditItemForm.push(item);
    }
  }
  searchItems() {
    this.getAllItems(0);
  }

  getAllItems(pageNumber: number) {
    this.isLoading = true;
    this.itemService
      .all(pageNumber, this.pageSize, this.searchText, true)
      .subscribe((res) => {
        this.items = res;
        this.isLoading = false;
      });
  }

  getAllTypes() {
    this.itemService.allTypes().subscribe((res) => {
      this.itemTypes = res;
    });
  }

  getAllSuppliers() {
    this.supplierService.all().subscribe((x) => {
      this.suppliers = x;
    });
  }

  save() {
    if (this.itemForm.valid) {
      this.isSaving = true;
      if (this.item.qty == null || this.item.qty == undefined) {
        this.item.qty = 0;
      }
      if (this.item.isInactive == null || this.item.isInactive == undefined) {
        this.item.isInactive = false;
      }
      this.itemService.save(this.itemForm.value).subscribe((res) => {
        this.itemForm.reset();
        this.item = new item();
        this.isSaving = false;
        this.messageService.saveSuccess();
        this.showHideEditor();
        this.getAllItems(0);
      });
    } else {
      this.itemForm.markAllAsTouched();
    }
  }

  isValidItem(item: item): boolean {
    if (!item.code || item.code == undefined) {
      return false;
    } else if (!item.name || item.name == undefined) {
      return false;
    }
    return true;
  }

  edit(editItem: item) {
    this.isShowEditor = true;
    if (!editItem.supplier) {
      editItem.supplier = new supplier();
    }
    if (editItem.searchkeyWords == undefined || editItem.searchkeyWords == '') {
      editItem.searchkeyWords = editItem.name;
    }

    this.item = editItem;
  }

  delete(deleteItem: item) {
    this.itemService.deleteItem(deleteItem).subscribe((res) => {
      this.messageService.saveSuccess();
      this.getAllItems(0);
    });
  }

  showHideEditor() {
    this.isShowEditor = !this.isShowEditor;
  }

  cancel() {
    this.itemForm.reset();
    this.isShowEditor = false;
    this.item = new item();
  }

  showHideBulkEditor() {
    this.isShowBulkEditor = !this.isShowBulkEditor;
  }

  saveBulk() {
    const isValid = this.bulkEditItemForm.filter((x) => !x.valid).length == 0;
    if (isValid) {
      for (let x = 0; x <= 9; x++) {
        let newItem = this.bulkEditItemForm[x];
        if (this.isValidItem(newItem.value)) {
          this.itemService.save(newItem.value).subscribe((res) => {
            this.item = new item();
            this.messageService.saveSuccess();
          });
        } else {
          this.messageService.error('Invalid item - ' + newItem.value['code']);
        }
      }
    } else {
      const invalidItems = this.bulkEditItemForm.filter((x) => !x.valid);
      for (let i = 0; i < invalidItems.length; i++) {
        invalidItems[i].markAllAsTouched();
      }
    }
  }
}
