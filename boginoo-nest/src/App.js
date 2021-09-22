import React, { useEffect, useState } from 'react';
import { auth } from './firebase'
import { HomeDefault, Login, Signup, UrlLanding } from './pages';
import AuthContext from './providers/auth-provider'
import {
    Switch,
    Route,
    BrowserRouter,
    Redirect
} from "react-router-dom";
import './style/main.scss';
import { Loading } from './components'

const App = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(!user){
                auth.signInAnonymously();
            }
            setUser(user);
        })
    }, [])
    
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <BrowserRouter >
                {
                    !user ? <Loading /> 
                    : 
                    (
                        <Switch>
                            <Route path="/" exact>
                                <HomeDefault />
                            </Route>
                            <Route path="/login">
                                { user.isAnonymous ? <Login /> : <Redirect to="/" /> }
                            </Route>
                            <Route path="/signup">
                                { user.isAnonymous ? <Signup /> : <Redirect to="/" /> }
                            </Route>
                            <Route path="/:firestoreId">
                                <UrlLanding />
                            </Route>
                        </Switch>
                    )
                }
                
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;