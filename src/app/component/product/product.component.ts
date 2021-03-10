import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Products[] = [];

  constructor() {}

  ngOnInit(): void {}
}

// product = {
//   userId:2,
//   id:3,
//   title:"Auth okey",
//   complate:true
// };
// product1 = {
//   userId:2,
//   id:3,
//   title:"Auth okey",
//   complate:true
// };
// product2 = {
//   userId:2,
//   id:3,
//   title:"Auth okey",
//   complate:true
// };
// product3 = {
//   userId:2,
//   id:3,
//   title:"Auth okey",
//   complate:true
// };
// product4 = {
//   userId:2,
//   id:3,
//   title:"Auth okey",
//   complate:true
// };

// products:Products[] = [
//   this.product,
//   this.product1,
//   this.product2,
//   this.product3,
//   this.product4,
// ];
