import { IProduct } from '../../models/product';
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

  // TODO fix gui - show fb twitter and copy buttons
  ngOnInit() {
    this.product = this.bottomSheetRef.containerInstance.bottomSheetConfig.data;
  }

  // TODO implement this
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  // TODO implement
  copy() {}

  shareOnFacebook() {}

  shareInTweeter() {}

}
