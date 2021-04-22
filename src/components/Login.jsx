import { Button, Col, Row, Typography } from 'antd';
import React, { Fragment, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';
import { GoogleCircleFilled, FacebookFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const Login = ({ history }) => {
    const { dispatch } = useContext(AuthContext)
    const ultimaRuta = localStorage.getItem('ultimaRuta') || '/'
    const iniciar = ({ nombre = "invitado" }) => {
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
            <Row align="center" justify="middle" style={{ height: "150vh", width: "100%", backgroundImage: `url('../../Imagenes/fondo.jpg')`, backgroundSize: "cover" }}>
                <Col xs={23} sm={18} lg={12} style={{ background: "#0E1215F2", borderRadius: "5px", padding: "100px 0px" }}>
                    <Row align="center" >
                        <Col xs={20}>
                            <Typography.Title level={1} style={{ color: "white", textAlign: "center" }} >Bienvenido a HeroesApp</Typography.Title>
                        </Col>
                        <Col xs={20} sm={12} >
                            <p style={{ textAlign: "center" }}>
                                <input type="text" style={{ width: "100%", borderRadius: "3px", border: "none", padding: "10px" }} placeholder="Correo" />
                            </p>
                            <p >
                                <input type="password" style={{ width: "100%", borderRadius: "3px", border: "none", padding: "10px" }} placeholder="Contraseña" />
                                <Link style={{ textAlign: "left" }}>¿Olvidaste tu contraseña?</Link>
                            </p>
                            <p style={{ textAlign: "center" }}>
                                <Button type="primary" style={{ width: "90%", borderRadius: "2rem" }} onClick={iniciar}>Iniciar Sesion</Button>
                            </p>
                            <Typography.Title level={4} style={{ color: "white", textAlign: "center" }}>
                                O
                            </Typography.Title>
                        </Col>
                    </Row>
                    <Row align="center">
                        <Col xs={20} sm={12} style={{ textAlign: "center" }}>
                            <p>
                                <Button style={{ background: "white", width: "90%", borderRadius: "2rem", border: "none" }} icon={<GoogleCircleFilled />}>Continuar con Google</Button>
                            </p>
                            <p>
                                <Button type="primary" style={{ background: "#3A6FE5", width: "90%", borderRadius: "2rem", border: "none" }} icon={<FacebookFilled />}>Continuar con Facebook</Button>
                            </p>
                            <p style={{ color: "white" }}>
                                ¿Aún no estás en HeroesApp?  <Link>Regístrate</Link>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}
export default Login;