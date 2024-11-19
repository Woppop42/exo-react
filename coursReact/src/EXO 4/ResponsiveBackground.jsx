import { useEffect, useState} from 'react';

export function ResponsiveBackground(){
    const [color, setColor] = useState(window.innerWidth >= 800 ? '#ADD8E6' : '#FFC0CB');
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleSize = () => {
            setWidth(window.innerWidth);
            setColor(window.innerWidth >= 800 ? '#ADD8E6' : '#FFC0CB');
 
        }
        window.addEventListener('resize', handleSize);

        return() =>{
            window.removeEventListener('resize', handleSize);
        }
    }, [])
    return <p style={{backgroundColor: color}}>Largeur de la fenêtre : {width}</p>
}