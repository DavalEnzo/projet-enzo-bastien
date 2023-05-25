import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './loader'
import { Container } from 'react-bootstrap'
import BackButton from './BackButton'

export default function CrewDetails({id}) {
    const [member, setMember] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = () => {
            axios.get(`https://api.spacexdata.com/v4/crew/${id}`)
                .then(res => {
                    setMember(res.data)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err)
                })
        }

        getData()
    }, [id])

    if (loading) return <Loader />

    return (
        <>
            <Container>
                <BackButton backPath={"equipage"} backText="retour à la liste des équipages" />
                <div className='text-center my-3'>
                    <h1>Page de membre de {member.name}</h1>
                    <div className='card mt-3 mx-auto'>
                        <div>
                            <img className={'crewImage'} src={member.image} alt={member.name} />
                            <h2>Agence : {member.agency}</h2>
                            <h3>Status : {member.status}</h3>
                            <h5>Page wikipedia: <a href={member.wikipedia}>{member.wikipedia}</a></h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
