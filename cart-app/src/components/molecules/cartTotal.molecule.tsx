import CustomText from "../atoms/customText.atom";
import FlatButton from "../atoms/flatButton.atom";

type CartTotalProps = {
    totalQuantity:number;
    actualTotalPrice:number;
    discountedTotalPrice:number;

    onClickCheckout: () => void;
}

const CartTotal = ({totalQuantity,actualTotalPrice,discountedTotalPrice,onClickCheckout}:CartTotalProps)=>{

    const formatIndianRupee = (amount: number): string => {
        return amount.toLocaleString('en-IN', {
          style: 'currency',
          currency: 'INR',
          minimumFractionDigits: 2
        });
      };

      const calculateDiscountPercentage = (totalPrice: number, discountedPrice: number): number => {
        return ((totalPrice - discountedPrice) / totalPrice) * 100;
      };

    return(
        <div className="d-flex flex-column col-4">
            <h3><strong><CustomText text={"Order Details"} color="grey"/></strong></h3>
            <h5><CustomText text={`Quantity ${totalQuantity.toString()}`}/></h5>
            <CustomText text={`Rs. ${formatIndianRupee(discountedTotalPrice)}`}/>
            <CustomText text={`Rs. ${formatIndianRupee(actualTotalPrice)}`} styles={{textDecoration:'line-through'}} color={'grey'}/>
            <CustomText text={`${calculateDiscountPercentage(actualTotalPrice,discountedTotalPrice).toString()}%off`} color="grey" styles={{marginBottom:"10px"}}/>
            <FlatButton text={"Checkout"} backgroundColor={"purple"} textColor={"white"} inheritParentWidth={true} onClick={onClickCheckout}/>

        </div>
    );

}

export default CartTotal;

