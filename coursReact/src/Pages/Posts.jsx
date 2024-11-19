import axios from 'axios';
import { useState, useEffect} from 'react';

export function Posts()
{
    const [data, setData ] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setData(res.data);
                console.log('API Call Success.')
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [])
    return(<div>
        <h1>Liste des posts</h1>
        <ul>
            {data.map((item) => {

                return <li key={item.id}>{item.title}</li>
            }
        )}
        </ul>
    </div>);
}