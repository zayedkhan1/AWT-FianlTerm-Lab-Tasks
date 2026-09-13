import PropTypes from "prop-types";

function SortControls({ sort, setSort }) {

  return (
    <div className="sort-controls">

      <button
        onClick={() => setSort("default")}
        className={sort === "default" ? "active-sort" : ""}
      >
        Default
      </button>

      <button
        onClick={() => setSort("name")}
        className={sort === "name" ? "active-sort" : ""}
      >
        Name A-Z
      </button>

      <button
        onClick={() => setSort("gpa")}
        className={sort === "gpa" ? "active-sort" : ""}
      >
        GPA High-Low
      </button>

    </div>
  );
}

SortControls.propTypes = {
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default SortControls;