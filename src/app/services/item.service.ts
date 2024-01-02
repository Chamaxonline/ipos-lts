import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { item, itemType } from '../model/item';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  all(
    pageNumber: number,
    pageSize: number,
    searchText: string | undefined,
    includeInactiveItems: boolean = false
  ) {
    return this.get<item[]>(
      `/api/items?pageNumber=${pageNumber}&pageSize=${pageSize}&searchText=${searchText}&includeInactiveItems=${includeInactiveItems}`
    );
  }

  byTypeId(typeId: string) {
    return this.get<item[]>(`/api/itemsByTypeId?typeId=${typeId}`);
  }

  bySupplierId(supplierId: string, isAllItems: boolean = false) {
    return this.get<item[]>(
      `/api/itemsBySupplierId?supplierId=${supplierId}&isAllitems=${isAllItems}`
    );
  }

  save(item: item) {
    return this.post<item>(`/api/item`, item);
  }

  deleteItem(item: item) {
    return this.delete<item>(`/api/item`, item);
  }

  saveType(itemType: itemType) {
    return this.post<itemType>(`/api/itemType`, itemType);
  }

  allTypes() {
    return this.get<itemType[]>(`/api/itemTypes`);
  }
}
