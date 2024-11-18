import { useState } from "react";

export function ThemeSwitcher()
{
    const [theme, setTheme] = useState('light');
    function toggleTheme()
    {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const themeStyle = 
    {
        backgroundColor: theme === 'light' ? '#FFF' : '#333',
        color: theme === 'light' ? "#333" : '#FFF',
        padding: '10px',
        borderRadius: '5px'
    }

    return (
        <div style = {themeStyle}>
            <button onClick={toggleTheme}>Changer de thème</button>

        </div>
    )
}