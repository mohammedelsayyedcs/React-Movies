import { createContext, useState } from 'react'

// Context Global Variable
const AppSettings = createContext();

// Create the component
const AppSettingsContext = ({ children }) => {
    // Variables for our data
    const [theme, setTheme] = useState({ themeIcon: 'bi bi-sun text-warning', themeStyle: 'dark' });
    const [user, setUser] = useState('Mohamed');
    const [dir, setDir] = useState('ltr');

    // Methods to change the variables values
    const changeTheme = (val) => {
        setTheme(val)
    }

    const changeUser = (val) => {
        setUser(val)
    }

    const changeDir = (val) => {
        setDir(val)
    }

    return (
        <AppSettings.Provider value={{ theme, changeTheme, user, changeUser, dir, changeDir }}>
            {children}
        </AppSettings.Provider>
    )
}

export { AppSettingsContext, AppSettings }

