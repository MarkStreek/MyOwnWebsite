import React from 'react';
import Link from "next/link";
import { Dropdown} from "flowbite-react";

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
                        <Link href="/projects"
                              className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-3 rounded-md">Projects</Link>
                    </li>
                    <li>
                        <Link href="/resume"
                              className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-3 rounded-md">Resumé</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
