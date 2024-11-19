import { useState, useEffect } from "react";

export function MagicCounter()
{
    const [count, setCount] = useState(0);
    useEffect(() => {
        //Code s'éxécutant après le rendu du component
        document.title = `Compteur ${count}`
            //Return optionnel pour nettoyer les effets
    
    }, [ count ] // => Tableau de dépendances
    )
    const style = 
    {
        backgroundColor: count %5 === 0 ? '#D4F1F4' : '#FDEDEC'
    }
    function plusCount()
    {
        setCount(count + 1);
    }
    function lessCount()
    {
        setCount(count - 1);
    }
    function init()
    {
        setCount(0);
    }

    return(
        <>
        <p style={style}>{count %5 === 0 ? 'Nombre magique atteint ! ' + count : count}</p>
        <button onClick={plusCount}>Plus</button>
        <button onClick={lessCount}>Moins</button>
        <button onClick={init}>Réinitialiser</button>
        </>
    )
}