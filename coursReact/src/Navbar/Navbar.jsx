import { Link } from 'react-router-dom';
export function Navbar()
{
    return(
       <> <Link to="/">Accueil</Link> | <Link to="/users">Users</Link>
        </>
    )
}