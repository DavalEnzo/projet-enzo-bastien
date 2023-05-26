import { useEffect, useState } from 'react'
import Quizz from '../../data/quizz.json'
import { Link } from 'react-router-dom'

export default function Question({ idQuizz }) {
    const [idQuestion, setQuestion] = useState(1)
    const [score, setScore] = useState(0)
    const [timer, setTimer] = useState(30)

    const newQuestion = () => {
        setQuestion(idQuestion + 1)
    }

    const bonneReponse = () => {
        setScore(score + 1)
    }

    useEffect(() => {
        const getQuestion = () => {
            setQuestion(idQuestion)
        }

        getQuestion()
    }, [idQuestion])

    useEffect(() => {
        if (timer === 0) {
            setQuestion(0)
        }
        const interval = setInterval(() => {
            setTimer(timer - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [idQuizz, timer])

    if(idQuestion.toString() === '0') {
        return (
            <div className="text-center">
                <h1 className="my-5">Résultats</h1>
                <h2 className="my-5">Vous avez obtenu {score} points</h2>
                <Link to={`/quizz/`} className="btn btn-primary">Retour à la liste des quizz</Link>
            </div>
        )
    }

    const question = Quizz.find((quizz) => quizz.id === parseInt(idQuizz)).questions.find((question) => question.id === parseInt(idQuestion))

    const reponses = question.options

    const randomizeReponses = reponses.sort(() => 0.5 - Math.random())
    
    const reponsesList = () => {
        return (
            randomizeReponses.map((reponse, index) => {
                    if (reponse === question.answer) {
                        return (
                            <div key={index}>
                                <Link to={`/quizz/${idQuizz}/question/${idQuestion === 10 ? setQuestion(0) : idQuestion + 1}`} onClick={() => {
                                    newQuestion()
                                    bonneReponse()
                                }}
                                      className='btn btn-primary'>
                                    {reponse}
                                </Link>
                            </div>
                        )
                    }

                    return (
                        <div key={index}>
                            <Link to={`/quizz/${idQuizz}/question/${idQuestion === 10 ? setQuestion(0) : idQuestion + 1}`} onClick={newQuestion}
                                  className='btn btn-primary'>
                                {reponse}
                            </Link>
                        </div>
                    )
                },
            )
        )
    }

    return (
        <>
            <h1 className="text-center my-5">Question {idQuestion}</h1>
            <h2 className='text-center my-5'>{question.question}</h2>
            <h3 className='text-center my-5'>Temps restant : {timer}</h3>
            <div className='d-flex justify-content-center flex-row gap-2'>
                {reponsesList()}
            </div>
        </>
    )
}
