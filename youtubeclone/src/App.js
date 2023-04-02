import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/headerComponents/Header';
import RecommendedVideo from './components/recommendedVideoComponents/RecommendedVideo';
import Sidebar from './components/sidebarComponents/Sidebar';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={
                        <div className="app__mainpage">
                            <Sidebar />
                            <RecommendedVideo />
                        </div>
                    }>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
