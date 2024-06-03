export default function ProductList({ products }) {
  const renderProduct = products.map((product) => (
    <li>
      {product.title} {product.price}
    </li>
  ));
  return <ol>{renderProduct}</ol>;
}
