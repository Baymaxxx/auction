import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Comment, ProductService } from '../shared/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: [ './product-detail.component.scss' ]
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];
  newRating: number;
  newComment: string;
  isCommentHidden: boolean;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) {
    this.newRating = 5;
    this.newComment = '';
    this.isCommentHidden = true;
  }

  ngOnInit() {
    const productId: number = Number(this.routeInfo.snapshot.params[ 'productId' ]);
    this.product = this.productService.getProductById(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
    console.log(this.comments);
  }

  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.newComment = '';
    this.newRating = 5;
    this.isCommentHidden = true;
  }

}
