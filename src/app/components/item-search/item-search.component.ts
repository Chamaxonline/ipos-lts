import { NgForOf, NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { item } from '../../model/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-search',
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf],
  templateUrl: './item-search.component.html',
  styles: ``,
})
export class ItemSearchComponent implements OnInit {
  isLoading!: boolean;
  items!: item[];
  isShowResult = false;
  searchText = '';
  @Output() selectItemEvent = new EventEmitter<item>();

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}

  getAllItems(searchText: string) {
    this.isLoading = true;
    this.itemService.all(0, 100, searchText).subscribe((res) => {
      this.items = res;
      this.isShowResult = true;
      this.isLoading = false;
    });
  }

  selectItem(item: item) {
    this.selectItemEvent.emit(item);
    this.isShowResult = false;
    this.searchText = '';
  }
}
