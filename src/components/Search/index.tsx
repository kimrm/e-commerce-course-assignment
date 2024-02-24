import { useEffect, useState, useContext } from "react";
import { Product } from "../../types/ProductTypes";
import ProductsContext from "../../contexts/ProductsContext";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const contextValue = useContext(ProductsContext);

  useEffect(() => {
    setProducts(contextValue?.products || []);
  }, [contextValue]);

  useEffect(() => {
    if (searchText.length > 2) {
      const results = products.filter((product) => {
        const includesTitle = product.title
          .toLowerCase()
          .includes(searchText.toLowerCase());
        const includesTag = product.tags.some((tag) =>
          tag.toLowerCase().includes(searchText.toLowerCase())
        );

        return includesTitle || includesTag;
      });
      setSearchResults(results);
    }
  }, [searchText, products]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button>Search</button>
      <div>
        <h2>Results</h2>
        {searchResults.length === 0 && <p>No results found</p>}
        <p>{searchResults.length} results found</p>
        <ul>
          {searchResults.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
