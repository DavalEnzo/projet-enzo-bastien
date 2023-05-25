import Container from 'react-bootstrap/esm/Container'
import React, { useState, useEffect } from 'react'
import SpaceXNavbar from '../components/SpaceXNavbar'
import axios from 'axios'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'

export default function InfoList() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/company')
            setData(response.data)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    if (data) {
        return (
            <>
                <SpaceXNavbar></SpaceXNavbar>
                <Container className='text-center'>
                    <Row>
                        <Container className='border border-primary  rounded'>
                            <Row>
                                <h1>About {data.name}</h1>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Fondateur: {data.founder}</h5>
                                </Col>
                                <Col>
                                    <h5>Date de Création: {data.founded}</h5>
                                </Col>
                            </Row>
                            <Row>
                                <p>{data.summary}</p>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>nombres d'employés : </h5>
                                    <p>{data.employees}</p>
                                </Col>
                                <Col>
                                    <h5>Valuation :</h5>
                                    <p>{data.valuation}$</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>
                                        <b>nombres de véhicules : </b>
                                        {data.vehicles}
                                    </p>
                                </Col>
                                <Col>
                                    <p>
                                        <b>nombre de site de lancement :</b>
                                        {data.launch_sites}
                                    </p>
                                </Col>
                                <Col>
                                    <p>
                                        <b>nombre de site de tests :</b>
                                        {data.test_sites}
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <br />
                    <Row>
                        <Container className='border border-primary  rounded'>
                            <Row>
                                <h2>Directions</h2>
                            </Row>

                            <Row>
                                <h5>CEO:</h5> <p>{data.ceo}</p>
                            </Row>
                            <Row>
                                <h5>CTO:</h5> <p>{data.cto}</p>
                            </Row>
                            <Row>
                                <h5>COO:</h5> <p>{data.coo}</p>
                            </Row>
                            <Row>
                                <h5>CTO Propulsion:</h5> <p>{data.cto_propulsion}</p>
                            </Row>
                        </Container>
                    </Row>
                    <br />
                    <Row>
                        <Container className='border border-primary  rounded'>
                            <Row>
                                <h2>Siège Social</h2>
                            </Row>
                            <Row>
                                <p>Adresse: {data.headquarters?.address}</p>
                            </Row>
                            <Row>
                                <p>Ville: {data.headquarters?.city}</p>
                            </Row>
                            <Row>
                                <p>Etat: {data.headquarters?.state}</p>
                            </Row>
                        </Container>
                    </Row>
                    <br />
                    <Row>
                        <Container className='border border-primary  rounded'>
                            <Row>
                                <h2>Liens</h2>
                            </Row>
                            <Row>
                                <Link to={data.links?.website}>Site Officiel</Link>
                            </Row>
                            <Row>
                                <Link to={data.links?.flickr}>Flickr</Link>
                            </Row>
                            <Row>
                                <Link to={data.links?.twitter}>Twitter</Link>
                            </Row>
                            <Row>
                                <Link to={data.links?.elon_twitter}>Elon Musk Twitter</Link>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </>
        )
    } else {
        return (
            <Alert>
                <h1>Error</h1>
            </Alert>
        )
    }
}
