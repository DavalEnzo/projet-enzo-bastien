import Quizz from '../../data/quizz.json'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function QuizzList() {
    const difficulty =
        [
            {
                'name': 'Facile',
                'color': 'primary',
            },
            {
                'name': 'Intermédiaire',
                'color': 'warning',
            },
            {
                'name': 'Avancé',
                'color': 'danger',
            },
        ]

    const quizzList = Quizz.map((quizz, index) => {
       let color = difficulty.find((difficulty) =>  difficulty.name === quizz.difficulty).color
            return (
                <Container key={index}>
                    <Link className="text-decoration-none" to={`/quizz/${quizz.id}/question/1`}>
                        <div className={`mt-5 rounded border border-3 color h-75 p-2 text-black bg-${color} quizzContent d-flex align-items-center justify-content-center`}>
                            <h3>{quizz.title} - Niveau {quizz.difficulty}</h3>
                        </div>
                    </Link>
                </Container>
            )
        },
    )

    return (
        <>
            {quizzList}
        </>
    )
}
