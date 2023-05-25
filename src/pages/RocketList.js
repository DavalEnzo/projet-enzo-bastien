import SpaceXNavbar from '../components/SpaceXNavbar'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import RocketCard from '../components/RocketCard/RocketCard'
import { Container } from 'react-bootstrap'

export default function RocketList() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/rockets')
            setData(response.data)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <SpaceXNavbar></SpaceXNavbar>
            <Container className='text-center'>
                <h1>Listes des fusées</h1>
                {data.map((item, i) => {
                    return (
                        <>
                            <RocketCard data={item}></RocketCard>
                            <br />
                        </>
                    )
                })}
            </Container>
        </>
    )
}
