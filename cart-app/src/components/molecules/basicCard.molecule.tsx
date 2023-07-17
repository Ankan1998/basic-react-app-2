import React from 'react';
import BasicTitle from '../atoms/basicTitle.atom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import FlatButton from '../atoms/flatButton.atom';

type Props = {
  productId: number;
  quantity: number;
}

const BasicCard: React.FC<Props> = ({ productId, quantity}) => {
  return (
    
      <div className="col-4">
        <Link to={`/productdetails/${productId}`} style={{ textDecoration: 'none' }}>
    <div className="card border-primary p-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="rounded-2 bg-light border border-secondary p-3">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        </div>
        <div className="text-right">
          <BasicTitle title={'Product Id: '} value={productId}/>
          <BasicTitle title={'Quantity: '} value={quantity}/>
        </div>

      </div>
      <FlatButton text={"Add to Cart"} backgroundColor={"brown"} textColor={"white"} inheritParentWidth={false} onClick={()=>{
          console.log("Add To cart Clicked")
        }}/>
    </div>
    </Link>
    </div>
    
  );
};

export default BasicCard;