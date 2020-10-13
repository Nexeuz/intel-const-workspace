import {Component, Input, OnInit} from '@angular/core';
import {HitsEntity} from '../../../../core/interfaces/pixa-bay-img';

@Component({
  selector: 'intc-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() image: HitsEntity;
  constructor() { }

  ngOnInit(): void {
  }

}
