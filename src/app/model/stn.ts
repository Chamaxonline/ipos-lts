import { item } from './item';

export class stn {
  constructor() {
    this.totalDifferance = 0;
  }
  number!: string;
  date!: Date;
  isProcessed!: boolean;
  comment!: string;
  items!: stnItem[];
  totalDifferance: number;
}

export class stnItem extends item {
  constructor() {
    super();
    this.qty = 0;
    this.orginalQty = 0;
    this.lineNumber = 1;
  }
  orginalQty: number;
  override qty: number;
  lineNumber: number;
}
