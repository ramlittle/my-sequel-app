import {rootApi} from './rootApi';

const readAllEmployees=async()=>{
    const response = await rootApi.get('/employee/');
    return response.data;
}

const readEmployee=async(employee_id)=>{
    const response = await rootApi.get(`/employee/${employee_id}`);
    return response.data;
}

const createEmployee = async(data)=>{
    const response = await rootApi.post('/employee/create',data);
    return response.data;
}

const updateEmployee=async(data)=>{
    const response = await rootApi.put(`/employee/update/${data.employee_id}`,data);
    return response.data;
}

const deleteEmployee=async(employee_id)=>{
    const response = await rootApi.delete(`/employee/delete/${employee_id}`);
    return response.data;
}

const restoreEmployee=async(employee_id)=>{
    const response = await rootApi.delete(`/employee/restore/${employee_id}`);
    return response.data;
}

const permanentDeleteEmployee=async(employee_id)=>{
    const response = await rootApi.put(`/employee/perma/delete/${employee_id}`);
    return response.data;
}

export {
    readAllEmployees,
    readEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    restoreEmployee,
    permanentDeleteEmployee
}