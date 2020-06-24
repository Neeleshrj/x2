import React from "react";

const Students = ({ students, deleteStudent }) => {
  //   const studentList = students.map((student) => {
  //     if (student.age > 20) {
  //       return (
  //         <div className="student" key={student.id}>
  //           <div>Name: {student.name}</div>
  //           <div>Age: {student.age}</div>
  //           <div>Grade: {student.Grade}</div>
  //         </div>
  //       );
  //     } else {
  //       return null;
  //     }
  //   });

  return (
    <div className="student-list">
      {students.map((student) => {
        return (
          <div className="student" key={student.id}>
            <div>Name: {student.name}</div>
            <div>Age: {student.age}</div>
            <div>Grade: {student.Grade}</div>
            <button
              onClick={() => {
                deleteStudent(student.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Students;
