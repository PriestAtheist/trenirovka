import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./ExerciseCards.scss";

const ExerciseCards = () => {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('https://6675600ca8d2b4d072efc625.mockapi.io/exercises')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);
    return (
        <div className='exercises_cards'>
            {
            exercises.map(exercise => (
                <NavLink key={exercise.id} className='exercises_card' to={`/exercises/${exercise.id}`}>
                    <div className='exercises_card_text'>
                        <p>{exercise.name}</p>
                        <p>25 упражнений</p>
                    </div>
                    <img className='exercise_card_img' src={exercise.image} alt="" />
                </NavLink>
            ))
        }
        </div>
    )
}

export default ExerciseCards;