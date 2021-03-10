import React, { useEffect, useReducer } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Rutas from './Rutas';
import Login from '../components/Login';
import { AuthContext } from '../auth/AuthContext';
import { authReduccer } from '../auth/authReduccer';
import RutaPrivada from './RutaPrivada';
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { loged: false }
}

function RutasPrincipal() {
    const [user, dispatch] = useReducer(authReduccer, {}, init)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <div>
            <AuthContext.Provider value={{ user, dispatch }}>
                <Router>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <RutaPrivada path="/" component={Rutas} isAuthenticated={user.loged} />
                    </Switch>
                </Router>
            </AuthContext.Provider>
        </div>
    );
}

export default RutasPrincipal;
