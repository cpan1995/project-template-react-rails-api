import React, { useEffect, useState} from 'react';
import { NavLink, Switch, Route, useHistory } from "react-router-dom"
import Login from "./Login";
import SignUp from './SignUp';
import Main from './Main'
import Tabs from './Tabs'
import Students from './Students'
import Complaints from './Complaints';
import Classes from './Classes';
function HomePage() {

    const [isLoggedIn, setLogin] = useState(false)
    const [user, setUser] = useState({})
    let history = useHistory()

    useEffect(() => {
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    setLogin(true)
                })
            }
        });
    }, [])

    function handleSetUser(userObject){
        setUser(userObject)
        setLogin(true)
        history.push('/home')
        
    }

    function handleLogout(){
        setUser({})
        setLogin(false)
    }

    return(
        <div>
            {isLoggedIn ? <Tabs handleLogout = {handleLogout} user = {user} /> : <></>}
            <Switch >
                <Route exact path = '/'>
                    {   
                        isLoggedIn ? 
                        <>
                        </>
                        :
                        <Login handleSetUser={handleSetUser}/>
                    }
                </Route>
                <Route exact path = '/signup'>
                    <SignUp handleSetUser={handleSetUser}/>
                </Route>
                <Route exact path = '/login'>
                    <Login/>
                </Route>
                <Route exact path = '/home'>
                    <Main />
                </Route>
                <Route exact path = '/classes'>
                    <Classes user = {user}/>
                </Route>
                <Route path = '/students'>
                    <Students user = {user}/>
                </Route>
                <Route path ='/complaints'>
                    <Complaints/>
                </Route>
            </Switch>
        </div>
    )
}

export default HomePage