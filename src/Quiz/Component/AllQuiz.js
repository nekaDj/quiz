import {useState, useEffect} from "react"
import style from "../style.css"
import Quiz from "./Quiz"
import { nanoid } from 'nanoid'


export default function AllQuiz(){

    const [quizData, setQuizData] = useState([])
    const [submitted, setSubmitted] = useState(false)
    const [started, setStarted] = useState(false)
    // const [allData, setAllData] = useState([])
    const [error, setError] = useState(false)
    const [score, setScore] = useState(0)
    useEffect(function(){
        if(!submitted){
            fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            /*.then(data => setQuizData(data.results.map(
                function(item){
                    return {
                        id:nanoid(),
                        incorrectAnswers: item.incorrect_answers.map(function(itemIncorrectAnswers){
                                    return {idChoice: nanoid(), choosed: false, answer: itemIncorrectAnswers}
                                }),
                        correctAnswer: {idChoice: nanoid(), choosed: false, answer: item.correct_answer},
                        type: item.type,
                        question: item.question}
                })) )*/
            .then(data => setQuizData(function(prevQuizData){
                // console.log("data result")
                // console.log(data)
                let dataTemp = []
                for (let i=0; i < data.results.length ; i++){
                    dataTemp.push(
                        {
                            id: nanoid(),
                            type: data.results[i].type,
                            question : data.results[i].question,
                            answers : data.results[i].incorrect_answers.map(function(itemIncorrectAnswers){
                                return {idChoice: nanoid(), choosed: false, answer: itemIncorrectAnswers, correctAnswer: false}
                            }),
                        }
                    )
                    dataTemp[i].answers.push({idChoice: nanoid(), choosed: false, answer: data.results[i].correct_answer, correctAnswer: true})
                }
                return dataTemp
            })).catch(error => setError(true));
        }else{
            console.log(true)
        }
       
    }, [submitted])


    /*allData.map(function(item){
        return {
            id:nanoid(),
            incorrectAnswers: item.incorrect_answers.map(function(itemIncorrectAnswers){
                        return {idChoice: nanoid(), choosed: false, answer: itemIncorrectAnswers}
                    }),
            correctAnswer: {idChoice: nanoid(), choosed: false, answer: item.correct_answer},
            type: item.type,
            question: item.question
        }
    })//*/
    
    // console.log("quizData")
    // console.log(quizData)

    function chooseAnswer(idChoice, id){
        setQuizData(prevQuizData => prevQuizData.map(function(item){
            return item.id === id ?{...item,
                    answers: item.answers.map(function(itemChoice){
                        return idChoice === itemChoice.idChoice ? {...itemChoice, choosed: !itemChoice.choosed} : itemChoice
                })
                }
                : item
        }))
        var answerFound = false ;
        // console.log(id)
        // console.log(idChoice)
    }

    function checkAnswer(){
        let score = 0 
        setSubmitted(true)
        quizData.map(item=>{
            let subScore = 0
            item.answers.map(itemAnswers=>{
                if(itemAnswers.choosed && itemAnswers.correctAnswer){
                    subScore += 1 
                }else if(itemAnswers.choosed && !itemAnswers.correctAnswer){
                    subScore -= 1
                }
            })
            if(subScore < 0){
                subScore = 0
            }
            score = score + subScore
        })
        setScore(score)
    }
    function restart(){
        setSubmitted(false)
        setStarted(false)
    }
    function startQuiz(){
        setStarted(true)
    }

    
    return(
        <div>
            {!started && <div className="start">
                <div className="text weight800">Quizzical</div>
                <div className="text">Some description if needed</div>
                <div className="div-btn"><button className="btn" onClick={startQuiz}>Start Quiz</button></div>
            </div>}
            {started && <div className="container quiz">
                {quizData.map(function(item){
                    return <Quiz 
                            key={item.id}
                            question={item.question} 
                            answers={item.answers} 
                            id={item.id}
                            chooseAnswer= {chooseAnswer}
                            submitted={submitted}
                            />
                })}
                {!submitted && <div className="div-btn"><button className="btn" onClick={checkAnswer}>Check Answers</button></div>}
                {submitted && <div className="div-btn"><h5 className="text-score">Your score is {score}/{quizData.length}</h5> <button className="btn" onClick={restart}>Play again</button> </div>}
            </div>}
        </div>
    )
}