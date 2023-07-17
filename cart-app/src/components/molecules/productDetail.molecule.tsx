import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomText from "../atoms/customText.atom";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import RatingBestseller from "./ratingBestseller.molecule";
import FlatButton from "../atoms/flatButton.atom";

type ProductDetailProp = {
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number
    }

}

const ProductDetailCard:React.FC<ProductDetailProp> = (props)=>{
    return(
      <div className="row border border-secondary p-3">
        <div className="col-2">
          <img src={props.image} alt="Image" style ={{width:"50%"}}/>
        </div>
        <div className="col-6 d-flex flex-column">
          <strong>{props.title}</strong>
          <CustomText text={props.description} color='grey' styles={{marginBottom:'4%'}}/>
          <RatingBestseller numRated={props.rating.count} numRating={props.rating.rate} containerHeightInPx={''} />  
        </div>
        <div className="col d-flex flex-column">
        <strong><CustomText text={props.category} color='purple' styles={{marginBottom:'4%'}}/></strong>
          <CustomText text={'Move to Wishlist'} color='grey'/>
        </div>
        <div className="col-2 d-flex">
          <div className='d-flex flex-column gap-5'>
          <strong><CustomText text={`Rs. ${props.price.toString()}`} color='purple'/></strong>
          <FlatButton text={"Checkout"} backgroundColor={"purple"} textColor={"white"} inheritParentWidth={true} onClick={()=>{}}/>
          </div>
        </div>
      </div>
    );
}

export default ProductDetailCard;