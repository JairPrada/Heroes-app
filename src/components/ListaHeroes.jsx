import React, { Fragment, useMemo } from 'react';
import { getHeroesByEditorial } from '../selectors/getHeroeByEditorial';
import HeroCard from './HeroCard';
import { Row, Col } from 'antd';
const ListaHeroes = ({ editorial }) => {
    const heroes = useMemo(() => getHeroesByEditorial(editorial), [editorial])
    return (
        <Fragment>
            <Row justify="center" width="100%" gutter={[48, 48]}>
                {
                    heroes.map(hero => (
                        <Col key={hero.id} xs={22} sm={12} md={8} xl={6}>
                            <HeroCard key={hero.id} {...hero} />
                        </Col>
                    ))
                }
            </Row>
        </Fragment>
    )
}
export default ListaHeroes;