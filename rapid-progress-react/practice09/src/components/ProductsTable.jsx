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
        <td>{category}</td>
      </tr>

      {filteredItems.map((item, idx) => (
        <tr key={idx}>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  );
};

export default ProductsTable;
