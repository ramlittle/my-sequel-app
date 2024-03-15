import { useQuery } from '@tanstack/react-query';
import { readAllEmployees, readEmployee, createEmployee, updateEmployee, deleteEmployee, restoreEmployee, permanentDeleteEmployee } from '../api/employeeApi';
import {useEffect,useState} from 'react';

const ViewEmployee = () => {
  
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
            setEmployeesData(readAllEmployeesQuery.data);
        }
    },[readAllEmployeesQuery.isSuccess,readAllEmployeesQuery.data])

    const [employeesData,setEmployeesData]=useState([]);

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
            
        </>
    )
}

export default ViewEmployee;