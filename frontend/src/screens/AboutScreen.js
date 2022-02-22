import React from 'react';
import { MDBRow } from "mdb-react-ui-kit";
import AboutCarousel from '../components/AboutCarousel';



const About = () => {
    return (
        <div className="d-grid gap-3">
            <h1 className='text-center' style={{color: 'green'}}>LIGHT MUTLI SERVICES</h1>
            <MDBRow className="mt-5" style={{backgroundColor: 'snow'}}>
            <AboutCarousel/>
            </MDBRow>
        </div>
    )
}

export default About
