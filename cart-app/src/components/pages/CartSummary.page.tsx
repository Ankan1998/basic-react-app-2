import { useEffect, useState } from "react";
import BasicCard from "../molecules/basicCard.molecule";
import axios from "axios";
import { CartModel, Product } from "../../models/Cart.model";
import Loader from "../atoms/loader.atoms";
import React from "react";
import CartTotal from "../molecules/cartTotal.molecule";

const CartSummary: React.FC = () => {
    const [cart, setCart] = useState<CartModel| null >(null);
    const [error, setError] = useState<string | null>(null);
    let totalQuantity:number=0;

    useEffect(()=>{
        const fetchCart = async () => {
            try {
              const response = await axios.get<CartModel>(`${process.env.REACT_APP_CART_API_ENDPOINT}`);
              setCart(response.data);
            } catch (error:any) {
              setError(error.message)
            }
          };
      
          fetchCart();
    },[])

      if (error) {
        return <div>{error}</div>;
      }
    


    return (
        <div className="container">
          <div className="row p-5 justify-content-center">
          {!cart? <Loader/>:       
        <>{cart?.products.map((product:Product)=>{
          totalQuantity=totalQuantity+product.quantity;
          return (<BasicCard productId={product.productId} quantity={product.quantity} key={product.productId}/>)})}     
      </>}
        </div>
        <div className="row p-5 justify-content-center">
          <CartTotal totalQuantity={totalQuantity} actualTotalPrice={5000} discountedTotalPrice={2678} onClickCheckout={function (): void {
            console.log("Checkout Clicked")
          } }/>
        </div>
      </div>  
    );
  };
  
export default CartSummary
