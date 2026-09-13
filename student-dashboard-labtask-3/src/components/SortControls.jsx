import { useStudents } from "../context/StudentContext";


function SortControls() {

  const {
    sort,
    setSort,
  } = useStudents();


  return (
    <div className="sort-controls">

      <button
        onClick={() =>
          setSort("default")
        }

        className={
          sort === "default"
            ? "active-sort"
            : ""
        }
      >
        Default
      </button>


      <button
        onClick={() =>
          setSort("name")
        }

        className={
          sort === "name"
            ? "active-sort"
            : ""
        }
      >
        Name A-Z
      </button>


      <button
        onClick={() =>
          setSort("gpa")
        }

        className={
          sort === "gpa"
            ? "active-sort"
            : ""
        }
      >
        GPA High-Low
      </button>

    </div>
  );
}


export default SortControls;