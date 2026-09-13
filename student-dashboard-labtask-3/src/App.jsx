import { useEffect } from "react";

import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import StatBadge from "./components/StatBadge";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";
import AddStudentForm from "./components/AddStudentForm";

import { useStudents } from "./context/StudentContext";
import { useTheme } from "./context/ThemeContext";

import "./App.css";


function App() {

  const {
    sortedStudents,
    favorites,
  } = useStudents();


  const {
    darkMode,
  } = useTheme();


  // =========================
  // DOCUMENT TITLE
  // =========================

  useEffect(() => {

    document.title =
      `Dashboard — ${sortedStudents.length} Students`;

  }, [sortedStudents.length]);


  return (

    <div
      className={
        darkMode
          ? "app dark"
          : "app"
      }
    >


      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage your academic information"
      />


      <main className="dashboard">


        {/* Welcome */}

        <section className="welcome-section">

          <h2>
            Welcome, Student!
          </h2>

          <p>
            Here is your academic dashboard.
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
            value={favorites.length}
          />

          <StatBadge
            label="Courses"
            value={6}
          />

        </section>


        {/* Add Student */}

        <AddStudentForm />


        {/* Search */}

        <SearchBar />


        {/* Sort */}

        <SortControls />


        {/* Students */}

        <section className="students-section">

          <div className="section-heading">

            <h2>
              Students
            </h2>

            <p>
              {sortedStudents.length}
              {" "}
              student(s) found
            </p>

          </div>


          <div className="student-grid">

            {sortedStudents.map(
              (student) => (

                <StudentCard
                  key={student.id}

                  name={student.name}
                  id={student.id}
                  avatar={student.avatar}
                  gpa={student.gpa}
                  major={student.major}
                  courses={student.courses}
                />

              )
            )}

          </div>

        </section>


      </main>

    </div>
  );
}


export default App;