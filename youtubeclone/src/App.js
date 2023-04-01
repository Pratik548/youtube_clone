import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/headerComponents/Header';
import Sidebar from './components/sidebarComponents/Sidebar';
import RecommendedVideo from './components/recommendedVideoComponents/RecommendedVideo'



function App() {
    return (
        <div className="App">
            <Router>
                <Header>
                    <Routes>
                        <Route path='/'>
                            <div className="app__mainpage">
                                <Sidebar />
                                <RecommendedVideo />
                            </div>
                        </Route>
                    </Routes>
                </Header>
            </Router>
        </div>
    );
}

export default App;
