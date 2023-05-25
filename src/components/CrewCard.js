import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from './loader'
import { Container } from 'react-bootstrap'

export default function CrewCard() {
    const [crew, setCrew] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('https://api.spacexdata.com/v4/crew')
            .then(res => {
                setCrew(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    if (loading) return <Loader />

    const crewList = crew.map((member) => {
        return (
            <>
                <Container>
                    <div className='text-center'>
                        <h1>Equipage</h1>
                        <p className='fs-2'>Voici la liste des membres d'équipage de Dragon</p>
                        <h5 className='text-muted'>Cliquez sur la photo d'un membre pour accéder à ses détails</h5>
                        <div className='card mt-3 mx-auto' key={member.id}>
                            <Link className='text-decoration-none' to={`${member.id}`}>
                                <div className='card-content'>
                                    <h1>{member.name}</h1>
                                    <img className={'crewImage'} src={member.image} alt={member.name} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </Container>
            </>
        )
    })

    return (
        <>
            {crewList}
        </>
    )
}
