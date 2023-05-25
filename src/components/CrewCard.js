import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from './loader'
import { Container } from 'react-bootstrap'

export default function CrewCard() {
    const [crew, setCrew] = useState([])
    const [loading, setLoading] = useState(true)
    const [value, setValue] = useState('')

    useEffect(() => {
        getData()
    }, [value])

    const getData = () => {
        axios.get('https://api.spacexdata.com/v4/crew')
            .then(res => {
                setCrew(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                if(err.response.status === 404) {
                    return <p className='text-center'>Aucun membre d'équipage trouvé</p>
                } else {
                    return <p className='text-center'>Une erreur est survenue</p>
                }
            })
    }

    const getValue = (e) => {
        setValue(e.target.value)
    }

    if (loading) return <Loader />

    const filteredCrew = crew.filter((member) => {
        member.nameAndAgency = member.name + ' ' + member.agency
        return member.nameAndAgency.toLowerCase().includes(value.toLowerCase())
    })

    // Permet aux petits écrans de voir au moins le 1er résultat de recherche sans avoir à scroller
    const responsive = () => {
        if (value === '' && window.screen.width < 1200) {
            return (
                <div className='text-center'>
                    <h1>Equipage</h1>
                    <p className='fs-2'>Voici la liste des membres d'équipage de Dragon</p>
                    <h5 className='text-muted'>Cliquez sur la photo d'un membre pour accéder à ses détails</h5>
                    {noResultSearch()}
                    {crewList}
                </div>
            )
        } else if (window.screen.width >= 1200) {
            return (
                <div className='text-center'>
                    <h1>Equipage</h1>
                    <p className='fs-2'>Voici la liste des membres d'équipage de Dragon</p>
                    <h5 className='text-muted'>Cliquez sur la photo d'un membre pour accéder à ses détails</h5>
                </div>
            )
        }
    }

    const noResultSearch = () => {
        if(filteredCrew.length === 0) {
            return (
                <div className='text-center'>
                    <p className='fs-3'>Aucun résultat</p>
                </div>
            )
        }
    }

    const crewList = filteredCrew.map((member) => {
        return (
            <div className='card mt-3 mx-auto' key={member.id}>
                <Link style={{color: "black"}} className='text-decoration-none' to={`${member.id}`}>
                    <div>
                        <h1>{member.name}</h1>
                        <img className={'crewImage'} src={member.image} alt={member.name} />
                        <h3>Agence: {member.agency}</h3>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <>
            <Container>
                <div className='d-flex search mx-auto my-5'>
                    <input className='form-control' type='text' onChange={getValue}
                           placeholder="Rechercher un membre d'équipage par nom ou par agence" />
                    <i className='bx bx-search'></i>
                </div>
                <div className='text-center'>
                    {responsive()}
                    {noResultSearch()}
                    {crewList}
                </div>
            </Container>
        </>
    )
}
