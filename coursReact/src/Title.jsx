import './Title.css'

export function Title(){
    const bool = true;

    return(
        <>
        <h1 className={bool ? "blue" : "red"}>Un titre de couleur</h1>
        </>
    )
}