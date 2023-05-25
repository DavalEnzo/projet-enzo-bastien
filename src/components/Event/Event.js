import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

export default function Event({ data }) {
    return (
        <Container className='card w-100'>
            <Row>
                <h3>{data.title}</h3>
            </Row>
            <Row>
                <Col>
                    <p>Date UTC : {data.event_date_utc}</p>
                </Col>
                <Col>
                    <p>Date Unix: {data.event_date_unix}</p>
                </Col>
            </Row>
            <Row>
                <h5>Description</h5>
                <p>{data.details}</p>
            </Row>
            <Row>
                <Link to={data.links.article}>Voir plus..</Link>
            </Row>
        </Container>
    )
}
