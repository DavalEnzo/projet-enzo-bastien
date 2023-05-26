import SpaceXNavbar from '../components/SpaceXNavbar'
import QuizzList from '../components/Quizz/QuizzList'
import { useParams } from 'react-router-dom'
import Question from '../components/Quizz/Question'

export default function Quizz() {
    const { id, idQuestion } = useParams()

    if (idQuestion) {
        return (
            <>
                <SpaceXNavbar />
                <Question idQuizz={id}></Question>
            </>
        )
    }

    return (
        <>
            <SpaceXNavbar />
            <h1 className='text-center'>Quizz</h1>
            <h2 className='text-center'>Sélectionnez un quizz pour commencer</h2>
            <div className='d-flex quizzCard mx-auto'>
                {id}
                <QuizzList></QuizzList>
            </div>
        < />
    )
}
