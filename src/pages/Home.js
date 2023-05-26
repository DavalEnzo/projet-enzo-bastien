import SpaceXNavbar from '../components/SpaceXNavbar'

export default function Home() {
    return (
        <div className='background'>
            <SpaceXNavbar></SpaceXNavbar>
            <img
                src='https://cdn.pixabay.com/animation/2022/07/31/06/27/06-27-17-124_256.gif'
                alt='fusée'
                className='rocket'
            ></img>
            <h1 className='text-center my-5 text-white'>Bienvenue sur le site de SpaceX</h1>
        </div>
    )
}
