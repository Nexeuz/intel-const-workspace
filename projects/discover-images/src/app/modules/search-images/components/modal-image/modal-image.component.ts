import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {HitsEntity} from '../../../../core/interfaces/pixa-bay-img';

@Component({
  selector: 'intc-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss'],
})
export class ModalImageComponent implements OnInit {
  @Input() image: HitsEntity;
  showModal = false;
  imgBadges: string[];
  constructor() { }

  ngOnInit(): void {
    this.imgBadges = this.image.tags.split(',');
  }


}
