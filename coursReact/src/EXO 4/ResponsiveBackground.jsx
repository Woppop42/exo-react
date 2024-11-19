import { useEffect, useState} from 'react';

export function ResponsiveBackground(){
    const [color, setColor] = useState('#ADD8E6');
    useEffect(() => {
        const handleSize = () => {
            let size = window.innerWidth;
            size >= 800 ? setColor('#ADD8E6') : setColor('#FFC0CB');
            return size;
        }
        window.addEventListener('resize', handleSize);
        return() =>{
            window.removeEventListener('resize', handleSize);
        }
    }, [])
    const style = {
        backgroundColor: color
    }
    return <p style={style}>Largeur de la fenêtre</p>
}