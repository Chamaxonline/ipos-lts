import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mean-loader',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loader.component.html',
  styles: ``,
})
export class LoaderComponent implements OnInit {
  @Input() loading!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
