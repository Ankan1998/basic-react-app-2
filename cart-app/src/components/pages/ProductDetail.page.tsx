import { useEffect, useState } from "react";
import { ProductDetailModel } from "../../models/product.model";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductDetailCard from "../molecules/productDetail.molecule";
import Loader from "../atoms/loader.atoms";
import CustomText from "../atoms/customText.atom";

const ProductDetail: React.FC = () => {
    const [productDetail, setProductDetail] = useState<ProductDetailModel| null >(null);
    const [error, setError] = useState<string | null>(null);
    const { id = 0 } = useParams();

    useEffect(()=>{
        const fetchProductDetail = async () => {
            try {
              const response = await axios.get<ProductDetailModel>(`${process.env.REACT_APP_PRODUCT_API_ENDPOINT}${id}`);
              setProductDetail(response.data);
            } catch (error:any) {
              setError(error.message)
            }
          };
      
          fetchProductDetail();
    },[id])


      if (error) {
        return <div>{error}</div>;
      }
    
      if (!productDetail) {
        return (<Loader/>);
      }

    return (
        <div className="container">
          <div className="row p-3">
            <h3><strong><CustomText text={productDetail.title}/></strong></h3>
          </div>
          <div className="row p-5">
            <ProductDetailCard title={productDetail.title} price={productDetail.price} description={productDetail.description} category={productDetail.category} image={productDetail.image} rating={productDetail.rating} />
            </div>
        </div>

    );
  };
  
export default ProductDetail