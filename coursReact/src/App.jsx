export default function App(){
  const name = "Gabriel";
  const fruits = ["banene", "pomme", "poire"];
  const isLoggedIn = true;
  const userGreeting = <h2>{isLoggedIn ? "Bienvenue chef." : "Non connecté."}</h2>

  const handleClick = () =>{
    alert('le bouton a été utilisé.');
  }
  return (
    <>
  <h1 onClick={handleClick} className={isLoggedIn ? "blue" : "red"}>Bonjour {name}</h1>
  <ul>
    {
      fruits.map(
        fruit => <li key={fruit}>{fruit}</li>
      )
    }
  </ul>
  {userGreeting}
  </>);
}



