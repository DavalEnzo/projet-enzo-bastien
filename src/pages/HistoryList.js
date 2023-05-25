import React, { useState, useEffect } from 'react'
import SpaceXNavbar from '../components/SpaceXNavbar'
import axios from 'axios'
import Event from '../components/Event/Event'
import Loader from '../components/loader'

export default function HistoryList() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spacexdata.com/v4/history')
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
            <div className='text-center'>
                <h1>Historique de l'Entreprise</h1>
                <br />
                {data.map((item, i) => {
                    return (
                        <div key={i}>
                            <Event  data={item}></Event>
                            <br />
                            <br />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
