import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductService {
  products: Product[];
  comments: Comment[];

  constructor(private loggerService: LoggerService) {
    this.products = [
      new Product(0, 'iPhone8', 1.55, 3.5, 'iphone最新款手机', [ '化妆品', '图书' ]),
      new Product(1, 'iPhone81', 2.55, 2.5, 'iphone最新款手机', [ '化妆品', '图书' ]),
      new Product(2, 'iPhone82', 3.55, 1.5, 'iphone最新款手机', [ '化妆品', '图书' ]),
    ];
    this.comments = [
      new Comment(0, 0, '2017-02-02 22:22:22', '张三1', 2.3, '用着不错1'),
      new Comment(1, 0, '2017-01-02 22:22:22', '张三2', 1.3, '用着不错2'),
      new Comment(2, 1, '2017-03-02 22:22:22', '张三3', 4.3, '用着不错3'),
      new Comment(3, 3, '2017-04-02 22:22:22', '张三4', 3.1, '用着不错4')
    ];
  }

  getProductById(id: number): Product {
    return this.products.find((product) => id === product.id);
  }

  getProducts(): Product[] {
    this.loggerService.log('log');
    return this.products;
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment) => comment.productId === id);
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

export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {

  }
}
