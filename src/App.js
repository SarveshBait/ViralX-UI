import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSec from "./components/HeroSec";
import Card from "./components/Card";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import { useState } from "react";
import DiscoverPage from "./data/discoverpages"; // adjust path if needed
import Favorites from "./pages/FavoritePages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {

    const [selectedReel, setSelectedReel] = useState(null);

    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

  return (
    <Router>
        <Navbar/>

      <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
        <HeroSec/>
      
      {/* Explore Section */}
      <Card/>

      <div className="App">
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {!selectedReel ? (
        <DiscoverPage onSelect={setSelectedReel} />
      ) : (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Script Viewer</h1>
          <p>{selectedReel.title}</p>
          {/* You can add your script editing UI here */}
          <button
            onClick={() => setSelectedReel(null)}
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg"
          >
            Back to Discover
          </button>
        </div>
      )}
      </div>
    </div>  

        {/* Pages */}
        <main className="flex-grow p-6">
          <Routes>
            {/* <Route path="/" element={<h1>Welcome to ViralX 🚀</h1>} /> */}
            {/* <Route path="/" element={<HeroSec />} /> */}
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>© 2025 ViralX. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;



