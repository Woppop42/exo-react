import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Title } from './Title.jsx'
import { Parag } from './Parag.jsx'
import { Image } from './Image.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Title />
    <Parag />
    <Image />
  </StrictMode>,
)
