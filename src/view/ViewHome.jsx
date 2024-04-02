import {Link} from 'react-router-dom';

const ViewHome=()=>{
    return (
        <>
            <Link to='/employee'>Employees</Link>
            <Link to='/activity'>Activities</Link>
        </>
    )
}

export default ViewHome;