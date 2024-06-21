import React from 'react';
import {NavLink} from 'react-router-dom';
import "./NotFound.scss";

const NotFound = () => {
    return (
        <div className='NotFound'>
            <p>Ничего не найдено :(</p>
            <NavLink to="/">
                <p>перейти на главную</p>
            </NavLink>
        </div>
    )
}

export default NotFound;