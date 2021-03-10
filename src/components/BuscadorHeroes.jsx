import { Col, Divider, Input, Row, Typography, Alert } from 'antd';
import React, { useState, Fragment } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../selectors/getHeroByName';
import HeroCard from './HeroCard';
const { Search } = Input;

const BuscadorHeroes = ({ history }) => {
    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);
    const [buscador, setBuscador] = useState({
        texto: q
    });

    const heroesFiltrados = React.useMemo(() => getHeroesByName(q), [q])

    const onSearch = (e) => {
        setBuscador({ texto: e.target.value })
    }


    const Buscar = () => {
        history.push(`?q=${buscador.texto}`)
    }
    return (
        <Fragment>
            <Divider orientation="left">
                <Typography.Title level={2}>
                    Zona de Busqueda
                </Typography.Title>
            </Divider>

            <Row gutter={[10, 10]} align="center">
                <Col xs={24} sm={12} md={12}>
                    <Search className="izquierda" placeholder="Busca a tu heroe" width="auto" onChange={onSearch} onSearch={Buscar} value={buscador.texto} enterButton />
                </Col>
                <Col xs={24} sm={12} md={12}>
                    <Divider>
                        <Typography.Text type="secondary" >
                            [{heroesFiltrados.length}]  Resultados Encontrados
                                </Typography.Text>
                    </Divider>
                    {
                        (q !== '' && heroesFiltrados.length === 0)
                        &&
                        <Alert className="derecha" message="Heroe no encontrado " type="error" />
                    }
                    {
                        (q === '')
                        &&
                        <Alert className="derecha" message="Realiza un busqueda " type="info" />
                    }

                    <Row gutter={[10, 10]} align="start">
                        {
                            heroesFiltrados.map((hero) => (
                                <Col xs={12} sm={24} key={hero.id} md={12} >
                                    <HeroCard key={hero.id} {...hero} />
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row >
        </Fragment >
    )
}
export default BuscadorHeroes;