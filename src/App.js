import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; // can use browser router we're importing using the name in this file

function App() {
  return (
    <Router> {/*first step*/}
      <div className="App">
        <Navbar /> {/*not inside switch because it's in every single route*/}
        {/* emmit setup* */}
        <div className="content">
        <Switch>
          {/*individual routes - create a route for each page using Route component*/}
          <Route path="/">
            {/*nest componeent inside this route to show when a user visits this route*/}
            <Home />
            </Route> {/*property path - the route  */}
        </Switch>  {/*remove Home component and replace with Switch - Switch componenet makes sure only one route shows at any one time. All routes go inside here*/}
        </div> 
      </div>
      </Router> 
  );
}
export default App;
