import React, { Fragment, useContext } from 'react';
import firebase from "./firebase";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';


const NavBar = ({ history }) => {
    const { dispatch } = useContext(AuthContext);
    const salir = async () => {
        await firebase.auth().signOut()
        dispatch({ type: types.logout })
    }
    const add = () => {
        const m = document.getElementById("m")
        const n = document.getElementById("n")
        m.classList.toggle("active")
        n.classList.toggle("active")
    }
    return (
        <Fragment>
            <header>
                <div className="menu-toggle" id="m" onClick={add} />
                <a href="/"><img alt="HEROES APP" src="../logo.svg" className="logo " /></a>
                <a href="/" className="logo"> HEROES APP</a>
                <nav id="n">
                    <ul>
                        <li><strong><NavLink to="/marvel" activeClassName="active" >MARVEL COMICS</NavLink></strong></li>
                        <li><strong><NavLink to="/dc" activeClassName="active">DC COMICS</NavLink></strong></li>
                        <li><strong><NavLink to="/buscar" activeClassName="active">BUSCADOR</NavLink></strong></li>
                        <li><strong><p onClick={salir}>SALIR</p></strong></li>
                    </ul>
                </nav>
                <div className="clearfix" />
            </header>
        </Fragment>
    )
}
export default NavBar;