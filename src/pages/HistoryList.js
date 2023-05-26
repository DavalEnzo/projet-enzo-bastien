import SpaceXNavbar from '../components/SpaceXNavbar'

export default function HistoryList() {
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
