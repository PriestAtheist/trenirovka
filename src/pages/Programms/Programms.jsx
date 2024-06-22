import React from 'react';
import "./Programms.scss";
import ProgrammCard from '../../components/ProgrammCard/ProgrammCard';




const Programms = () => {
    return (
        <div className='container'>
            <div className="header_page">
                <p>Программы</p>
            </div>
            <div className='programms_cards' >
                <ProgrammCard/>
                <ProgrammCard/>
                <ProgrammCard/>
                <ProgrammCard/>
                <ProgrammCard/>
                <ProgrammCard/>
                <ProgrammCard/>
                <ProgrammCard/>
                <ProgrammCard/>
            </div>
            
        </div>
    )
}

export default Programms;