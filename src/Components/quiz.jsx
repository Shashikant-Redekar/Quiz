import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/quiz.scss';

let answers = []

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const getnumber = async() => {
        const resp = await axios.get('http://localhost:3000/quiz').then((res) => {
          return(res);
        });
        setQuestions(resp.data);
   }
    useEffect(() =>{
        getnumber();
    });

    let [currentQ, setCurrentQ] = useState(1);
    const navigate = useNavigate();

    const handlePrev = () => {
        if(answers.length < currentQ){
            answers.push('ans');
        }
        if(currentQ > 1){
            setCurrentQ(currentQ - 1)
        }
    }

    const handleNext = () => {
        if(answers.length < currentQ){
            answers.push('ans');
        }
        if(currentQ < questions.length){
            setCurrentQ(currentQ + 1)
        }
    }

    const submitExam = () => {
        if(answers.length < currentQ){
            answers.push('ans');
        }
        if(currentQ < questions.length){
            setCurrentQ(currentQ + 1)
        }
        let marks = 0;
        for (let i=0; i<questions.length; i++){
            if(questions[i].answer === answers[i]){
                marks++;
            }
        }
        navigate("/results", { state: { score: marks } });
    }

    const handleAnswer = (ans) => {
        if(answers.length < currentQ){
            answers.push(ans);
        } else {
            answers[currentQ - 1] = ans;
        }
    }

    if(questions.length === 0){
        return(
            <p>Loading...</p>
        )
    } else {
        return(
             <div>
            <div className="header">
                <div>
                    <h1 className="heading">Quiz of Solar System</h1>
                    <p className="totalQ">Total number of questions: {questions.length}</p>
                </div>
                <button onClick={() => submitExam()} className="Hbutton">End Quiz</button>
            </div>
            <div className="middle">
                <div className="questionBox">
                    <h2 className="quesN">Question:{currentQ}</h2>
                    <h3 className="question">{questions[currentQ - 1].question}</h3>
                </div>
                <div className="options">
                    <ul>
                        {questions[currentQ - 1].options.map((opt,index) => (
                            <p key={index}><button onClick={() => handleAnswer(opt)} className={answers[currentQ - 1] === opt?"soption":"option"}>{opt}</button></p>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer">
                <button onClick={() => handlePrev()} className="fButton">Previous Question</button>
                <button onClick={() => {currentQ === questions.length?submitExam():handleNext()}} className={currentQ === questions.length?"sButton":"fButton"}>{currentQ === questions.length?'Submit Exam':'Next Question'}</button>
            </div>
        </div>
        )
    }
}

export default Quiz;