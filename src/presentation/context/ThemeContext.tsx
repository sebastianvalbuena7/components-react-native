import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { AppState, Appearance, useColorScheme } from "react-native";
import { ThemeColors, darkColors, lightColors } from "../../config/theme/theme";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    isDark: boolean;

    setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const colorScheme = useColorScheme();
    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

    const isDark = currentTheme === 'dark';
    const colors = isDark ? darkColors : lightColors;

    const setTheme = (theme: ThemeColor) => {
        setCurrentTheme(theme);
    }

    // useEffect(() => {
    //     if (colorScheme === 'dark') {
    //         setCurrentTheme('dark');
    //     } else {
    //         setCurrentTheme('light');
    //     }
    // }, [colorScheme]);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            const colorScheme = Appearance.getColorScheme();
            setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
        });

        return () => {
            subscription.remove();
        };
    }, []);

    return (
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
            <ThemeContext.Provider
                value={{
                    currentTheme,
                    colors,
                    setTheme,
                    isDark,
                }}
            >
                {children}
            </ThemeContext.Provider>
        </NavigationContainer>
    )
}