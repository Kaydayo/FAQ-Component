import React, { useState } from 'react';
import './accords.css'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'


const Accords = ({ title, content }) => {
    const [showSub, setShowSub] = useState(false)
    return <>
        <div className="place-side">
            <div className='side-accord'>
                <h5>{title}</h5>
                {!showSub && <AiOutlinePlusCircle className="button" onClick={() => setShowSub(!showSub)} />}
                {showSub && <AiOutlineMinusCircle className="button" onClick={() => setShowSub(!showSub)} />}
            </div>
            <div className="body-content">
                {showSub && <h6>{content}</h6>}
            </div>
        </div>
    </>;
};

export default Accords;
