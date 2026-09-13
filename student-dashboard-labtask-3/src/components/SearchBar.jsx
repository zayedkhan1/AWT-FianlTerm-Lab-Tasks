import { useStudents } from "../context/StudentContext";


function SearchBar() {

  const {
    search,
    setSearch,
  } = useStudents();


  return (
    <div className="search-box">

      <input
        type="text"
        placeholder="Search by name or major..."
        value={search}

        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

    </div>
  );
}


export default SearchBar;