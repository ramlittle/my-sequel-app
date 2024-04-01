import {Routes,Route} from 'react-router-dom';
import ViewHome from './view/ViewHome'
import ViewEmployee from './view/ViewEmployee';
import ViewActivity from './view/ViewActivity';
import ViewNotFound from './view/ViewNotFound';

const App = ()=>{
  return (
    <>
      <Routes>
        <Route path="/" element = {<ViewHome/>}/>
        <Route path="/employee" element = {<ViewEmployee/>}/>
        <Route path="/activity" element = {<ViewActivity/>}/>
        <Route path="*" element={<ViewNotFound/>}/>
      </Routes>
    </>
  )
}
export default App;

