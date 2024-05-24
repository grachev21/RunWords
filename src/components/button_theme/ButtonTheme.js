import { useState, useEffect, useRef } from 'react';
import day from './icons/day.png';
import night from './icons/night.png';
import './styles.css';


export default function ButtonTheme() {

    const [Dark, setDark] = useState('light');
    const btnRef = useRef(null);

    useEffect(() => {

        if (Dark === 'dark') {
            document.querySelector('html').classList.remove('light');
            document.querySelector('html').classList.add('dark');
            btnRef.current.classList.add('dark-button-active');
        } else {
            document.querySelector('html').classList.remove('dark');
            document.querySelector('html').classList.add('light');
            btnRef.current.classList.remove('dark-button-active');
        }
    }, [Dark]);

    function switchDayNight() {
        setDark((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

    return (
        <div className='ButtonTheme'>
            <button ref={btnRef} className='ButtonTheme' onClick={switchDayNight}>
                <img className='icons' src={day} />
                <img className='icons' src={night} />
            </button>
            
        </div>
    )
}