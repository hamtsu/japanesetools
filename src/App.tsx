import { useState } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Particles from "./pages/Particles";
import VerbConjugation from "./pages/conjugation/VerbConjugation";
import AdjectiveConjugation from "./pages/conjugation/AdjectiveConjugation";
import Kanji from "./pages/Kanji";

function App() {
  return (
    // <GlobalContext.Provider value={{ listView, setListView }}>
    // </GlobalContext.Provider>

    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kanji" element={<Kanji />} />
        <Route path="/conjugation/verb" element={<VerbConjugation />} />
        <Route
          path="/conjugation/adjectives"
          element={<AdjectiveConjugation />}
        />
        <Route path="/particles" element={<Particles />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
