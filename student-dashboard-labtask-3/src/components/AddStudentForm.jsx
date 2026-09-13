import { useEffect, useState } from "react";

import { useStudents } from "../context/StudentContext";


function AddStudentForm() {

  const {
    students,
    addStudent,
  } = useStudents();


  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [major, setMajor] = useState("");
  const [gpa, setGpa] = useState("");
  const [courses, setCourses] = useState("");

  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState("");


  // =========================
  // VALIDATION
  // =========================

  const validate = () => {

    const newErrors = {};


    // Name
    if (!name.trim()) {

      newErrors.name =
        "Name is required.";

    }


    // ID
    if (!id.trim()) {

      newErrors.id =
        "Student ID is required.";

    } else if (!/^\d+$/.test(id)) {

      newErrors.id =
        "Student ID must contain only numbers.";

    } else if (
      students.some(
        (student) => student.id === id
      )
    ) {

      newErrors.id =
        "Student ID already exists.";

    }


    // Major
    if (!major.trim()) {

      newErrors.major =
        "Major is required.";

    }


    // GPA
    if (gpa === "") {

      newErrors.gpa =
        "GPA is required.";

    } else if (
      Number(gpa) < 0 ||
      Number(gpa) > 4
    ) {

      newErrors.gpa =
        "GPA must be between 0 and 4.";

    }


    return newErrors;
  };


  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = (e) => {

    e.preventDefault();


    const newErrors = validate();

    setErrors(newErrors);


    if (Object.keys(newErrors).length > 0) {
      return;
    }


    const courseList =
      courses
        .split(",")
        .map((course) => course.trim())
        .filter((course) => course !== "");


    const newStudent = {

      name: name.trim(),

      id: id.trim(),

      avatar:
        "https://i.pravatar.cc/150?img=50",

      gpa: Number(gpa),

      major: major.trim(),

      courses: courseList.map(
        (course) => ({
          name: course,
          color: "#dbeafe",
        })
      ),

    };


    addStudent(newStudent);


    // Reset form
    setName("");
    setId("");
    setMajor("");
    setGpa("");
    setCourses("");

    setErrors({});

    setSuccess("Student added successfully!");

  };


  // =========================
  // SUCCESS MESSAGE
  // =========================

  useEffect(() => {

    if (!success) {
      return;
    }


    const timer = setTimeout(() => {

      setSuccess("");

    }, 3000);


    return () => {

      clearTimeout(timer);

    };

  }, [success]);


  return (
    <section className="add-student">

      <h2>Add New Student</h2>


      {success && (
        <div className="success-message">
          {success}
        </div>
      )}


      <form onSubmit={handleSubmit}>


        {/* Name */}

        <div className="form-group">

          <label>
            Full Name
          </label>

          <input
            type="text"
            value={name}

            onChange={(e) =>
              setName(e.target.value)
            }

            placeholder="Enter full name"
          />

          {errors.name && (
            <p className="error">
              {errors.name}
            </p>
          )}

        </div>


        {/* ID */}

        <div className="form-group">

          <label>
            Student ID
          </label>

          <input
            type="text"
            value={id}

            onChange={(e) =>
              setId(e.target.value)
            }

            placeholder="Example: 231005"
          />

          {errors.id && (
            <p className="error">
              {errors.id}
            </p>
          )}

        </div>


        {/* Major */}

        <div className="form-group">

          <label>
            Major
          </label>

          <input
            type="text"
            value={major}

            onChange={(e) =>
              setMajor(e.target.value)
            }

            placeholder="Example: Computer Science"
          />

          {errors.major && (
            <p className="error">
              {errors.major}
            </p>
          )}

        </div>


        {/* GPA */}

        <div className="form-group">

          <label>
            GPA
          </label>

          <input
            type="number"
            step="0.01"
            value={gpa}

            onChange={(e) =>
              setGpa(e.target.value)
            }

            placeholder="0 - 4"
          />

          {errors.gpa && (
            <p className="error">
              {errors.gpa}
            </p>
          )}

        </div>


        {/* Courses */}

        <div className="form-group">

          <label>
            Courses
          </label>

          <input
            type="text"
            value={courses}

            onChange={(e) =>
              setCourses(e.target.value)
            }

            placeholder="React, DBMS, DSA"
          />

        </div>


        <button
          type="submit"
          className="add-button"
        >
          Add Student
        </button>


      </form>

    </section>
  );
}


export default AddStudentForm;