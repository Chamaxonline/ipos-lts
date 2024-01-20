import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { stn, stnItem } from '../../model/stn';
import { item } from '../../model/item';
import { CommonService } from '../../services/common.service';
import { MessagingService } from '../../services/messaging.service';
import _ from 'lodash';
import { ItemSearchComponent } from '../item-search/item-search.component';

@Component({
  selector: 'app-stock-taking',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    ItemSearchComponent,
    CommonModule,
  ],
  templateUrl: './stock-taking.component.html',
  styles: ``,
})
export class StockTakingComponent implements OnInit {
  stn!: stn;
  newItem = new stnItem();
  items!: item[];
  stns!: stn[];
  lineNumber = 1;
  showCreateNewStn = false;
  fromDate = new Date();
  toDate = new Date();
  totalValue!: number;

  constructor(
    private commonService: CommonService,
    private messageService: MessagingService
  ) {}

  ngOnInit(): void {
    this.resetStn();
    this.search();
  }

  showHideCreateNew() {
    this.showCreateNewStn = !this.showCreateNewStn;
  }

  selectItem(value: item) {
    this.newItem._id = value._id;
    this.newItem.code = value.code;
    this.newItem.name = value.name;
    this.newItem.cost = value.cost;
    this.newItem.originalQty = value.qty;
    this.newItem.qty = 0;
  }

  add() {
    if (this.newItem._id !== undefined) {
      this.newItem.lineNumber = this.lineNumber++;
      this.stn.items.push(this.newItem);
      this.calculateTotal();
      this.resetItem();
    }
  }

  resetItem() {
    this.newItem = new stnItem();
  }

  resetStn() {
    this.stn = new stn();
    this.stn.number = new Date().getTime().toString().substring(0, 10);
    this.lineNumber = 1;
    this.stn.items = new Array<stnItem>();
  }

  calculateTotal() {
    this.stn.totalDifference = _.sumBy(this.stn.items, function (o) {
      return (o.qty - o.originalQty) * o.cost;
    });
  }

  save() {
    this.stn.date = new Date();
    this.stn.isProcessed = false;
    this.commonService.saveStn(this.stn).subscribe((x) => {
      this.resetStn();
      this.messageService.saveSuccess();
      this.search();
    });
  }

  process(stnToProcess: stn) {
    this.commonService.processStn(stnToProcess).subscribe((x) => {
      this.messageService.saveSuccess();
      this.search();
    });
  }

  search() {
    this.commonService
      .searchStn(this.fromDate, this.toDate)
      .subscribe((req) => {
        this.stns = req;
      });
  }

  delete(item: stnItem) {
    _.remove(this.stn.items, function (n) {
      return n.lineNumber == item.lineNumber;
    });
    this.calculateTotal();
  }
}
