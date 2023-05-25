import { useParams } from 'react-router'
import SpaceXNavbar from '../components/SpaceXNavbar'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import BackButton from '../components/BackButton'
import Loader from '../components/loader'
export default function Rocket() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.spacexdata.com/v4/rockets/' + id)
                setData(response.data)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [id])

    if (loading) {
        return <Loader></Loader>
    } else {
        return (
            <>
                <SpaceXNavbar></SpaceXNavbar>
                <BackButton
                    backPath={'rockets/'}
                    backText={'Retour a la liste des Fusée'}
                ></BackButton>
                <Container className='text-center w-100'>
                    <Row>
                        <Col>
                            <h1>{data.name}</h1>
                        </Col>
                    </Row>
                    <Row xs={12} xl={12}>
                        <Col>
                            <img src={data.flickr_images[0]} alt={data.name} className='w-100' />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <h3>Informations</h3>
                    </Row>

                    <Row>
                        <Row>
                            <p>
                                <b>Pays:</b> {data.country}
                            </p>
                        </Row>
                        <Row className='w-100 pe-8'>
                            <h5>Description</h5>
                            <p> {data.description}</p>
                        </Row>
                        <Row>
                            <Col>
                                <p>
                                    <b>hauteur:</b> {data.height.meters}m
                                </p>
                            </Col>
                            <Col>
                                <p>
                                    <b>diametre:</b> {data.diameter.meters}m
                                </p>
                            </Col>
                            <Col>
                                <p>
                                    <b>Masse:</b> {data.mass.kg}Kg
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>
                                    <b>Prix du lancement:</b> {data.cost_per_launch}$
                                </p>
                            </Col>
                            <Col>
                                <p>
                                    <b>nombre d'étages:</b> {data.stages}
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Container>
                                <Row>
                                    <h4>Moteurs</h4>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>EnginelossMax:</b>{' '}
                                        {data.engines.engine_loss_max !== 0
                                            ? data.engines.engine_loss_max
                                            : '0'}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>ISP</b>
                                    </Col>
                                    <Col>
                                        <p>
                                            <b>Sea level:</b>
                                            {data.engines.isp?.sea_level}
                                        </p>
                                    </Col>
                                    <Col>
                                        <p>
                                            <b>Vaccum:</b>
                                            {data.engines.isp?.vacuum}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <p>
                                        <b>Layout:</b> {data.engines.layout}
                                    </p>
                                </Row>
                                <Row>
                                    <p>
                                        <b>nbMoteur:</b>
                                        {data.engines.number}
                                    </p>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>Carburant n1: </b>
                                        {data.engines.propellant_1}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>Carburant n2: </b>
                                        {data.engines.propellant_2}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>ThrustSeaLevel:</b> {data.engines.thrust_sea_level?.kN}kN
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>ThrustToWeight: </b>
                                        {data.engines.thrust_to_weight}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>ThrustVacuum</b>
                                        {data.engines.thrust_vacuum?.kN}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>Version :</b>
                                        {data.engines.version}
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </Row>
                </Container>
            </>
        )
    }
}
