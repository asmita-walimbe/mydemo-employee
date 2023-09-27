import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';


function App() {

  const [successMessage, setSuccessMessage] = useState('');
  const addEmployee =(employee)=>{

  fetch('https://localhost:44314/api/Employee/InsertEmployee',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(employee),
  })
  .then((response) => {
    const newRes=response.text();
    setSuccessMessage(newRes);
    setTimeout(()=> {
      setSuccessMessage('')
    },5000)
    return newRes;
 })
  .then((data)=>{
    console.log('Newly added Employee: ', data);
  })
.catch((error)=>console.error('Error while adding employee:', error));
};


  return (
    <div className="App">
     <h1>Employee Management</h1>
        <EmployeeList />
        <EmployeeForm addEmployee= {addEmployee}/>
        <h1>{successMessage}</h1>
    </div>
  );
}

export default App;
