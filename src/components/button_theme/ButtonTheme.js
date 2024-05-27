import { useState, useEffect, useRef } from 'react';
import day from './icons/day.png';
import night from './icons/night.png';
import './styles.css';



export default function ButtonTheme() {

    const [Dark, setDark] = useState('light');
    const btnRef = useRef(null);

    useEffect(() => {

        if (Dark === 'dark') {
            document.querySelector('html').classList.add('dark');
            btnRef.current.setAttribute('style', 'background: black; left: 45px; transition: .3s;');

        } else {
            document.querySelector('html').classList.remove('dark');
            btnRef.current.removeAttribute('style');
        }
    }, [Dark]);

    function switchDayNight() {
        setDark((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

    return (
            <button className='ButtonTheme' onClick={switchDayNight}>
                <img className='icons-day' src={day} />
                <img className='icons-night' src={night} />
                <div ref={btnRef} className='ball'></div>
            </button>

    )
}