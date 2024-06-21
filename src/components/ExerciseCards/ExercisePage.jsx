import React from 'react';
import { useParams } from 'react-router-dom';
import "./ExerciseCards.scss";

const ExercisePage = () => {
    const {id} = useParams();
    return (
        <div className='container aa'>
            {id}
        </div>
    )
}

export default ExercisePage;