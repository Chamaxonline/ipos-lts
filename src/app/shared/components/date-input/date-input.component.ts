import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [],
  templateUrl: './date-input.component.html',
  styles: ``,
})
export class DateInputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() maxDate!: Date;

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}
