import { Link } from "react-router-dom";
import '../Style/home.scss'

function Home() {
 return(
    <div className="home">
        <div className="content">
            <p>Welcome to the Quiz of Solar System.</p>
            <Link to='/quiz'>
                <button className="startButton">Start Quiz</button>
            </Link>
        </div>
    </div>
 )
}

export default Home;