import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createActivity, readAllActivities, readActivity, updateActivity, restoreActivity, permanentDeleteActivity, deleteActivity } from '../api/activityApi.js'
const ViewActivity = () => {
    const [activities, setActivities] = useState([]);

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

    const [enteredActivity, setEnteredActivity] = useState('');

    async function addActivity() {
        const activityToSave = { activity: enteredActivity, employee_id: 1 }
        alert(JSON.stringify(activityToSave) + "data saved!")
        const response = await createActivity(activityToSave);
        setEnteredActivity('');
        await readAllActivitiesQueries.refetch();
    }

    return (
        <>
            <h2>Employees</h2>

            <div>
                <input
                    type="text"
                    placeholder="enter activity"
                    value={enteredActivity}
                    onChange={(e) => setEnteredActivity(e.target.value)}
                />

                <button onClick={addActivity}>Save</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Act Id</th>
                        <th>Activity</th>
                        <th>Created by</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        activities.map((obj, index) => (
                            <tr key={index + 1}>
                                <td>{obj.activity_id}</td>
                                <td>{obj.activity}</td>
                                <td>{obj.employee_id}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to='/'>Back</Link>
        </>
    )
}

export default ViewActivity;