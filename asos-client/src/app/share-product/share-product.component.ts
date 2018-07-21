import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-share-product',
  templateUrl: './share-product.component.html',
  styleUrls: ['./share-product.component.css']
})
export class ShareProductComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ShareProductComponent>) {}

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
