import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Calculator from './components/Calculator';

import './styles/index.css';

function App() {
    return (
        <div className="flex flex-col min-h-screen ">
            <Navbar />
            <main className="mt-6 flex-grow container mx-auto p-4 bg-red border border-stroke bg-white shadow-default">
                <h2 className="text-2xl font-bold mb-4 text-center border-b border-stroke pb-4">Check Your Eligibility</h2>
                <div className=""><Calculator /></div>
                
            </main>
            <Footer />
        </div>
    );
}

export default App;
