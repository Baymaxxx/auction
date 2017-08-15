import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  imgSrc: string;
  products: Array<Product>;

  constructor() {
  }

  ngOnInit() {
    this.imgSrc = 'http://placehold.it/320x150';
    this.products = [
      new Product(1, '第一个商品', 3.99, 3.5, '这个商品很厉害', ['电子产品', '图书']),
      new Product(2, '第二个商品', 3.99, 3.5, '这个商品很厉害', ['电子产品', '图书']),
      new Product(3, '第三个商品', 2.99, 2.5, '这个商品很厉害', ['硬件', '图书']),
      new Product(4, '第四个商品', 6.99, 3.5, '这个商品很厉害', ['电子产品', '图书']),
      new Product(5, '第五个商品', 5.99, 4.5, '这个商品很厉害', ['电子产品', '图书']),
      new Product(6, '第六个商品', 4.99, 1.5, '这个商品很厉害', ['化妆品', '图书']),
    ];

    this.products.push(
      new Product(2, '第七个商品', 500, 4.5, '这个商品也很厉害', ['飒飒'])
    );
  }

}

export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
