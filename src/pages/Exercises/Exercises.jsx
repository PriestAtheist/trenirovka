import React from 'react';
import "./Exercises.scss";

const Exercises = () => {
    return (
        <div className='container'>
            <div className="header_page">
                <p>Упражнения</p>
            </div>

            <div className='exercises_cards'>
                <div className='exercises_card'>
                    <div className='exercises_card_text'>
                        <p>Пресс</p>
                        <p>25 упражнений</p>
                    </div>
                    <img className='exercise_card_img' src="/img/pres2.png" alt=""/>
                </div>
                <div className='exercises_card'>
                    <div className='exercises_card_text'>
                        <p>Пресс</p>
                        <p>25 упражнений</p>
                    </div>
                    <img className='exercise_card_img' src="/img/pres2.png" alt=""/>
                </div>
                <div className='exercises_card'>
                    <div className='exercises_card_text'>
                        <p>Пресс</p>
                        <p>25 упражнений</p>
                    </div>
                    <img className='exercise_card_img' src="/img/pres2.png" alt=""/>
                </div>
                <div className='exercises_card'>
                    <div className='exercises_card_text'>
                        <p>Пресс</p>
                        <p>25 упражнений</p>
                    </div>
                    <img className='exercise_card_img' src="/img/pres2.png" alt=""/>
                </div>
                <div className='exercises_card'>
                    <div className='exercises_card_text'>
                        <p>Пресс</p>
                        <p>25 упражнений</p>
                    </div>
                    <img className='exercise_card_img' src="/img/pres2.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Exercises;