import { Route, Routes} from 'react-router-dom';
import Home from './home';
import Quiz from './quiz';
import Results from './result';

function AppRoutes() {
    return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
    </Routes>
    )
}

export default AppRoutes;