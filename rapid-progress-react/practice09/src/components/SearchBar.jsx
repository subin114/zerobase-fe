const SearchBar = ({ filter, updateFilter }) => {
  const { text, isStockOnly } = filter;

  const handleText = (e) => {
    updateFilter(e.target.name, e.target.value);
  };

  const handleInStockOnly = (e) => {
    updateFilter(e.target.name, e.target.checked);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Search..."
        name="text"
        value={text}
        onChange={handleText}
      />
      <div>
        <input
          type="checkbox"
          id="stock"
          name="isStockOnly"
          checked={isStockOnly}
          onChange={handleInStockOnly}
        />
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </div>
  );
};

export default SearchBar;
