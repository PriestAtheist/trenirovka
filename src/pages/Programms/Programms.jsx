import React from 'react';
import "./Programms.scss";
import { PiSmileyNervousFill } from "react-icons/pi";

import { FaFire } from "react-icons/fa";




const Programms = () => {
    return (
        <div className='container'>
            <div className="header_page">
                <p>Программы</p>
            </div>

            <div className='programms_cards'>
                <div className='programm_card'>
                    <div className='programm_card_left'>
                        <img src="/img/pres2.png" alt="" />
                        <div className='programm_card_text'>
                            <p className='programm_card_left_title'>Программа #1</p>
                            <div className='title2'>
                                <p className='programm_card_left_desc'><span><PiSmileyNervousFill /></span>Hard</p>
                                <p className='programm_card_left_desc'><span><FaFire /></span>~144 kCal</p>
                            </div>
                        </div>
                    </div>
                    <div className='programm_time'>
                        <p>27</p>
                        <p>мин</p>
                    </div>
                </div>
                <div className='programm_card'>
                    <div className='programm_card_left'>
                        <img src="/img/pres2.png" alt="" />
                        <div className='programm_card_text'>
                            <p className='programm_card_left_title'>Программа #1</p>
                            <div className='title2'>
                                <p className='programm_card_left_desc'><span><PiSmileyNervousFill /></span>Hard</p>
                                <p className='programm_card_left_desc'><span><FaFire /></span>~144 kCal</p>
                            </div>
                        </div>
                    </div>
                    <div className='programm_time'>
                        <p>27</p>
                        <p>мин</p>
                    </div>
                </div>
                <div className='programm_card'>
                    <div className='programm_card_left'>
                        <img src="/img/pres2.png" alt="" />
                        <div className='programm_card_text'>
                            <p className='programm_card_left_title'>Программа #1</p>
                            <div className='title2'>
                                <p className='programm_card_left_desc'><span><PiSmileyNervousFill /></span>Hard</p>
                                <p className='programm_card_left_desc'><span><FaFire /></span>~144 kCal</p>
                            </div>
                        </div>
                    </div>
                    <div className='programm_time'>
                        <p>27</p>
                        <p>мин</p>
                    </div>
                </div>
                <div className='programm_card'>
                    <div className='programm_card_left'>
                        <img src="/img/pres2.png" alt="" />
                        <div className='programm_card_text'>
                            <p className='programm_card_left_title'>Программа #1</p>
                            <div className='title2'>
                                <p className='programm_card_left_desc'><span><PiSmileyNervousFill /></span>Hard</p>
                                <p className='programm_card_left_desc'><span><FaFire /></span>~144 kCal</p>
                            </div>
                        </div>
                    </div>
                    <div className='programm_time'>
                        <p>27</p>
                        <p>мин</p>
                    </div>
                </div>
                <div className='programm_card'>
                    <div className='programm_card_left'>
                        <img src="/img/pres2.png" alt="" />
                        <div className='programm_card_text'>
                            <p className='programm_card_left_title'>Программа #1</p>
                            <div className='title2'>
                                <p className='programm_card_left_desc'><span><PiSmileyNervousFill /></span>Hard</p>
                                <p className='programm_card_left_desc'><span><FaFire /></span>~144 kCal</p>
                            </div>
                        </div>
                    </div>
                    <div className='programm_time'>
                        <p>27</p>
                        <p>мин</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programms;