import { useParams } from 'react-router'
import SpaceXNavbar from '../components/SpaceXNavbar'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function History() {
    const { id } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/history/' + id)
            setData(response.data)
            console.log('DATA', response.data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <SpaceXNavbar></SpaceXNavbar>
            <h1>Historique de {id}</h1>
        </>
    )
}
