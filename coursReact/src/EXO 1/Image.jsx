export function Image(){
    const bool = true;
    return(
        <>
        <img src={bool ? "https://www.zoologiste.com/images/main/lama.jpg" : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTq1KZI9GbrTXSAmN0cj7bxaR7lweiUfwxRbGiVgH8SfSVKJyH1"} atl="Image de lama"/>
        </>
    )
}