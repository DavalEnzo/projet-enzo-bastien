import SpaceXNavbar from '../components/SpaceXNavbar'
import HistoryList from '../components/History/HistoryList'

export default function History() {
    return (
        <>
            <SpaceXNavbar></SpaceXNavbar>
            <div className='text-center'>
                <h1>Historique de l'Entreprise</h1>
                <br />
                <HistoryList></HistoryList>
            </div>
        </>
    )
}
