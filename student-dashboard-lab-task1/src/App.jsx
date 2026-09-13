import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import StatBadge from "./components/StatBadge";
import "./App.css";

function App() {
  const students = [
    {
      name: "Zayed Khan",
      id: "23-XXXXX",
      avatar: "https://i.pravatar.cc/150?img=12",
      gpa: "3.80",
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
      gpa: "3.60",
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
      gpa: "3.90",
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
      gpa: "3.70",
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

  return (
    <div className="app">

      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage your academic information in one place"
      />

      <main className="dashboard">

        <section className="welcome-section">
          <h2>Welcome, Student!</h2>
          <p>
            Here is an overview of your academic information.
          </p>
        </section>

        <section className="stats-section">

          <StatBadge
            label="GPA"
            value="3.85"
          />

          <StatBadge
            label="Credits"
            value={90}
          />

          <StatBadge
            label="Courses"
            value={6}
          />

        </section>

        <section className="students-section">

          <div className="section-heading">
            <h2>Students</h2>
            <p>Currently enrolled students</p>
          </div>

          <div className="student-grid">

            {students.map((student) => (
              <StudentCard
                key={student.id}
                name={student.name}
                id={student.id}
                avatar={student.avatar}
                gpa={student.gpa}
                major={student.major}
                courses={student.courses}
              />
            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;