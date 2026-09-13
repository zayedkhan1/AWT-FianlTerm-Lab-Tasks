import PropTypes from "prop-types";
import CourseTag from "./CourseTag";

function StudentCard({ name, id, avatar, gpa, major, courses }) {
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

        <div className="student-gpa">
          GPA: <strong>{gpa}</strong>
        </div>

        <div className="courses">
          {courses.map((course, index) => (
            <CourseTag
              key={index}
              courseName={course.name}
              color={course.color}
            />
          ))}
        </div>

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