import PropTypes from "prop-types";

function DashboardHeader({
  title,
  tagline,
  favoriteCount,
}) {

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
          ⭐ {favoriteCount}
        </span>

      </nav>

    </header>
  );
}


DashboardHeader.propTypes = {

  title: PropTypes.string.isRequired,

  tagline: PropTypes.string.isRequired,

  favoriteCount: PropTypes.number.isRequired,

};


export default DashboardHeader;