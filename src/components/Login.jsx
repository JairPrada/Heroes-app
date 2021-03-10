import React, { Fragment, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

const Login = ({ history }) => {
    const { dispatch } = useContext(AuthContext)
    const ultimaRuta = localStorage.getItem('ultimaRuta') || '/'
    const iniciar = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Jair Prada'
            }
        })
        history.replace(ultimaRuta)
    }
    return (
        <Fragment>
            <h1>Login</h1>
            <button onClick={iniciar}>Login</button>
        </Fragment>
    )
}
export default Login;