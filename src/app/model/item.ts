import { supplier } from './supplier';

export class item {
  constructor() {
    this.qty = 0;
    this.isCommonItem = false;
    this.reorderLevel = 0;
    this.reorderQty = 0;
    this.price = 0;
    this.cost = 0;
    this.wholesalePrice = 0;
    this.unitSize = 1;
    this.supplier = new supplier();
  }
  _id!: string;
  code!: string;
  name!: string;
  searchkeyWords!: string;
  price: number;
  cost: number;
  maxDiscount!: number;
  qty: number;
  isCommonItem: boolean;
  isInactive!: boolean;
  stockItemCode!: string;
  _typeId!: string;
  supplier: supplier;
  reorderLevel: number;
  reorderQty: number;
  wholesalePrice: number;
  unitSize: number;
}

export class itemType {
  constructor() {
    this.parentId = null;
  }
  _id!: string;
  name!: string;
  parentId: string | null;
}
