import Home from './components/homepage';
import Login from './components/login'
import Profile from './components/profile'
import Add from './components/addfriend'
import Loading from './components/loading'
import { auth, firestore }  from './firebase'
import './App.css';

import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';

import React, { useEffect, useState } from 'react'
import {
    Route,
    Switch,
    useHistory,
} from 'react-router-dom'
import AuthContext from './components/AuthContext';

const App = () => {
    const [user, setUser] = useState({});
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (user) {
            const onSuccess = (position) => {
                console.log(position.coords.latitude, position.coords.longitude)
            }
            const onError = (e) => {
                console.log(e)
            }
            window.navigator.geolocation.getCurrentPosition(onSuccess, onError)
        }
    }, [user])

    useEffect (() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (!user){
                setUser({})
                history.push("login")
                setIsLoading(false)
                return
            }

            const doc = await firestore.doc(`users/${user.uid}`).get()
            const newUserState = {
                uid: user.uid,
                phoneNumber: user.phoneNumber,
                ...(doc.data() || {})
            }
            setUser(newUserState)
            setIsLoading(false);

            if (!newUserState.username) {
                history.push("profile")
            } else if (user){
                history.push("home")
            }

        })
        return () => unsubscribe();
    }, [history])

    if (isLoading) {
        return (
            <Loading />
        )
    } 

    return (
        <div className="App">
            <AuthContext.Provider value={ {user, setUser}}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home" >
                        <Home  />
                    </Route>
                    <Route path="/login" >
                        <Login />
                    </Route>
                    <Route path="/profile" >
                        <Profile />
                    </Route>
                    <Route path="/addfriend" >
                        <Add />
                    </Route>
                </Switch>
            </AuthContext.Provider>
        </div>
    )
}

export default App;
