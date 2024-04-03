import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditActivity from '../edit/EditActivity.jsx'
import { createActivity, readAllActivities, readActivity, updateActivity, restoreActivity, permanentDeleteActivity, deleteActivity, readAllDeletedActivities } from '../api/activityApi.js'
const ViewActivity = () => {
    //OBTAIN DEFAULTS/QUERIES
    const [activities, setActivities] = useState([]);
    const [deletedActivities, setDeletedActivities] = useState([]);
    const [showEditActivity, setShowEditActivity] = useState(false)
    const [activityToEdit,setActivityToEdit]=useState({});

    const readAllActivitiesQueries = useQuery({
        queryKey: ['AllActivities'],
        queryFn: () => readAllActivities(),
        retry: 1
    })

    if (readAllActivitiesQueries.isLoading) {
        console.log('Activities have loaded')
    }

    useEffect(() => {
        if (readAllActivitiesQueries.isSuccess) {
            setActivities(readAllActivitiesQueries.data.results)
        }
    }, [readAllActivitiesQueries.isSuccess, readAllActivitiesQueries.data])

    const readAllDeletedActivityQueries = useQuery({
        queryKey: ['AllDeletedQueries'],
        queryFn: () => readAllDeletedActivities(),
        retry: 1
    })

    if (readAllDeletedActivityQueries.isLoading) {
        console.log('Activities have loaded')
    }

    useEffect(() => {
        if (readAllDeletedActivityQueries.isSuccess) {
            setDeletedActivities(readAllDeletedActivityQueries.data.results)
        }
    }, [readAllDeletedActivityQueries.isSuccess, readAllDeletedActivityQueries.data])


    //USUAL FLOW
    const [enteredActivity, setEnteredActivity] = useState('');

    async function addActivity() {
        const activityToSave = { activity: enteredActivity, employee_id: 1 }
        alert(JSON.stringify(activityToSave) + "data saved!")
        const response = await createActivity(activityToSave);
        setEnteredActivity('');
        await readAllActivitiesQueries.refetch();
    }

    function onDelete(activityId) {
        const confirmBox = window.confirm("You really want to delete?");
        if (confirmBox) {
            const response = permanentDeleteActivity(activityId);
            readAllActivitiesQueries.refetch();
        }
    }

    function onEdit(activity){        
        setShowEditActivity(true)
        setActivityToEdit(activity)
    }

    function hideEditActivity(){
        setShowEditActivity(false);
        readAllActivitiesQueries.refetch();
    }
    return (
        <>
            <h2>Activity</h2>
            {
                showEditActivity &&
                <EditActivity 
                    activityToEdit={activityToEdit}
                    hideEditActivity={hideEditActivity}
                />
            }
            <div>
                <input
                    type="text"
                    placeholder="enter activity"
                    value={enteredActivity}
                    onChange={(e) => setEnteredActivity(e.target.value)}
                />

                <button onClick={addActivity}>Save</button>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Act Id</th>
                            <th>Activity</th>
                            <th>Created by</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            activities.map((obj, index) => (
                                <tr key={index + 1}>
                                    <td>{obj.activity_id}</td>
                                    <td>{obj.activity}</td>
                                    <td>{obj.employee_id}</td>
                                    <td>
                                        <button onClick={()=>onEdit(obj)}>Edit</button>
                                        <button onClick={() => onDelete(obj.activity_id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Act Id</th>
                            <th>Activity</th>
                            <th>Created by</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            deletedActivities.map((obj, index) => (
                                <tr key={index + 1}>
                                    <td>{obj.activity_id}</td>
                                    <td>{obj.activity}</td>
                                    <td>{obj.employee_id}</td>
                                    <td>
                                        <button onClick={() => onDelete(obj.activity_id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <Link to='/'>Back</Link>
        </>
    )
}

export default ViewActivity;