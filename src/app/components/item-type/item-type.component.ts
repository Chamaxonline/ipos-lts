import { Component, OnInit } from '@angular/core';
import { itemType } from '../../model/item';
import { ItemService } from '../../services/item.service';
import { MessagingService } from '../../services/messaging.service';
import * as _ from 'lodash';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-type',
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf],
  templateUrl: './item-type.component.html',
  styles: ``,
})
export class ItemTypeComponent implements OnInit {
  editingItemName!: string;
  editingTypeId!: string;
  itemType = new itemType();
  itemTypes = new Array<itemType>();
  primaryTypes = new Array<itemType>();

  constructor(
    private itemService: ItemService,
    private messagingService: MessagingService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  save(name: string, parentId?: string) {
    if (!name || name == '') {
      this.messagingService.error('Name required');
      return;
    }

    this.itemType.parentId = parentId as string;
    this.itemType.name = name;
    this.itemService.saveType(this.itemType).subscribe((res) => {
      this.itemType = new itemType();
      // this.isSaving = false;
      // this.isShowEditor = false;
      this.messagingService.saveSuccess();
      this.getAll();
      this.editingItemName = '';
      this.itemType = new itemType();
      this.editingTypeId = '';
    });
  }

  getAll() {
    this.itemService.allTypes().subscribe((res) => {
      this.itemTypes = res;
      this.fillPrimaryTypes(res);
    });
  }

  setSelectedEditor(id: string) {
    this.editingTypeId = id;
  }

  hideAdd() {
    this.editingTypeId = '';
  }

  fillPrimaryTypes(items: any) {
    this.primaryTypes = _.filter(items, (o: any) => {
      return o._parentId == undefined;
    });
  }

  getChildNodes(id: any) {
    return _.filter(this.itemTypes, (o: any) => {
      return o._parentId == id;
    });
  }
}
