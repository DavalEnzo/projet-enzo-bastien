import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from '../router/error-page'
import Home from '../pages/Home'
import HistoryList from '../pages/HistoryList'
import InfoList from '../pages/InfoList'
import Crew from '../pages/Crew'
import RocketList from '../pages/RocketList'
import Rocket from '../pages/Rocket'
import Quizz from '../pages/Quizz'

const Routeur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/historique' element={<HistoryList />}></Route>
                <Route path='/about' element={<InfoList />}></Route>
                <Route path='/equipage' element={<Crew />} />
                <Route path='/equipage/:id' element={<Crew />} />
                <Route path='/rockets' element={<RocketList />} />
                <Route path='/rockets/:id' element={<Rocket />} />
                <Route path='/quizz' element={<Quizz />} />
                <Route path='/quizz/:id/question/:idQuestion' element={<Quizz />} />
                <Route path='/quizz/:id/resultats' element={<Quizz />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routeur
