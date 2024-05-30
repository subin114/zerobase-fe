import * as S from "./ProductsTable.style";
import styled from "styled-components";

const ProductsTable = ({ category, items, isStockOnly }) => {
  // console.log("카테고리", category);
  // console.log("아이템들", items);
  console.log("ccc", isStockOnly);

  const filteredItems = isStockOnly
    ? items.filter((item) => item.stocked)
    : items;

  return (
    <>
      <tr>
        <S.Category>{category}</S.Category>
      </tr>

      {filteredItems.map((item, idx) => (
        <tr key={idx}>
          <ProductName stocked={item.stocked}>{item.name}</ProductName>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  );
};

const ProductName = styled.td`
  color: ${(item) => (item.stocked ? "black" : "red")};
`;

export default ProductsTable;
