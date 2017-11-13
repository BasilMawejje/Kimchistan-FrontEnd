import { Component } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './service/product.service';
import {StripeCheckoutLoader, StripeCheckoutHandler} from 'ng-stripe-checkout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  lat: number = 59.334248;
  lng: number = 18.063829;
  private stripeCheckoutHandler: StripeCheckoutHandler;


  constructor(private productService: ProductService, private stripeCheckoutLoader: StripeCheckoutLoader) {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAll()
      .subscribe(products => {
        this.products = products;
      });
  }

  public ngAfterViewInit() {
    this.stripeCheckoutLoader.createHandler({
        key: 'pk_test_tzGL0gkTTfi6MspvJQhEo6Hq',
        token: (token) => {
            // Do something with the token...
            console.log('Payment successful!', token);
        }
    }).then((handler: StripeCheckoutHandler) => {
        this.stripeCheckoutHandler = handler;
    });
  }

  public onClickBuy() {
    this.stripeCheckoutHandler.open({
        amount: 1500,
        currency: 'SEK'
    });
  }

  public onClickCancel() {
    // If the window has been opened, this is how you can close it:
    this.stripeCheckoutHandler.close();
  }
}
