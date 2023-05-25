import SpaceXNavbar from '../components/SpaceXNavbar'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import RocketCard from '../components/RocketCard/RocketCard'
import { Container } from 'react-bootstrap'
import Loader from '../components/loader'

export default function RocketList() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/rockets')
            setData(response.data)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    if (loading) return <Loader></Loader>

    return (
        <>
            <SpaceXNavbar></SpaceXNavbar>
            <Container className='text-center'>
                <h1>Listes des fusées</h1>
                {data.map((item, i) => {
                    return (
                        <div key={i}>
                            <RocketCard data={item}></RocketCard>
                            <br />
                        </div>
                    )
                })}
            </Container>
        </>
    )
}
