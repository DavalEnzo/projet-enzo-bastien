import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../loader'
import RocketCard from './RocketCard'

export default function RocketList()
{
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
            if(error.response.status === 404) {
                return <p className='text-center'>Fusée non trouvée</p>
            } else {
                return <p className='text-center'>Une erreur est survenue</p>
            }
        }
    }

    if (loading) return <Loader></Loader>

    return (
        <>
            {data.map((item, i) => {
                return (
                    <div key={i}>
                        <RocketCard data={item}></RocketCard>
                        <br />
                    </div>
                )
            })}
        </>
    )
}
