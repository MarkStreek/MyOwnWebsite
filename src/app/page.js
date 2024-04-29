"use client";

import { Blockquote } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useTheme} from "next-themes";


export default function Home() {
    const {theme} = useTheme();

    const blockquoteClass = theme === 'dark'
        ? "my-4 border-l-4 border-gray-700 bg-gray-900 p-4 text-gray-300 font-mono text-1xl"
        : "my-4 border-l-4 border-gray-300 bg-gray-50 p-4 text-gray-700 font-mono text-1xl";

  return (
      <div className="xs:mt-10 sm:mt-10 md:mt-0">
          <div className="md:flex gap-4">
              <div className="w-1/3">
                  <Image
                      src="/foto.png"
                      alt="Mark van de Streek"
                      width={2850}
                      height={3800}
                      className="rounded-lg wborder-2 border-gray-300 dark:border-gray-700 md:block sm:hidden xs:hidden"
                  />
                  <br/>
              </div>
              <div className="w-2/3 sm:w-full xs:w-full">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Welcome to my website!
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                      My name is Mark van de Streek and I am 21 years old. I am a student at the University of Applied
                      Sciences in
                      Groningen, where I study Bioinformatics.

                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Currently, I am in my third year of the bachelor's degree. I am passionate about programming and I
                      am always
                      looking for new challenges.
                      <br/>
                  </p>
              </div>
          </div>
          <Blockquote className={blockquoteClass}>
              I like to create software and websites that are useful and user-friendly. Additionally I enjoy researching
              biological issues or questions.
              In the last couple of years, I gained experience in programming languages like Java, Python, JavaScript
              and
              R.
          </Blockquote>
          <p className="font-normal text-gray-700 dark:text-gray-400">
              This website is completely built by me. Do you want your own website or software? Feel free to contact me and discuss the possibilities!
          </p>
          <br/>
          <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              Contact me
          </h5>
          <Link href="mailto:mvdstreek2003@gmail.com"><p className="font-normal flex mt-2 text-gray-700 underline dark:text-gray-400"><IoIosMail className="m-1" />Mail</p></Link>
          <Link href="https://github.com/MarkStreek"><p className="font-normal flex mt-2 text-gray-700 underline dark:text-gray-400"><FaGithub className="m-1" />Github</p></Link>
          <Link href="https://linkedin.com/in/mark-van-de-streek-0a2b29232"><p className="font-normal flex mt-2 text-gray-700 underline dark:text-gray-400"><FaLinkedin className="m-1" />LinkedIn</p></Link>
          <Link href="https://www.instagram.com/Mark_streek/"><p className="font-normal flex mt-2 text-gray-700 underline dark:text-gray-400"><FaInstagram className="m-1" />Instagram</p></Link>
          <br /><br />
          <div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  My programming stats of the last 7 days
              </h5>
              <br />
              <div className="md:flex gap-3">
              <figure className="md:w-1/2 md:h-1/2 xs:w-full xs:h-1/2 sm:w-full sm:h-1/2 border-2 rounded-md">
                  <embed
                      src="https://wakatime.com/share/@018c4f64-612c-4de6-a00a-d1fa998cd7e1/5c34c540-8e6f-4645-8ae8-e0759b6e2dd3.svg"></embed>
              </figure>
              <figure className="md:w-1/2 md:h-1/2 xs:w-full xs:h-1/2 sm:w-full sm:h-1/2 border-2 rounded-md">
                  <embed
                      src="https://wakatime.com/share/@018c4f64-612c-4de6-a00a-d1fa998cd7e1/0d1183e5-b34e-4c0e-966c-bbdc31ab81e0.svg"></embed>
              </figure>
              </div>
          </div>
      </div>
  );
}
