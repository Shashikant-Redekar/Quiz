import { useLocation } from "react-router-dom";
import '../Style/result.scss';

function Results() {
    const location = useLocation();
    const score = location.state?.score || 0;
    return(
        <div className="result">
            <h2 className="heading">Results</h2>
            <h1 className={score > 3? "P":"F"}>{score > 3? "Pass":"Fail"}</h1>
            <p className="score">Your score out of 10 is: {score}</p>
        </div>
    )
}

export default Results;