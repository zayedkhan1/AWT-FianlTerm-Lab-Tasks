import PropTypes from "prop-types";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-box">

      <input
        type="text"
        placeholder="Search by name or major..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default SearchBar;