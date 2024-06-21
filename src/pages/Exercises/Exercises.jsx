import React from 'react';
import "./Exercises.scss";

import ExerciseCards from '../../components/ExerciseCards/ExerciseCards';

const Exercises = () => {
    return (
        <div className='container'>
            <div className="header_page">
                <p>Упражнения</p>
            </div>
                
            <ExerciseCards/>
        </div>
    )
}

export default Exercises;