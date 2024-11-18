import './Card.css'
import { useState } from 'react'
export function Card(props){
    const [magicNumber, setMagicNumber] = useState(0);
    return(
        <div className='card'>
            <h1>Le nombr'e magique est : {magicNumber }</h1>
            <button onClick={() => setMagicNumber(magicNumber + 1)}>Augmente le nombre magique</button>
        </div>
    )
}