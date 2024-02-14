//in custom hook functions we have to type 'use' in first in the function name
//in components functions we have to type the first letter as capital
//video and timeline
// https://www.youtube.com/watch?v=jx5hdo50a2M&list=LL&index=14&t=563s
// 1:29:17
import React, { createContext, useContext, useState} from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

//component function
export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [isClicked, seIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeCart, setActiveCart] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [notification, setNotification] = useState(false);
    const [chat, setChat] = useState(false);
    const [user, setUser] = useState(true);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem("themeMode", e.target.value);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem("colorMode", color);
    }

    const handleClick = (clicked) => {
        seIsClicked({ ...initialState, [clicked]:(true)});
}

    return (
        <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, seIsClicked,
         handleClick, screenSize, setScreenSize, currentColor,
          currentMode, themeSettings, setThemeSettings, setMode, setColor,
           activeCart, setActiveCart, searchBar, setSearchBar, notification,
            setNotification, chat, setChat, user, setUser}}>
            {children}
        </StateContext.Provider>
    )
}
//custom hook function 
export const useStateContext = () => useContext(StateContext);

  