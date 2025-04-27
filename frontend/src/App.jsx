import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './pages/main';
import Home from './pages/home';
import AquariumTank from "./pages/aquariumTank";
import FishAndCoral from "./pages/fishAndCoral";
import Note from "./pages/note";
import Parameter from "./pages/parameter"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/accueil" element={<Home/>} />
                <Route path="/bac" element={<AquariumTank/>} />
                <Route path="/poissonsetcoraux" element={<FishAndCoral/>} />
                <Route path="/notes" element={<Note/>} />
                <Route path="/parametres" element={<Parameter/>} />
            </Routes>
        </Router>
    );
};

export default App;