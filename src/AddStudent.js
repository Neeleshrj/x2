import React, { Component } from "react";

class AddStudent extends Component {
  state = {
    name: null,
    age: null,
    Grade: null,
  };

  inputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addStudent(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.inputChange} />
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" onChange={this.inputChange} />
          <label htmlFor="Grade">Grade:</label>
          <input type="text" id="Grade" onChange={this.inputChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
