import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {

    const [theme, setTheme] = useState('Hello Context')

    return (
        <ThemeContext.Provider value={{theme}}>
            {props.children}
        </ThemeContext.Provider>
    )

}
export default ThemeContextProvider;
