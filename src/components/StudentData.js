import React, { Component } from "react";
import AddStudent from "../AddStudent";
import Students from "../Students";

class StudentData extends Component {
  state = {
    students: [
      // { name: "Ryu", age: 30, Grade: "A", id: 1 },
      // { name: "Yoshi", age: 20, Grade: "A", id: 2 },
      // { name: "Crystal", age: 25, Grade: "B", id: 3 },
      // { name: null, age: null, Grade: null, id: null },
    ],
  };

  addStudent = (student) => {
    student.id = Math.random();
    let newStudents = [...this.state.students, student];
    this.setState({
      students: newStudents,
    });
  };

  deleteStudent = (id) => {
    //console.log(id);
    let newStudents = this.state.students.filter((student) => {
      return student.id !== id;
    });
    this.setState({
      students: newStudents,
    });
  };

  render() {
    return (
      <div className="StudentData">
        <h4 className="center">Welcome Students!</h4>
        <Students
          deleteStudent={this.deleteStudent}
          students={this.state.students}
        />
        <AddStudent addStudent={this.addStudent} />
      </div>
    );
  }
}

export default StudentData;
