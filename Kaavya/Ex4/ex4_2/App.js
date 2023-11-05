import { useState } from 'react';

//initializing variables
function FilterableEmployeeTable({ employees }) {
  const [filterText, setFilterText] = useState('');

  return (
    <div>
      <DropDown 
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

// filtering and displaying the employee table based on the drop-down filter
function EmployeeTable({ employees, filterText }) {
  const filteredEmployees = filterText ? employees.filter((employee) => employee.department === filterText) : employees;

  const rows = filteredEmployees.map((employee) => (
    <EmployeeRow employee={employee} key={employee.name} />
  ));

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

// creating drop-down with options
function DropDown({ filterText,onFilterTextChange}) {

  const departmentOptions = ['IT', 'Pizza Delivery', 'Editing', 'No Job'];

  return (
    <form>
      <label htmlFor="department">Department:</label>
      <select
        id="department"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      >
        <option value="">All Departments</option>
        {departmentOptions.map((department) => (
          <option value={department} key={department}>
            {department}
          </option>
        ))}
      </select>
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
