import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar } from './Navbar/Navbar'
import { Home } from './Pages/Home'
import { Contact } from './Pages/Contact'
import { About } from './Pages/About'
import { Posts } from './Pages/Posts'
import { User } from './EXO 5/User'
import { Accueil } from './EXO 5/Accueil'
export function App()
{


    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" Component={Accueil}/>
                <Route path="/users" Component={User}/>
            </Routes>
        </BrowserRouter>
    )
}