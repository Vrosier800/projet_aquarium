import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './pages/main';
import Home from './pages/home';
import GetAquariumTank from "./pages/aquariumTank/getAquariumTank";
import GetFishAndCoral from "./pages/fishAndCoral/getFishAndCoral";
import GetNote from "./pages/note/getNote";
import GetParameter from "./pages/parameter/getParameter"
import AddAquariumTankForm from "./pages/aquariumTank/postAquariumTank";
import AddFishForm from "./pages/fishAndCoral/postFish";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/accueil" element={<Home/>} />
                <Route path="/bac" element={<GetAquariumTank/>} />
                <Route path="/poissonsetcoraux" element={<GetFishAndCoral/>} />
                <Route path="/notes" element={<GetNote/>} />
                <Route path="/parametres" element={<GetParameter/>} />
                <Route path="/ajouterBac" element={<AddAquariumTankForm/>}/>
                <Route path="/ajouterPoisson" element={<AddFishForm/>}/>
            </Routes>
        </Router>
    );
};

export default App;