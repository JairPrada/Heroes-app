import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import VistaDC from '../components/VistaDC';
import VistaMarvel from '../components/VistaMarvel';
import { Layout, Affix } from 'antd';
import HeroCaracteristicas from '../components/HeroCaracteristicas';
import BuscadorHeroes from '../components/BuscadorHeroes';
import NavBar from '../components/NavBar';


function Rutas({ history }) {
    const { Header, Content, Footer } = Layout;

    return (
        <div>
            <Layout className="layout">
                <Affix offsetTop={0}>
                    <NavBar />
                </Affix>
                <Content style={{ padding: '40px 40px', minHeight: "100vh" }} >
                    <div id="color-change-5x>">
                        <Switch>
                            <Route exact path="/marvel" component={VistaMarvel} />
                            <Route exact path="/dc" component={VistaDC} />
                            <Route exact path="/buscar" component={BuscadorHeroes} />
                            <Route exact path="/heroe/:id" component={HeroCaracteristicas} />
                            <Redirect to="/marvel" />
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Heroes App ©2021 Created by Jair Andres Prada</Footer>
            </Layout>
        </div >
    );
}

export default Rutas;
