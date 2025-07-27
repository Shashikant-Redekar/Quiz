import { useLocation } from "react-router-dom";

function Results() {
    const location = useLocation();
    const score = location.state?.score || 0;
    return(
        <div>
            <h2>Results</h2>
            <p>Your score out of 10 is:{score}</p>
        </div>
    )
}

export default Results;