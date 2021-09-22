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
                <Route path={"/welcome/:name"}>
                    <Welcome />
                </Route>
                <Route path={"/welcome"}>
                    <Welcome />
                </Route>
            </Switch>
        </div>
    )
}


const Welcome = () => {
    const params = useParams();
    const location = useLocation();
    const query = new URLSearchParams(location.search)
    const name = query.get('name');

    if(name == null && params.name == null) {
        return <Redirect to="/" />
    }
    return (
        <div className="App">
            <label>Welcome {params.name} {query.get('name')}</label>
        </div>
    )
}

const Home = () => {

    const input1Ref = useRef(null);
    const history = useHistory();

    const onSubmit = (event) => {
        event.preventDefault();
        const value1 = input1Ref.current.value;
        if(value1 === "") {
            input1Ref.current.focus();
            return;
        }
        history.push(`/welcome/${value1}`)
    }
  
    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <div>
                    <input ref={input1Ref} />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}
export default App;