import { IProduct } from './../product';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-share-product',
  templateUrl: './share-product.component.html',
  styleUrls: ['./share-product.component.css']
})
export class ShareProductComponent implements OnInit {

  product: IProduct;

  constructor(private bottomSheetRef: MatBottomSheetRef<ShareProductComponent>) {}

  ngOnInit() {
    this.product = this.bottomSheetRef.containerInstance.bottomSheetConfig.data;
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
