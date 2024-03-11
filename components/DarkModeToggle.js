import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { LuSunMedium } from 'react-icons/lu';
import { LuMoon } from 'react-icons/lu';

const DarkModeToggle = () => {
    const [ mounted, setMounted ] = useState(false);
    const {theme, setTheme} = useTheme()

    const currentTheme = theme === 'system' ? systemTheme : theme;

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Fix hydration mismatch error
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;

    return (
      <div
        className="w-20 h-9 border border-grey-300 rounded-full flex items-center cursor-pointer"
        onClick={toggleDarkMode}
      >
        <div
          className={`transition-transform ${
            isDarkMode ? "translate-x-8" : ""
          }`}
        >
          {!isDarkMode ? (
            <LuMoon
              className={`${
                currentTheme === "dark" ? "text-white" : "text-blue-600"
              } font-bold text-2xl mx-2`}
              onClick={setTheme("dark")}
            />
          ) : (
            <LuSunMedium
              className={`${
                currentTheme === "dark" ? "text-white" : "text-blue-600"
              } text-2xl mx-2`}
              onClick={setTheme("light")}
            />
          )}
        </div>
      </div>
    );
};

export default DarkModeToggle;
