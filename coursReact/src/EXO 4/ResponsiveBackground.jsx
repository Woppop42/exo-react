import { useEffect, useState} from 'react';

export function ResponsiveBackground(){
    const [color, setColor] = useState('#ADD8E6');
    const [width, setWidth] = useState(1920);
    useEffect(() => {
        const handleSize = () => {
            setWidth(window.innerWidth);
            width >= 800 ? setColor('#ADD8E6') : setColor('#FFC0CB');
            return width;
        }
        window.addEventListener('resize', handleSize);
        return() =>{
            window.removeEventListener('resize', handleSize);
        }
    }, [])
    const style = {
        backgroundColor: color
    }
    return <p style={style}>Largeur de la fenêtre : {width}</p>
}