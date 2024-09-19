import React from 'react'
import Hero from '../LandingSections/Hero'
import About from '../LandingSections/About'
import Services from '../LandingSections/Services'
import ArchitecturalServices from '../LandingSections/Architectural_services'
import Civil from '../LandingSections/Civil'
import Patners from '../LandingSections/Patners'
import Contact from '../LandingSections/Contact'

const Sections = () => {
    return (
        <div style={{
            // marginTop: 100
        }}>
            <Hero />
            <About />
            <ArchitecturalServices />
            <Civil />
            <Patners />
            <Contact />
        </div>
    )
}

export default Sections
