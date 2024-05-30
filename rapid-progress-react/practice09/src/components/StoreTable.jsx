/* eslint-disable no-prototype-builtins */
import ProductsTable from "./ProductsTable";

const StoreTable = ({ products, filter }) => {
  // products에서 filter.text가 있으면 -> 그 아이템만 렌더링하기
  const targetProduct = products.filter((i) => i.name === filter.text);
  const filteredProducts = targetProduct.length > 0 ? targetProduct : products;

  const result = filteredProducts.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur.category)) {
      // key(category)를 가지고 있는 케이스. 배열에 추가만 하면 됨
      return {
        ...acc,
        [cur.category]: [...acc[cur.category], cur],
      };
    } else {
      // 새로운 카테고리의 key를 생성하고 배열도 추가해줘야 함
      return {
        ...acc,
        [cur.category]: [cur],
      };
    }
  }, {});

  const keys = Object.keys(result);

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>

      <tbody>
        {keys.map((key, idx) => (
          <ProductsTable
            key={idx}
            category={key}
            items={result[key]}
            isStockOnly={filter.isStockOnly}
          />
        ))}
      </tbody>
    </table>
  );
};

export default StoreTable;
