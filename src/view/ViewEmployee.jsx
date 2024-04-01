import { useQuery } from '@tanstack/react-query';
import { readAllEmployees, readEmployee, createEmployee, updateEmployee, deleteEmployee, restoreEmployee, permanentDeleteEmployee } from '../api/employeeApi';
import {useEffect,useState} from 'react';

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

    console.log('read', employeesData)
    return (
        <>
            asdf
        </>
    )
}

export default ViewEmployee;