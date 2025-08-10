import { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const themeInfo = useTheme();

    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;