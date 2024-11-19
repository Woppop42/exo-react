import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './EXO 1/App.jsx'
import { Title } from './Title/Title.jsx'
import { Parag } from './EXO 1/Parag.jsx'
import { Image } from './EXO 1/Image.jsx'
import { Parent } from './EXO 2/Parent/Parent.jsx'
import { Children } from './EXO 2/Children/Children.jsx'
import { Card } from './Card/Card.jsx'
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher.jsx'
import { MagicCounter } from './EXO 3/MagicCounter.jsx'
import { Timer } from './Timer/Timer.jsx'
// import { WindowWidthTracker } from './WindowWidthTracker/WindowWidthTracker.jsx'
import { ResponsiveBackground } from './EXO 4/ResponsiveBackground.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parent> <Children /> </Parent>
    <ResponsiveBackground />
    <Card />
    <ThemeSwitcher />
    <MagicCounter />
    <Timer />
  </StrictMode>,
)
