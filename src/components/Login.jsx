import { Button } from 'antd';
import React, { Fragment, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

const Login = ({ history }) => {
    const { dispatch } = useContext(AuthContext)
    const ultimaRuta = localStorage.getItem('ultimaRuta') || '/'
    const iniciar = ({ nombre="invitado" }) => {
        dispatch({
            type: types.login,
            payload: {
                name: nombre
            }
        })
        history.replace(ultimaRuta)
    }
    return (
        <Fragment>
            <div style={{ position: "absolute", height: "100vh", width: "100%", backgroundImage: `url('../../Imagenes/fondo.jpg')`, backgroundSize: "cover", filter: "blur(3px)" }}>

            </div>
            <div style={{ background: "#0E1215F2", display: "flex", flexDirection: "column", borderRadius: "3px", alignItems: "center", padding: "100px 50px", position: "fixed", zIndex: "99", top: "50%", left: "50%", transform: "translateY(-50%) translateX(-50% )" }}>
                <h1 className="t">Bienvenido a Heroes App</h1>
                <br />
                <Button type="primary" onClick={iniciar}>Ingresar como Invitado</Button>
            </div>
        </Fragment>
    )
}
export default Login;