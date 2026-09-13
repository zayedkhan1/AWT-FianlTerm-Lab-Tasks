import { useEffect, useState } from "react";

import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import StatBadge from "./components/StatBadge";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";

import "./App.css";


function App() {

  // =========================
  // STATE
  // =========================

  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("default");

  const [favoriteCount, setFavoriteCount] = useState(0);


  // =========================
  // SIMULATED API FETCH
  // =========================

  useEffect(() => {

    const studentData = [
      {
        name: "Zayed Khan",
        id: "23-XXXXX",
        avatar: "https://i.pravatar.cc/150?img=12",
        gpa: 3.80,
        major: "Computer Science",
        courses: [
          {
            name: "React",
            color: "#dbeafe",
          },
          {
            name: "DBMS",
            color: "#dcfce7",
          },
        ],
      },

      {
        name: "Rahim Ahmed",
        id: "23-10001",
        avatar: "https://i.pravatar.cc/150?img=11",
        gpa: 3.60,
        major: "Software Engineering",
        courses: [
          {
            name: "Java",
            color: "#fef3c7",
          },
          {
            name: "DSA",
            color: "#fce7f3",
          },
        ],
      },

      {
        name: "Karim Hasan",
        id: "23-10002",
        avatar: "https://i.pravatar.cc/150?img=13",
        gpa: 3.90,
        major: "Computer Science",
        courses: [
          {
            name: "React",
            color: "#dbeafe",
          },
          {
            name: "AI",
            color: "#ede9fe",
          },
        ],
      },

      {
        name: "Nusrat Jahan",
        id: "23-10003",
        avatar: "https://i.pravatar.cc/150?img=47",
        gpa: 3.70,
        major: "Computer Science",
        courses: [
          {
            name: "Python",
            color: "#fef3c7",
          },
          {
            name: "Machine Learning",
            color: "#dcfce7",
          },
        ],
      },
    ];


    // Wait 1.5 seconds
    const timer = setTimeout(() => {

      setStudents(studentData);

      setLoading(false);

    }, 1500);


    // Cleanup
    return () => {
      clearTimeout(timer);
    };

  }, []);


  // =========================
  // FAVORITE HANDLER
  // =========================

  const handleFavoriteChange = (isFavorite) => {

    if (isFavorite) {

      setFavoriteCount((count) => count + 1);

    } else {

      setFavoriteCount((count) => count - 1);

    }

  };


  // =========================
  // FILTER STUDENTS
  // =========================

  const filteredStudents = students.filter((student) => {

    const searchText = search.toLowerCase();

    return (
      student.name.toLowerCase().includes(searchText) ||
      student.major.toLowerCase().includes(searchText)
    );

  });


  // =========================
  // SORT STUDENTS
  // =========================

  const sortedStudents = [...filteredStudents];

  if (sort === "name") {

    sortedStudents.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

  }

  if (sort === "gpa") {

    sortedStudents.sort((a, b) =>
      b.gpa - a.gpa
    );

  }


  // =========================
  // DOCUMENT TITLE
  // =========================

  useEffect(() => {

    document.title =
      `Dashboard — ${sortedStudents.length} Students`;

  }, [sortedStudents.length]);


  // =========================
  // UI
  // =========================

  return (
    <div className="app">

      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage your academic information"
        favoriteCount={favoriteCount}
      />


      <main className="dashboard">

        {/* Welcome */}

        <section className="welcome-section">

          <h2>Welcome, Student!</h2>

          <p>
            Here is an overview of your academic information.
          </p>

        </section>


        {/* Statistics */}

        <section className="stats-section">

          <StatBadge
            label="Students"
            value={sortedStudents.length}
          />

          <StatBadge
            label="Favorites"
            value={favoriteCount}
          />

          <StatBadge
            label="Courses"
            value={6}
          />

        </section>


        {/* Search */}

        <SearchBar
          search={search}
          setSearch={setSearch}
        />


        {/* Sort */}

        <SortControls
          sort={sort}
          setSort={setSort}
        />


        {/* Students */}

        <section className="students-section">

          <div className="section-heading">

            <h2>Students</h2>

            <p>
              {sortedStudents.length} student(s) found
            </p>

          </div>


          {/* Loading */}

          {loading ? (

            <div className="loading">
              <div className="spinner"></div>
              <p>Loading students...</p>
            </div>

          ) : sortedStudents.length === 0 ? (

            <p className="no-results">
              No students found.
            </p>

          ) : (

            <div className="student-grid">

              {sortedStudents.map((student) => (

                <StudentCard
                  key={student.id}

                  name={student.name}
                  id={student.id}
                  avatar={student.avatar}
                  gpa={student.gpa}
                  major={student.major}
                  courses={student.courses}

                  onFavoriteChange={
                    handleFavoriteChange
                  }
                />

              ))}

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default App;