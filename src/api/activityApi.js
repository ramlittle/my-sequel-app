import {rootApi} from './rootApi';

const readAllActivities=async()=>{
    const response = await rootApi.get('/activity/');
    return response.data;
}

const readActivity=async(activity_id)=>{
    const response = await rootApi.get(`/activity/${activity_id}`);
    return response.data;
}
const readActivityByEmployeeId=async(employee_id)=>{
    const response = await rootApi.get(`/activity/employee/${employee_id}`);
    return response.data;
}

const createActivity = async(data)=>{
    const response = await rootApi.post('/activity/create',data);
    return response.data;
}

const updateActivity=async(data)=>{
    const response = await rootApi.put(`/activity/update/${data.activity_id}`,data);
    return response.data;
}

const deleteActivity=async(activity_id)=>{
    const response = await rootApi.delete(`/activity/delete/${activity_id}`);
    return response.data;
}

const restoreActivity=async(activity_id)=>{
    const response = await rootApi.delete(`/activity/restore/${activity_id}`);
    return response.data;
}

const permanentDeleteActivity=async(activity_id)=>{
    const response = await rootApi.delete(`/activity/perma/delete/${activity_id}`);
    return response.data;
}

const readAllDeletedActivities=async()=>{
    const response = await rootApi.get('/activity/deleted/activities');
    return response.data;
}

export {
    readAllActivities,
    readActivity,
    createActivity,
    updateActivity,
    deleteActivity,
    restoreActivity,
    permanentDeleteActivity,
    readActivityByEmployeeId,
    readAllDeletedActivities
}