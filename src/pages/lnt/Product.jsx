import { useEffect, useState } from "react";
import ProductList from "./ProductList";
export default function Product() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((data) => setProductData(data.products))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <h1> Products</h1>
      <ProductList products={productData} />
    </>
  );
}
