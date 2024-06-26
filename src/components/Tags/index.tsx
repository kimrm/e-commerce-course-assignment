import { useEffect, useState } from "react";
import { Container, ProductTagSelect, ProductTags } from "./index.styles";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  tags: string[];
  selectedTag?: string;
}

export default function Tags({ tags, selectedTag }: Props) {
  const [activeTag, setActiveTag] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    setActiveTag(selectedTag ?? "");
  }, [selectedTag]);

  function handleTagClicked(e: React.MouseEvent<HTMLAnchorElement>) {
    setActiveTag(e.currentTarget.title);
  }

  function handleTagSelected(e: React.ChangeEvent<HTMLSelectElement>) {
    setActiveTag(e.currentTarget.value);
    navigate("/" + e.currentTarget.value);
  }

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Container>
      <h2>Product categories</h2>
      <ProductTagSelect>
        <select
          name="tag-select"
          id="tag-select"
          value={selectedTag}
          onChange={handleTagSelected}
        >
          <option value="">All</option>
          {tags.map((tag: string) => (
            <option key={tag} value={tag}>
              {capitalize(tag)}
            </option>
          ))}
        </select>
      </ProductTagSelect>
      <ProductTags>
        <ul>
          <li className={activeTag === "" ? "active" : ""}>
            <Link to="/" title="all">
              All
            </Link>
          </li>
          {tags.map((tag: string) => (
            <li key={tag} className={tag === activeTag ? "active" : ""}>
              <Link title={tag} to={"/" + tag} onClick={handleTagClicked}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </ProductTags>
    </Container>
  );
}
