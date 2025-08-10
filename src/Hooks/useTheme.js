import { useEffect, useState } from 'react';

const useTheme = () => {
    
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);

   
    const toggleTheme = () => {

        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {

        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
    }, [theme]);

    return { theme, toggleTheme };
};

export default useTheme;