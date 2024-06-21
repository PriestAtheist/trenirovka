import React from 'react';
import "./Profile.scss";

const Profile = () => {
    return (
        <div className='container'>
            <div className="header_page">
                <p>Профиль</p>
            </div>

            <div className='profile_chetchik'>
                <div className='profile_xz'>
                    <p>0</p>
                    <p>Тренировок</p>
                </div>
                <div className='profile_xz'>
                    <p>0</p>
                    <p>Программ</p>
                </div>
                <div className='profile_xz'>
                    <p>28</p>
                    <p>Упражнений</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;