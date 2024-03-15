import { Link } from "react-router-dom";
import { IProduct } from "../../../types/ProductTypes";
import { SearchResult, Tag, SearchResultItem } from "./index.styles";

interface SearchResultItemProps {
  product: IProduct;
  clicked?: () => void;
}

export default function index({ product, clicked }: SearchResultItemProps) {
  const { id, title, price, tags, discountedPrice, image } = product;
  return (
    <SearchResult>
      <SearchResultItem as={Link} to={`/product/${id}`} onClick={clicked}>
        <div>
          <img src={image.url} alt={image.alt} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{price}</p>
          <p>{discountedPrice !== price && `Sale: ${discountedPrice}`}</p>
        </div>
      </SearchResultItem>
      <p>
        Found in:{" "}
        {tags.map((tag) => (
          <Tag key={tag}>{tag} </Tag>
        ))}
      </p>
    </SearchResult>
  );
}
