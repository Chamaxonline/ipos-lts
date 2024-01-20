import { item } from './item';

export class stn {
  constructor() {
    this.totalDifference = 0;
  }
  number!: string;
  date!: Date;
  isProcessed!: boolean;
  comment!: string;
  items!: stnItem[];
  totalDifference: number;
}

export class stnItem extends item {
  constructor() {
    super();
    this.qty = 0;
    this.originalQty = 0;
    this.lineNumber = 1;
  }
  originalQty: number;
  override qty: number;
  lineNumber: number;
}
