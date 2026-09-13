import PropTypes from "prop-types";

import CourseTag from "./CourseTag";

import { useStudents } from "../context/StudentContext";


function StudentCard({
  name,
  id,
  avatar,
  gpa,
  major,
  courses,
}) {

  const {
    favorites,
    toggleFavorite,
    removeStudent,
  } = useStudents();


  const isFavorite =
    favorites.includes(id);


  return (
    <div className="student-card">

      <img
        src={avatar}
        alt={name}
        className="student-avatar"
      />


      <div className="student-info">

        <h3>{name}</h3>

        <p className="student-id">
          Student ID: {id}
        </p>

        <p>
          <strong>Major:</strong> {major}
        </p>

        <p>
          <strong>GPA:</strong> {gpa}
        </p>


        <div className="courses">

          {courses.map((course, index) => (

            <CourseTag
              key={index}
              courseName={course.name}
              color={course.color}
            />

          ))}

        </div>


        <button
          className={
            isFavorite
              ? "favorite-button favorite"
              : "favorite-button"
          }

          onClick={() =>
            toggleFavorite(id)
          }
        >
          {isFavorite
            ? "★ Favorite"
            : "☆ Favorite"}
        </button>


        <button
          className="remove-button"
          onClick={() =>
            removeStudent(id)
          }
        >
          Remove Student
        </button>

      </div>

    </div>
  );
}


StudentCard.propTypes = {

  name: PropTypes.string.isRequired,

  id: PropTypes.string.isRequired,

  avatar: PropTypes.string.isRequired,

  gpa: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

  major: PropTypes.string.isRequired,

  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,

};


export default StudentCard;