import { useQuery } from '@tanstack/react-query';
import { readAllEmployees, readEmployee, createEmployee, updateEmployee, deleteEmployee, restoreEmployee, permanentDeleteEmployee } from '../api/employeeApi';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
const ViewEmployee = () => {
    const [employeesData,setEmployeesData]=useState([]);

    const readAllEmployeesQuery = useQuery({
        queryKey: ['AllEmployees'],
        queryFn: ()=>readAllEmployees(),
        retry:1        
    })

    if(readAllEmployeesQuery.isLoading){
        console.log("Loading all Employees...")
    }

    useEffect(()=>{
        if(readAllEmployeesQuery.isSuccess){
            setEmployeesData(readAllEmployeesQuery.data.results);
        }
    },[readAllEmployeesQuery.isSuccess,readAllEmployeesQuery.data])

    

    // Read one data
    async function handleReadEmployee(employeeId){
        const response = await readEmployee(employeeId);
        readAllEmployeesQuery.refetch();
    }

    async function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <>
            <h2>Employees</h2>
            <table>
                <thead>
                    <tr>
                        <th>Emp Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeesData.map((obj,index)=>(
                            <tr key={index+1}>
                                <td>{obj.employee_id}</td>
                                <td>{obj.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to ="/">Back</Link>
        </>
    )
}

export default ViewEmployee;