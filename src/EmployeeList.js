import React, {useState, useEffect} from 'react';
import Employee from './Employee';

const EmployeeList=()=>{
    const[employees, setEmployees]=useState([]);
   
useEffect(()=>{
    fetch('https://localhost:44314/api/Employee/GetEmployees')
    .then((response)=>response.json())
    .then((data)=>setEmployees(data))
    .then((result)=> console.log(result))
    .catch((error)=>console.error('Error : ',error));
},[]);

return (
<div>
    <h2>Employees</h2>
    <ul>
        {employees.map((employee)=>(
            <li key={employee.name}>
                {employee.name} - {employee.salary}
            </li>
        ))}
    </ul>
</div>
);

};

export default EmployeeList