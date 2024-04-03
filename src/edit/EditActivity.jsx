import { useState, useEffect } from 'react';
import { updateActivity } from '../api/activityApi.js'

const EditActivity = ({ activityToEdit, hideEditActivity }) => {
    const [activity, setActivity] = useState(activityToEdit);    
    
    async function onSave(){        
        const response=await updateActivity(activity)
        hideEditActivity();
    }
    return (
        <>
            <div>
                <label>Act Id</label>
                <input
                    value={activity.activity_id}
                    disabled
                />
            </div>
            <div>
            <label>Activity</label>
                <input
                    type="text" // Specify the input type
                    value={activity.activity} // Make sure this is correctly referencing the state
                    onChange={(e)=>setActivity({...activity,activity:e.target.value})}
                />
            </div>
            <div>
                <label>Created By</label>
                <input 
                    value={activity.employee_id}
                    disabled
                    />
            </div>
            <div>
                <button onClick={hideEditActivity}>Cancel</button>
                <button onClick={onSave}>Save</button>
            </div>
        </>
    )
}

export default EditActivity;