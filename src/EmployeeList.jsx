import Employee from "./Employee";
import { useState } from "react";
import "./style.css";

function EmployeeList() {
  let [employeeData, setEmployeeData] = useState([
    {
      name: "Yazeen Jasim",
      email: "test@gmail.com",
      phone: "070000000",
      skills: "React, Javascript, C++, Python, GCP",
      avatar: "https://i.imgur.com/t9HFQvX.png",
    },
    {
      name: "Geralt Of Rivia",
      email: "test@gmail.com",
      phone: "070000000",
      skills: "Angular, CSS, HTML, Javascript",
      avatar: "https://i.imgur.com/Q9qFt3m.png",
    },
    {
      name: "Yennefer Of Vengerberg",
      email: "test@gmail.com",
      phone: "070000000",
      skills: "Go, Python, Nodejs",
      avatar: "https://i.imgur.com/ebHfuth.png",
    },
  ]);

  function addEmployee() {
    setEmployeeData(function (oldState) {
      return [
        ...oldState,
        {
          name: "Triss Merigold",
          email: "test@gmail.com",
          phone: "070000000",
          skills: "none",
          avatar: "https://i.imgur.com/TUhCrsY.png",
        },
      ];
    });
  }

  return (
    <>
      <h1>Employee List</h1>
      <button onClick={addEmployee}>Add Employee</button>
      <div>
        {employeeData.map(function (employee) {
          return (
            <Employee
              key={employee.title}
              name={employee.name}
              email={employee.email}
              phone={employee.phone}
              skills={employee.skills}
              avatar={employee.avatar}
            />
          );
        })}
      </div>
    </>
  );
}

export default EmployeeList;
