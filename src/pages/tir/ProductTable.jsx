export default function ProductTable({ products, filterText, isStockChecked }) {
  const row = [];
  let lastCategory = null;

  products.forEach((element) => {
    if (isStockChecked && !element.stocked) {
      return;
    }
    if (element.name.toUpperCase().indexOf(filterText.toUpperCase()) == -1) {
      return;
    }
    if (element.category !== lastCategory) {
      row.push(<ProductCategoryRow category={element.category} />);
    }
    row.push(<ProductRow product={element} />);
    lastCategory = element.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{row}</tbody>
    </table>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <td>
        <b>{category} </b>
      </td>
    </tr>
  );
}
