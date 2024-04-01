import { useQuery } from '@tanstack/react-query';
import {useState,useEffect} from 'react';
import {createActivity,readAllActivities,readActivity,updateActivity,restoreActivity,permanentDeleteActivity,deleteActivity} from '../api/activityApi.js'
const ViewActivity = () => {
    const [activities,setActivities]=useState([]);

    const readAllActivitiesQueries = useQuery({
        queryKey: ['AllActivities'],
        queryFn: ()=>readAllActivities(),
        retry:1        
    })

    if(readAllActivitiesQueries.isLoading){
        console.log('Activities have loaded')
    }

    useEffect(()=>{
        if(readAllActivitiesQueries.isSuccess){
            setActivities(readAllActivitiesQueries.data.results)
        }
    },[readAllActivitiesQueries.isSuccess,readAllActivitiesQueries.data])

    console.log('all activites',activities)
    return (
        <>
            asdf
        </>
    )
}

export default ViewActivity;