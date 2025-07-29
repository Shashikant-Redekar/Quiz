import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const question = [
  {
    id: 1,
    question: "Which planet is the largest in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Neptune"],
    answer: "Jupiter"
  },
  {
    id: 2,
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    answer: "Mercury"
  },
  {
    id: 3,
    question: "Which planet has a prominent ring system?",
    options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
    answer: "Saturn"
  },
  {
    id: 4,
    question: "Which planet is known as the Earth's twin due to its similar size?",
    options: ["Mars", "Venus", "Neptune", "Mercury"],
    answer: "Venus"
  },
  {
    id: 5,
    question: "What is the name of the fifth planet from the Sun?",
    options: ["Earth", "Saturn", "Jupiter", "Mars"],
    answer: "Jupiter"
  },
  {
    id: 6,
    question: "Which dwarf planet was once considered the ninth planet?",
    options: ["Pluto", "Ceres", "Haumea", "Eris"],
    answer: "Pluto"
  },
  {
    id: 7,
    question: "Which planet takes the longest time to orbit the Sun?",
    options: ["Neptune", "Uranus", "Saturn", "Jupiter"],
    answer: "Neptune"
  },
  {
    id: 8,
    question: "Which is the only planet known to support life?",
    options: ["Mars", "Venus", "Earth", "Saturn"],
    answer: "Earth"
  },
  {
    id: 9,
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn"
  },
  {
    id: 10,
    question: "What is the name of Earth's natural satellite?",
    options: ["Europa", "Phobos", "Moon", "Titan"],
    answer: "Moon"
  }
];

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