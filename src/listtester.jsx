import React, { Component } from "react";

class ListTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [0, 1, 2, 3, 4],
      arr_object: {
        title: "Project 1",
        Description: "Need an andorid project",
        due_date: new Date("April 13, 2021 10:00:00"),
      },
      arr_withObjects: [
        {
          title: "Project 1",
          Description: "Need an andorid project",
          due_date: new Date("April 13, 2021 10:00:00"),
        },
        {
          title: "Project 2",
          Description: "Need a web project",
          due_date: new Date("April 13, 2021 10:00:00"),
        },
      ],
    };
  }
  
  render() {
    return (
      <Multiple_Projects
        projects={this.state.arr_withObjects}
        temp={0}
      ></Multiple_Projects>
    );
  }

  doubleElement() {
    let arr2 = [];
    for (let j = 0; j < this.state.arr.length; j++) {
      arr2[j] = this.state.arr[j] + this.state.arr[j];
    }
    this.setState({ arr: arr2 });
    console.log(this.state.arr.length);
  }

  doubleElement_map() {
    let arr2 = [];

    arr2 = this.state.arr.map((element) => element + element);

    this.setState({ arr: arr2 });
  }
}

function Project_Details(props) {
  let proj = props.project;
  let proj_details = (
    <div>
      <p>{proj.title}</p>
      <p>{proj.Description}</p>
      <div>{proj.due_date.toLocaleDateString()}</div>
    </div>
  );
  return proj_details;
}

function Multiple_Projects(params) {
  let projs = params.projects;
  let temp2 = params.temp;

  let list_items = projs.map((proj) => (
    <li key={proj.title}>
      <div>
        <p>{proj.title}</p>
        <p>{proj.Description}</p>
        <div>{proj.due_date.toLocaleDateString()}</div>
      </div>
    </li>
  ));
  console.log(list_items);
  return <ul>{list_items}</ul>;
}
export default ListTester;
