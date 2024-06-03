import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { products } from "./mockData";
export default function FilterableProductData() {
  const [filterText, setFilterText] = useState("");
  const [isStockChecked, setIsStockChecked] = useState(false);

  return (
    <>
      <SearchBar
        filterText={filterText}
        isStockChecked={isStockChecked}
        onChangeFiterText={setFilterText}
        onIsStockChecked={setIsStockChecked}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        isStockChecked={isStockChecked}
      />
    </>
  );
}
