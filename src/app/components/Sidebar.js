import React from 'react';
import Link from "next/link";

/**
 * Function that return the Sidebar component.
 * This sidebar component is used in the root layout component.
 * It contains the navigation links to the home and about page.
 * The sidebar is only visible on "bigger" screens.
 *
 * @returns {JSX.Element} The Sidebar component.
 */
export default function Sidebar() {
    return (
        <div className="h-screen bg-emerald-700 text-white w-48 space-y-6 py-7 px-2 fixed inset-y-0 left-0 overflow-auto">
            <div className="flex items-center space-x-4">
                <Link href="/"><span className="text-2xl font-extrabold">Mark Van de Streek</span></Link>
            </div>
            <nav>
                <ul className="space-y-3">
                    <li>
                        <Link href="/projects"
                              className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-3 rounded-md">Projects</Link>
                    </li>
                    <li>
                        <Link href="/resume"
                              className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-3 rounded-md">Resumé</Link>
                    </li>
                </ul>
                <ul className="flex space-x-1 fixed bottom-0 mb-4">
                    <li>
                        <Link href="https://github.com/MarkStreek"
                              className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-3 rounded-md">Github</Link>
                    </li>
                    <li>
                        <Link href="https://linkedin.com/in/mark-van-de-streek-0a2b29232"
                              className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-3 rounded-md">LinkedIn</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}