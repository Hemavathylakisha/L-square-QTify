import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search an album of your choice"
        className={styles.searchInput}
      />
      <SearchIcon className={styles.searchIcon} sx={{position:"absolute",right:"0px"}} />
    </div>
  );
};

export default Search;