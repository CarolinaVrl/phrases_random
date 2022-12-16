import React from 'react';
import phrases from './phrases.json'
import { useState } from 'react';

import colours from "./colours.json"

const QuoteBox = () => {
    const [index, setIndex] = useState(Math.floor(Math.random() * phrases.length))
    const phrase = phrases[index].quote
    const autor = phrases[index].author
    
    const next = () => {
        setIndex(Math.floor(Math.random() * phrases.length))
        setCharac(Math.floor(Math.random() * phrases.length))

    }
    const fontText = ["#1D1B1F", "#373942","#4E5B68","#64818C", "#F6B562"]
    const randomText = fontText[Math.floor(Math.random() * fontText.length )]
    const randomcolor =colours[Math.floor(Math.random() * colours.length)]
    document.body.style = `background: ${randomcolor} `
  
    

    return (
        <div className='container' style={{color: randomcolor}}>
            <h1><span className='marks' ><i className="fa-solid fa-quote-left"></i></span>{phrase}</h1>
            <div className='containerbtn'>
             <p>{autor}</p>
             <button className='btnNext' style={{background: randomcolor}} onClick={next}> <i className="fa-solid fa-shuffle" style={{color: randomText}}></i> </button>
            </div>
            

        </div>
    );
};

export default QuoteBox;