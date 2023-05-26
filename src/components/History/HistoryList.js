import Event from '../Event/Event'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../loader'

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
            if(error.response.status === 404) {
                return <p className='text-center'>Historique non trouvé</p>
            } else {
                return <p className='text-center'>Une erreur est survenue</p>
            }
        }
    }

    if (loading) return <Loader></Loader>

    return (
        <>
            <h1>Historique de l'Entreprise</h1>
            <br />
            {data.map((item, i) => {
                return (
                    <div key={i}>
                        <Event data={item}></Event>
                        <br />
                        <br />
                    </div>
                )
            })}
        </>
    )
}
