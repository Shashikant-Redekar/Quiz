import { Link } from "react-router-dom";

function Home() {
 return(
    <div>
        <p>Welcome to the Quiz of Solar System.</p>
        <Link to='/quiz'>
            <button>Start Quiz</button>
        </Link>
    </div>
 )
}

export default Home;