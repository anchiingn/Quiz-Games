import { animalEasyQuests } from "../Question-Answer-Datas/Animal/easy";
import { useState } from "react";
import './MainPage.css'

export default function MainPage() {
    const questions = Object.values(animalEasyQuests);

    const questionIndex = Math.floor(Math.random() * questions.length);

    const [currentIndex, setCurrentIndex] = useState(questionIndex);
    const [ showScore, setShowScore ] = useState(false)
    const [ correct, setCorrect ] = useState(0);
    const [ wrong, setWrong ] = useState(0)
    const [ onCLick, setOnClick ] = useState(1)

    
    const nextQuestion = (answer) => {
        
        setOnClick(prev => prev + 1)

        if (answer) {
            setCorrect(prev => prev + 1)
        }
        else {
            setWrong(prev => prev + 1)
        }

        if (onCLick < questions.length) {
            setCurrentIndex(questionIndex)
        }
        else {
            setShowScore(true)
        }
    };

    const restartQuiz = () => {
        setCurrentIndex(0);
        setOnClick(0);
        setCorrect(0);
        setWrong(0);
        setShowScore(false);
    };


    return (
        <>
            {showScore ?(
                <>
                    <div>Total Questions - {questions.length}</div>
                    <div>Total Score - {correct}</div>
                    <div>Correct Answers - {correct}</div>
                    <div>Wrong Answers - {wrong}</div>
                    <button onClick={restartQuiz}>restart</button>
                </>
            ) :(
                <>
                <div>
                    <div>{questions[currentIndex].question}</div>
                    <div className="answers">
                        {questions[currentIndex].answers.map((answer, answerIndex) => (
                            <button key={answerIndex} className="answer" onClick={() => nextQuestion(answer.isCorrect)}>{answer.answer}</button>
                        ))}
                    </div>
                </div>
                </>
            )}
        </>
    );
}
