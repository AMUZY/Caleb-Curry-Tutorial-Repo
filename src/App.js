import "./input.css";
import Employee from "./components/Employee";
//import EditEmployee from "./components/EditEmployee";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
  const [Employees, setEmployees] = useState([
    {
      name: "Ifeoma",
      role: "Employee",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Susan",
      role: "Intern",
      image:
        "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "John",
      role: "Agba Dev",
      image:
        "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Debby",
      role: "UI/UX Designer",
      image:
        "https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Fidel",
      role: "Front end Web Dev",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Esther",
      role: "Back End Web Dev",
      image:
        "https://images.pexels.com/photos/2755165/pexels-photo-2755165.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]);

  return (
    <div className="App">
      <>
        <div class="flex flex-wrap justify-center">
          {Employees.map((employee) => {
            return(
            <Employee
              key={uuidv4()}
              name={employee.name}
              role={employee.role}
              image={employee.image}
            />
            );
          })}
        </div>
      </>
    </div>
  );
}

export default App;
