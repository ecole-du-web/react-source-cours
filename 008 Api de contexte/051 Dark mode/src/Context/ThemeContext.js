import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {

    const [theme, setTheme] = useState(false)

    const toggleTheme = () => {
        setTheme(!theme)
    }

    if(theme){
        document.body.classList.add('dark-body');
    } else {
        document.body.classList.remove('dark-body');
    }

    return (
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {props.children}
        </ThemeContext.Provider>
    )

}
export default ThemeContextProvider;
