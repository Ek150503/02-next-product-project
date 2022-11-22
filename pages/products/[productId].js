import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
const SingleProduct = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [render, setRender] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});

  const url = "https://course-api.com/react-store-products";
  const [data, setData] = useState([]);

  const fetchData = async () => {
    if (!productId) return;
    try {
      const response = await axios(url);
      setData((previousData) => [...previousData, ...response.data]);

      setSingleProduct(response.data.find((s) => s.id === productId));
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  //   const { id, image, name, description } = singleProduct[0];
  console.log(singleProduct);

  if (!singleProduct) {
    return <h2 className='loading'>Loading...</h2>;
  }

  return (
    <div className='single_product'>
      <div className='single_product_left'>
        <img
          src={singleProduct.image}
          alt={setSingleProduct.name}
          className='img'
        />
      </div>
      <div className='single_product_right'>
        <h3>{singleProduct.name}</h3>
        <p className='amount'>${singleProduct.price}</p>
        <p className='dsc'>{singleProduct.description}</p>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default SingleProduct;
