import { useState } from "react";
import PropTypes from "prop-types";
import CourseTag from "./CourseTag";

function StudentCard({
  name,
  id,
  avatar,
  gpa,
  major,
  courses,
  onFavoriteChange,
}) {

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    const newFavoriteStatus = !isFavorite;

    setIsFavorite(newFavoriteStatus);

    onFavoriteChange(newFavoriteStatus);
  };

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
          onClick={handleFavorite}
        >
          {isFavorite ? "★ Favorite" : "☆ Favorite"}
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

  onFavoriteChange: PropTypes.func.isRequired,
};

export default StudentCard;