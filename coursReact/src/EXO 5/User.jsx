import axios from 'axios';
import { useState, useEffect} from 'react'

export function User()
{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        const fetchUsers = async () =>{
            try{
                const res = await axios.get('https://jsonplaceholder.org/users');
                setData(res.data);
                setLoading(false);
                console.log('succès de la requête.');

            }catch(err){
                console.log(err);
            }
        }
        fetchUsers();
    }, [])
    if (loading) {
        return <p>Chargement des données...</p>;
      }
    return(<div>
        <h1>Liste des Users</h1>
        <ul>
            {data.map((item) => {

                return <li key={item.id}>{item.email}</li>
            }
        )}
        </ul>
    </div>);
}