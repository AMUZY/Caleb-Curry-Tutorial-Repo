import "./input.css";
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";
//import EditEmployee from "./components/EditEmployee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditEmployee from "./components/EditEmployee";

function App() {
  const [Employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ifeoma",
      role: "Employee",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Susan",
      role: "Intern",
      image:
        "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "John",
      role: "Agba Dev",
      image:
        "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      name: "Debby",
      role: "UI/UX Designer",
      image:
        "https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      name: "Fidel",
      role: "Front end Web Dev",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      name: "Esther",
      role: "Back End Web Dev",
      image:
        "https://images.pexels.com/photos/2755165/pexels-photo-2755165.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]);

  function updateEmployee(id, newName, newRole, newImage) {
    const updatedEmployees = Employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole, image: newImage };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function Add(name, role, image) {
    let newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      image: image,
    };
    setEmployees([...Employees, newEmployee]);
  }

  return (
    <div className="App">
      <div className="flex flex-wrap justify-center">
        {Employees.map((employee) => {
          const editemployee = (
            <EditEmployee
              id={employee.id}
              name={employee.name}
              role={employee.role}
              image={employee.image}
              updateEmployee={updateEmployee}
            />
          );
          return (
            <Employee
              key={uuidv4}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              image={employee.image}
              editemployee={editemployee}
            />
          );
        })}
      </div>
      <AddEmployee Add={Add} />
    </div>
  );
}

export default App;
