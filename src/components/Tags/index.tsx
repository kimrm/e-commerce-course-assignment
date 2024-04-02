import { ProductTags } from "./index.styles";
import { Link } from "react-router-dom";

interface Props {
  tags: string[];
}

export default function Tags({ tags }: Props) {
  return (
    <ProductTags>
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        {tags.map((tag: string) => (
          <li key={tag}>
            <Link to={"/" + tag}>{tag}</Link>
          </li>
        ))}
      </ul>
    </ProductTags>
  );
}
