import React from 'react';
import Link from "next/link";
import {ThemeSwitcher} from "@/app/components/ThemeSwitch";

/**
 * Function that returns the Navbar component.
 * This navbar component is used in the root layout component.
 * The navbar is visible on "smaller" screens.
 * When the screen is below a certain width, the navbar is visible.
 *
 * @returns {Element} The Navbar component.
 */
export default function Navbar() {
    return (
        <div className="bg-emerald-700 text-white w-full xs:flex sm:flex md:hidden h-16 items-center justify-between px-2 fixed top-0 left-0 z-10">
            <Link href="/"><span className="text-2xl font-extrabold">Mark</span></Link>
            <nav>
                <ul className="flex space-x-3">
                    <li>
                        <Link href="/projects">
                            <p className="text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded-md">Projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume">
                            <p className="text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded-md">Resumé</p>
                        </Link>
                    </li>
                    <li>
                        <ThemeSwitcher/>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
