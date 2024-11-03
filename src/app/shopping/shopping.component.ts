import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit{

  productList:any = [
    {
      "id": 1,
      "category": 'Mobile',
      "name": "Samsung",
      "price": 12249,
      "info": "SAMSUNG Galaxy A14 5G (Dark Red, 128 GB)  (6 GB RAM)",
      "image": "../../assets/images/Samsung.jpg",
      "enabled": true
    },
    {
      "id": 2,
      "category": 'Mobile',
      "name": "iPhone",
      "price": 67499,
      "info": "Apple iPhone 16 (Black, 128 GB) (6 GB RAM)",
      "image": "../../assets/images/iPhone.jpg",
      "enabled": true
    },
    {
      "id": 3,
      "category": 'Laptop',
      "name": "Acer",
      "price": 34990,
      "info": "Acer Aspire 3 Backlit Intel Core i5 12th Gen 1235U ",
      "image": "../../assets/images/acer.jpg",
      "enabled": true
    },
    {
      "id": 4,
      "category": 'Sports',
      "name": "Badminton",
      "price": 570,
      "info": "Adrenex by Flipkart R501 Full Graphite Badminton Racquet Black",
      "image": "../../assets/images/tennis_bat.jpg",
      "enabled": true
    },
    {
      "id": 5,
      "category": 'Mobile',
      "name": "Redmi",
      "price": 8500,
      "info": "REDMI 13c 5G (Startrail Green, 128 GB)  (6 GB RAM)",
      "image": "../../assets/images/Redmi.png",
      "enabled": true
    },
    {
      "id": 6,
      "category": 'Laptop',
      "name": "Lenovo",
      "price": 49990,
      "info": "Lenovo Intel Core i7 12th Gen 1255U - (16 GB/512 GB SSD)",
      "image": "../../assets/images/lenova.jpg",
      "enabled": true
    },
    {
      "id": 7,
      "category": 'Laptop',
      "name": "Asus",
      "price": 49990,
      "info": "ASUS Vivobook 15, Intel Core i3 12th Gen 1215U ",
      "image": "../../assets/images/asus.jpg",
      "enabled": true
    },
    {
      "id": 8,
      "category": 'Sports',
      "name": "Cricket",
      "price": 565,
      "info": "Strauss Rebel , Size SH / Full Size (34 X 4.5 inch) For All Age Groups",
      "image": "../../assets/images/cricket-bat.jpg",
      "enabled": true
    }
  ];
  availableProduct:any = [];
  cartItem:any = [];

  constructor(
    private route: Router,
    private authService: AuthenticationService,
    private commonService: CommonService,
    private toster: ToastrService
  ) {
  }
   
  ngOnInit(): void {
    this.availableProduct = this.productList;
  }

  showProduct(value: any) {
    if(value === 'Home') {
      this.availableProduct = this.productList;
    } else {
      this.availableProduct = this.productList.filter((item: { category: any; }) => {
        return item.category === value;
      });
    }
  }

  addToCart(item: any, index: any) {
    this.availableProduct[index].enabled = false;
    this.availableProduct = this.availableProduct;
    this.cartItem.push({
      "name": item.name,
      "qty": 1,
      "price": item.price
    });
    this.commonService.setCartValues(this.cartItem);
    this.toster.info('Your item successfully added to the Cart', '');
  }

  gotoCart(cartItem: any) {
    if(this.cartItem.length > 0) {
      this.route.navigateByUrl('/addtocart');
    }
  }

  logOut() {
    this.authService.logout();
    this.route.navigate(['/']);
  }

}
