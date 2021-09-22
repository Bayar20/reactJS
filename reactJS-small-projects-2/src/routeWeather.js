import React, { useRef } from 'react'
import {
    Route,
    Switch,
    useHistory,
    useParams,
    useLocation,
    Redirect,
} from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path={"/city/:name"}>
                    <City />
                </Route>
                <Route path={"/temperature"}>
                    <Temperature />
                </Route>
            </Switch>
        </div>
    )
}
 
const Home = () => {
  
    return (
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">City</a></li>
            <li><a href="/contact">Temperature</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
}
 
export default App;