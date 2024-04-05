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
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.onfocus = () => {
        if (searchContainerRef.current) {
          searchContainerRef.current.classList.add("expanded");
        }
      };
      searchInputRef.current.onblur = () => {
        if (searchContainerRef.current) {
          searchContainerRef.current.classList.remove("expanded");
          if (searchInputRef.current) searchInputRef.current.value = "";
        }
      };
    }
    return () => {
      if (searchInputRef.current) {
        searchInputRef.current.onfocus = null;
        searchInputRef.current.onblur = null;
      }
    };
  }, []);

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          type="search"
          placeholder="Search for a product or category..."
          aria-label="Search for a product or category..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          ref={searchInputRef as any}
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
