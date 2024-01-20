import { Pipe, PipeTransform } from '@angular/core';
import { customer } from '../model/customer';

@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class SearchFilterPipe implements PipeTransform {
  transform(collection: customer[], searchText: string): unknown {
    let _list: any = [];
    if (!searchText || searchText.trim() == '') {
      return collection;
    }
    if (collection) {
      return collection.filter((customer) => {
        if (
          (customer.name &&
            customer.name.toUpperCase().indexOf(searchText.toUpperCase()) >
              -1) ||
          (customer.phoneNumber &&
            customer.phoneNumber
              .toUpperCase()
              .indexOf(searchText.toUpperCase()) > -1)
        ) {
          _list.push(customer);
          return _list;
        }
      });
    }
    return _list;
  }
}
