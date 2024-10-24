import { useState } from 'react';

//initializing variables
function FilterableEmployeeTable({ employees }) {
  const [filterText, setFilterText] = useState('');

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        onFilterTextChange={setFilterText} />
      <EmployeeTable 
        employees={employees} 
        filterText={filterText} />
    </div>
  );
}

// displaying employees and their respective departments
function EmployeeRow({ employee }) {
  const name = employee.name ;

  return (
    <tr>
      <td>{name}</td>
      <td>{employee.department}</td>
    </tr>
  );
}

// filtering and displaying the employee table based on the search box filter
function EmployeeTable({ employees, filterText }) {
  const rows = [];

  employees.forEach((employee) => {
    if (
      employee.department.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    rows.push(
      <EmployeeRow
        employee={employee}
        key={employees.department} />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

// creating search bar for filtering
function SearchBar({
  filterText,
  onFilterTextChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
    </form>
  );
}

// initializing values and adding extra values
const Employees = [
  { name: "Tony Stark", department: "IT" },
  { name: "Peter Parker", department: "Pizza Delivery" },
  { name: "Bruce Wayne", department: "IT" },
  { name: "Clark Kent", department: "Editing" },
  { name: "Naruto", department: "Editing" },
  { name: "Harish R", department: "Pizza Delivery" },
  { name: "Arunkumar M", department: "IT" },
  { name: "Bhavesh Kumar B", department: "Editing" },
  { name: "Abhay C Mathen", department: "No Job" },
  { name: "Raghav N", department: "No Job" },
];

// exporting app
export default function App() {
  return <FilterableEmployeeTable employees={Employees} />;
}


// PROS and CONS of both methods

// 1. Search Bar:

/*  Pros: 
        --> Not case sensitive. So "Pizza Delivery" can be searched like "pizza".
        --> Easy to type rather than selecting from drop-down .
        
    Cons:
        --> Not case sensitive. So if you search "it", both "IT" and "Editing" will be displayed.
        --> If too many employees are there, searching for the required employee will be difficult.       
*/

// 2. Drop-Down:

/*  Pros: 
        --> Unique options are displayed which can differentiate each department (Eg: "IT" and "Editing").
        --> Looks more simple and easy to access for the user.
        
    Cons:
        --> If there are too many departments, selecting from the drop-down would become a tedious task rather than search box.
        --> If too many employees are there, searching for the required employee will be difficult (same problem as search box).        
*/