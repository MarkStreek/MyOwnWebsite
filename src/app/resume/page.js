import Link from "next/link";

export default function Home() {
    return (
        <div className="xs:mt-16 sm:mt-16 md:mt-0">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                My educational background
            </h5>
            <br/>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September
                        2015 - June 2019
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Preparatory Secondary Vocational
                        Education (VMBO)</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        I started my education at the preparatory secondary vocational education at the Carolus Clusius
                        College in Zwolle. I chose the technical profile and graduated in 2019.
                    </p>
                </li>
                <li className="mb-10 ms-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        September 2019 - June 2021
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Senior general secondary education (HAVO)
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        After my preparatory secondary vocational education, I continued my education at the Carolus
                        Clusius College in Zwolle. I chose the technical profile (physics, chemistry and biology) and
                        graduated in 2021.
                    </p>
                </li>
                <li className="mb-10 ms-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        September 2021 - June 2025
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Bioinformatics Bachelors degree
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        I started my higher professional education at the Hanze University of Applied Sciences in
                        Groningen. I chose the study Bioinformatics and graduated in 2025. During my study, I
                        specialized myself in software development and data analysis in the field of bioinformatics.
                        Learn more about my projects and experience below.
                    </p>
                    <Link href="/projects"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        Learn more about the projects <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true"
                                                           xmlns="http://www.w3.org/2000/svg" fill="none"
                                                           viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg></Link>
                </li>
            </ol>
            <hr className="w-full h-1 mx-auto my-8 bg-gray-300 border-0 rounded md:my-4 dark:bg-gray-700"/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                My working experience
            </h5>
            <br/>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        April 2018 - February 2023
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Sales Associate at local supermarket Boni
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        I worked as a sales associate at the local supermarket, Boni in Wezep. I managed a team of shelf
                        stockers for 5 years and gained a lot of experience in sales, but also in cash register work.
                    </p>
                </li>
                <li className="mb-10 ms-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        March 2023 - present
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        E-commerce delivery driver at Plus supermarket
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        I work as a delivery driver at the local Plus supermarket in Wezep. I deliver groceries to
                        customers who order online, but also collecting groceries. I have been working here since 2023.
                    </p>
                </li>
            </ol>
        </div>
);
}