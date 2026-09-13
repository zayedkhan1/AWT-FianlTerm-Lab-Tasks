import PropTypes from "prop-types";
import { useTheme } from "../context/ThemeContext";
import { useStudents } from "../context/StudentContext";

function DashboardHeader({
  title,
  tagline,
}) {

  const {
    darkMode,
    toggleTheme,
    favorites,
  } = useThemeAndStudents();


  return (
    <header className="dashboard-header">

      <div>

        <h1>{title}</h1>

        <p>{tagline}</p>

      </div>


      <nav>

        <a href="#">Dashboard</a>

        <a href="#">Students</a>

        <a href="#">Courses</a>

        <a href="#">Profile</a>

        <span>
          ⭐ {favorites.length}
        </span>

        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

      </nav>

    </header>
  );
}


function useThemeAndStudents() {

  const {
    darkMode,
    toggleTheme,
  } = useTheme();

  const {
    favorites,
  } = useStudents();

  return {
    darkMode,
    toggleTheme,
    favorites,
  };

}


DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};


export default DashboardHeader;