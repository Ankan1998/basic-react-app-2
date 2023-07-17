export class Product {
  productId: number;
  quantity: number;
  constructor(productId:number,quantity:number){
    this.productId=productId;
    this.quantity=quantity;
  }
}

export class CartModel {
  id: number;
  userId: number;
  date: Date;
  products: Product[];

  constructor(id: number, userId: number, date: string, products: Product[]) {
    this.id = id;
    this.userId = userId;
    this.date = new Date(date);
    this.products = products;
  }
}