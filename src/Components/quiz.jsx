import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
            <div>
                <div>
                    <h1>Quiz of Solar System</h1>
                    <p>Total number of questions: {questions.length}</p>
                </div>
                <button onClick={() => submitExam()}>End Quiz</button>
            </div>
            <div>
                <h2>Question:{currentQ}</h2>
                <h3>{questions[currentQ - 1].question}</h3>
                <ul>
                    {questions[currentQ - 1].options.map((opt,index) => (
                        <li key={index}><button onClick={() => handleAnswer(opt)}>{opt}</button></li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={() => handlePrev()}>Previous Question</button>
                <button onClick={() => {currentQ === questions.length?submitExam():handleNext()}}>{currentQ === questions.length?'Submit Exam':'Next Question'}</button>
            </div>
        </div>
        )
    }
}

export default Quiz;