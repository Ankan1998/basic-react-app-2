import { ReactNode } from "react";
import FlatButton from "../atoms/flatButton.atom";
import { Rating } from "./rating.component";

type RatingBestsellerProp = {
    numRating:number;
    numRated:number;
    containerHeightInPx:string;
    textColor?:string;
    children?:ReactNode;
}

const RatingBestseller = ({ numRating,containerHeightInPx,numRated,children }: RatingBestsellerProp) => {
    
    return (
        <div className="d-flex align-items-center inline-flex" style={{ height: containerHeightInPx}}>
            <span style={{color:'orange', marginRight:'8px'}}><strong>{numRating}</strong></span>
            <Rating numberofstars={numRating} color="orange"/>
            <strong><span style={{color:'grey',marginLeft:'8px',marginRight:'8px'}}>({numRated})</span></strong>
            {children}

        </div>
    );
  };
  
  export default RatingBestseller;