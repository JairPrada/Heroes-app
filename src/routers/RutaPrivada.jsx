import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';
const RutaPrivada = ({ isAuthenticated, component: Component, ...rest }) => {
    localStorage.setItem('ultimaRuta', rest.location.pathname)
    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? <Component  {...props} />
                    : <Redirect to='/login' />
            )}
        />
    )
}
RutaPrivada.prototype = {
    isAuthenticated: PropTypes.bool.isRequired,
    componente: PropTypes.func.isRequired
}

export default RutaPrivada;