import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const url = "https://course-api.com/react-store-products";
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios(url);
      setData((previousData) => [...previousData, ...response.data]);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length > 0) {
    return (
      <div className='data-container'>
        <h2 className='title'>Products</h2>
        {data.map((product) => {
          const { id, name, image, category } = product;
          return (
            <div className='data' key={id}>
              <img src={image} alt={name} className='img' />
              <div className='data-article'>
                <h4>{category}</h4>
                <p>{name}</p>
                <Link href={`products/${id}`} className='btn'>
                  Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div className='loading'>Loading....</div>;
  }
};

export default HomePage;
