// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './index.css'; // Ensure you're importing your Tailwind CSS here

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <footer className="text-center mt-4">
                    <Link to="/contact">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded">Contact Me</button>
                    </Link>
                </footer>
            </div>
        </Router>
    );
};

export default App;