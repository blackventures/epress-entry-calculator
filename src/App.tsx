import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import Calculator2 from './components/Calculator2';  // Import Calculator2
import FamilyComponent from './components/Family';  // Import FamilyComponent if you want to use it

import './styles/index.css';

function App() {
    const [maritalStatus, setMaritalStatus] = useState('');  // Initialize maritalStatus state
    return (
        <div className="flex flex-col min-h-screen ">
            <Navbar />
            <main className="mt-6 flex-grow container mx-auto p-4 bg-red border border-stroke bg-white shadow-default">
                <h2 className="text-2xl font-bold mb-4 text-center border-b border-stroke pb-4">Check Your Eligibility</h2>
                {/* Integrate FamilyComponent */}
                <FamilyComponent setMaritalStatus={setMaritalStatus} />
                
                {/* Integrate Calculator2 */}
                <hr className="my-6 border-t border-stroke" />
                <h3 className="text-xl font-bold mb-4 text-center">Calculator 2</h3>
                <div className=""><Calculator2 /></div>

            </main>
            <Footer />
        </div>
    );
}

export default App;
