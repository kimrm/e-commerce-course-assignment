import { useEffect, useState, useContext, useRef } from "react";
import { IProduct } from "../../types/ProductTypes";
import { ProductsContext } from "../../contexts/ProductsContext";
import {
  SearchContainer,
  SearchResultsContainer,
  SearchResult,
  BackDrop,
} from "./Search.styles";
import { motion, useAnimation } from "framer-motion";
import SearchResultItem from "./SearchResultItem";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchResults, setSearchResults] = useState<IProduct[]>([]);
  const contextValue = useContext(ProductsContext);
  const backDropControls = useAnimation();
  const searchContainerControls = useAnimation();
  const searchContainerRef = useRef<HTMLDivElement>(null);

  function handleInputFocus() {
    searchContainerRef.current?.classList.add("expanded");
  }

  function handleInputBlur() {
    searchContainerRef.current?.classList.remove("expanded");
  }

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
      <SearchContainer ref={searchContainerRef as any}>
        <input
          type="search"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
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
                  <SearchResultItem
                    key={product.id}
                    product={product}
                    clicked={() => setSearchText("")}
                  />
                ))}
              </ul>
            </SearchResult>
          </SearchResultsContainer>
        )}
      </SearchContainer>
    </>
  );
}
