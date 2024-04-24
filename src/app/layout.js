import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const ibmPlexMono = IBM_Plex_Mono({weight: "400", style: "normal", subsets: ["latin"]});

export const metadata = {
  title: "Mark V/D Streeks Site",
  description: "This is the personal site of Mark V/D Streek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlexMono.className}>
      <body>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            {/* Sidebar for bigger screens */}
            <div className="flex-none w-48 sm:hidden xs:hidden md:block">
                <Sidebar/>
            </div>
            {/* Navbar for smaller screens */}
            <div className="w-full xs:flex sm:flex md:hidden bg-gray-800 h-16 text-white items-center justify-normal">
                <Navbar/>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12 ">{children}</div>
        </div>
        </body>
    </html>
  );
}
