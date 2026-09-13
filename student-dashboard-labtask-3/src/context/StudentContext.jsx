import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {

  // Students
  const [students, setStudents] = useState([]);

  // Search
  const [search, setSearch] = useState("");

  // Sort
  const [sort, setSort] = useState("default");

  // Favorites
  const [favorites, setFavorites] = useState([]);


  // =========================
  // LOAD STUDENTS
  // =========================

  useEffect(() => {

    const savedStudents =
      localStorage.getItem("students");

    if (savedStudents) {

      setStudents(JSON.parse(savedStudents));

    } else {

      const defaultStudents = [
        {
          name: "Zayed Khan",
          id: "231001",
          avatar: "https://i.pravatar.cc/150?img=12",
          gpa: 3.8,
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
          id: "231002",
          avatar: "https://i.pravatar.cc/150?img=11",
          gpa: 3.6,
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
          id: "231003",
          avatar: "https://i.pravatar.cc/150?img=13",
          gpa: 3.9,
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
          id: "231004",
          avatar: "https://i.pravatar.cc/150?img=47",
          gpa: 3.7,
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

      setStudents(defaultStudents);
    }

  }, []);


  // =========================
  // SAVE STUDENTS
  // =========================

  useEffect(() => {

    if (students.length > 0) {

      localStorage.setItem(
        "students",
        JSON.stringify(students)
      );

    }

  }, [students]);


  // =========================
  // ADD STUDENT
  // =========================

  const addStudent = (student) => {

    setStudents((oldStudents) => [
      ...oldStudents,
      student,
    ]);

  };


  // =========================
  // REMOVE STUDENT
  // =========================

  const removeStudent = (id) => {

    setStudents((oldStudents) =>
      oldStudents.filter(
        (student) => student.id !== id
      )
    );

    setFavorites((oldFavorites) =>
      oldFavorites.filter(
        (favoriteId) => favoriteId !== id
      )
    );

  };


  // =========================
  // FAVORITE
  // =========================

  const toggleFavorite = (id) => {

    setFavorites((oldFavorites) => {

      if (oldFavorites.includes(id)) {

        return oldFavorites.filter(
          (favoriteId) => favoriteId !== id
        );

      }

      return [
        ...oldFavorites,
        id,
      ];

    });

  };


  // =========================
  // FILTER
  // =========================

  const filteredStudents = students.filter(
    (student) => {

      const text = search.toLowerCase();

      return (
        student.name
          .toLowerCase()
          .includes(text) ||

        student.major
          .toLowerCase()
          .includes(text)
      );

    }
  );


  // =========================
  // SORT
  // =========================

  const sortedStudents = [
    ...filteredStudents,
  ];

  if (sort === "name") {

    sortedStudents.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

  }

  if (sort === "gpa") {

    sortedStudents.sort(
      (a, b) => b.gpa - a.gpa
    );

  }


  return (
    <StudentContext.Provider
      value={{
        students,
        sortedStudents,

        search,
        setSearch,

        sort,
        setSort,

        favorites,

        toggleFavorite,

        addStudent,
        removeStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}


export function useStudents() {

  return useContext(StudentContext);

}