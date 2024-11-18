import { Farewell } from '../Farewell/Farewell';
import { Card } from '../Card/Card';
import './Title.css'

export function Title(){
    const bool = true;

    return(
        <>
        <h1 className={bool ? "blue" : "red"}>Un titre de couleur</h1>
        <Farewell name="Paul">Au revoir</Farewell>
        <Card>Bonjour !</Card>
        <Card>Au revoir</Card>
        <Card>
            <Farewell name="Jean">Bye Bye</Farewell>
        </Card>
        </>
    );
}