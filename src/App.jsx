import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import HomePage from "./components/HomePage.jsx";
import AboutMe from "./components/interior-pages/AboutMe.jsx";
import Contact from "./components/interior-pages/Contact/Contact.jsx";
import Offer from "./components/interior-pages/Offer/Offer.jsx";
import Rodo from "./components/interior-pages/Rodo.jsx";
import Cooperate from "./components/interior-pages/Cooperate/Cooperate.jsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={'/offer'} element={<Offer/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'/cooperate'} element={<Cooperate/>}/>
                <Route path={"/about-me"} element={<AboutMe/>}/>
                <Route path={'/rodo'} element={<Rodo/>}/>
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </>

    )
}

export default App