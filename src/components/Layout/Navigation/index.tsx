import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Hero from '../LandingSections/Hero';
import About from '../LandingSections/About';
import Services from '../LandingSections/Services';
import ArchitecturalServices from '../LandingSections/Architectural_services';
import Civil from '../LandingSections/Civil';
import Patners from '../LandingSections/Patners';
import Contact from '../LandingSections/Contact';

const Navigation = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/architectural_services" element={<ArchitecturalServices />} />
                <Route path="/civil" element={<Civil />} />
                <Route path="/partners" element={<Patners />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>
        </div>
    )
}

export default Navigation
