import { cashTransactionType } from './enum';

export class cash {
  constructor() {
    this.fiveThousand = 0;
    this.oneThousand = 0;
    this.fiveHundred = 0;
    this.oneHundred = 0;
    this.fifty = 0;
    this.twenty = 0;
    this.ten = 0;
    this.five = 0;
    this.two = 0;
    this.one = 0;
  }
  type!: cashTransactionType;
  comment!: string;
  date!: Date;
  fiveThousand: number;
  get fiveThousandValue() {
    return this.fiveThousand * 5000;
  }
  oneThousand: number;
  get oneThousandValue() {
    return this.oneThousand * 1000;
  }
  fiveHundred: number;
  get fiveHundredValue() {
    return this.fiveHundred * 500;
  }
  oneHundred: number;
  get oneHundredValue() {
    return this.oneHundred * 100;
  }
  fifty: number;
  get fiftyValue() {
    return this.fifty * 50;
  }
  twenty: number;
  get twentyValue() {
    return this.twenty * 20;
  }
  ten: number;
  get tenValue() {
    return this.ten * 10;
  }
  five: number;
  get fiveValue() {
    return this.five * 5;
  }
  two: number;
  get twoValue() {
    return this.two * 2;
  }
  one: number;
  total!: number;
  getTotal() {
    let totalValue =
      this.fiveThousandValue +
      this.oneThousandValue +
      this.fiveHundredValue +
      this.oneHundredValue +
      this.fiftyValue +
      this.twentyValue +
      this.tenValue +
      this.fiveValue +
      this.twoValue +
      this.one;
    return totalValue;
  }
}
