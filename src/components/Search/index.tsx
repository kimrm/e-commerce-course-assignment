import { useEffect, useState, useContext } from "react";
import { IProduct } from "../../types/ProductTypes";
import ProductsContext from "../../contexts/ProductsContext";
import {
  SearchContainer,
  SearchResultsContainer,
  SearchResult,
  BackDrop,
} from "./Search.styles";
import { motion, useAnimation } from "framer-motion";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchResults, setSearchResults] = useState<IProduct[]>([]);
  const contextValue = useContext(ProductsContext);
  const backDropControls = useAnimation();
  const searchContainerControls = useAnimation();

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
    } else {
      setSearchResults([]);
    }
  }, [searchText, products]);

  useEffect(() => {
    if (searchResults.length === 0) {
      backDropControls.start({ opacity: 0, scale: 0 });
      searchContainerControls.start({ opacity: 0, scale: 0 });
    } else {
      backDropControls.start({ opacity: 1, scale: 1 });
      searchContainerControls.start({ opacity: 1, scale: 1 });
    }
  }, [searchResults, backDropControls, searchContainerControls]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchText("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <BackDrop
        as={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={backDropControls}
        transition={{ duration: 0.1 }}
        onClick={() => setSearchText("")}
      />
      <SearchContainer>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {searchResults.length > 0 && (
          <SearchResultsContainer
            as={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            animate={searchContainerControls}
            transition={{ duration: 0.3 }}
          >
            <SearchResult>
              <p>{searchResults.length} results found</p>
              <ul>
                {searchResults.map((product) => (
                  // component
                  <li key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <p>Found in: skin care</p>
                  </li>
                  // component
                ))}
              </ul>
            </SearchResult>
          </SearchResultsContainer>
        )}
      </SearchContainer>
    </>
  );
}
