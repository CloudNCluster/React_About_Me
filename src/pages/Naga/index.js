import './index.css';
import { useState } from 'react';

const Naga = () => {
    const [click, setClick] = useState(false);
    const buttonClickHandler = () => {
        setClick(prev => !prev);
    }
    return <>
    <h1 className="h1-tag"> This page Describes about Naga </h1>
    <p className="p-tag"> Unfortunately, This page doesn't have anything...</p>
    <button className='button' onClick={buttonClickHandler}> Click </button>
    <p> {!click ? 'Clicked..!' : 'Click Button'} </p>
    </>
}
export default Naga;