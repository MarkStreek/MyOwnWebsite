"use client"

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null

    if (theme === 'dark') {
        return (
            <div onClick={() => setTheme('light')} className="flex hover:bg-gray-700 rounded-md">
                <p className="text-gray-300 hover:text-white p-2 rounded-md">Theme</p>
                <FiSun className="w-4 h-4 mt-3" />
            </div>
        );


    }

    if (theme === 'light') {
        return (
            <div onClick={() => setTheme('dark')} className="flex hover:bg-gray-700 rounded-md">
                <p className="text-gray-300 hover:text-white p-2 rounded-md">Change
                    Theme</p>
                <FiMoon className="w-4 h-4 mt-3" />
            </div>
        );
    }

}