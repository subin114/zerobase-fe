import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import styles from "./SearchForm.module.scss";
import SearchIcon from "../../../assets/icons/search.svg?react";

export interface SearchFormProps {
  onCloseMenu?: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onCloseMenu }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (query) {
      setSearchParams({ q: query });
      navigate(`/search/?q=${query}`);
    } else {
      setSearchParams({});
      navigate(`/search`);
    }

    setQuery("");
    if (onCloseMenu) onCloseMenu();
  };

  return (
    <form className={styles.SearchForm} onSubmit={handleSearch}>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="search" />
      <SearchIcon className={styles.icon} />
    </form>
  );
};

export default SearchForm;
