import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.scss' ]
})
export class ProductComponent implements OnInit {
  imgSrc: string;
  products: Array<Product>;
  keyword: string;
  titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => {
          this.keyword = value;
        }
      );
  }

  ngOnInit() {
    this.imgSrc = 'http://placehold.it/320x150';
    this.products = this.productService.getProducts();
  }

}

