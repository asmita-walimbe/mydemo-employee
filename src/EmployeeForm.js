
import React, {useState} from 'react';
import Employee from './Employee';


const EmployeeForm = ({ addEmployee})=>{
    const[newEmployee, setNewEmployee]= useState(new Employee("",""))
   
    

const handleInputChange = (event) =>{
    const{name, value} = event.target;
    setNewEmployee({ ...newEmployee,[name]: value});
};

const handleSubmit=(event)=>{
  event.preventDefault();
  addEmployee(newEmployee);
  setNewEmployee(new Employee('',''));
};

return(
    <div>
        <h2> Employee Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name"> Name</label>
                <input type="text"
                id="name"
                name="name"
                value={newEmployee.name}
                onChange={handleInputChange}>
                </input>
            </div>

            <div>
                <label htmlFor="salary"> Salary</label>
                <input type="text"
                id="salary"
                name="salary"
                value={newEmployee.salary}
                onChange={handleInputChange}>
                </input>
            </div>

            <button type="submit"> Add Employee </button>

        </form>
    </div>
);
};

export default EmployeeForm;