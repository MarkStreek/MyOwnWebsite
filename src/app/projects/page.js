import React from "react";
import { Button, Card } from "flowbite-react";
import Link from "next/link";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpringboot, SiRstudio, SiPrometheus, SiLatex} from "react-icons/si";
import { FaJava, FaPython } from "react-icons/fa";
import { GiDna2 } from "react-icons/gi";

export default function MyProjects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:break-after-auto xs:mt-16 sm:16 md:mt-0">
            <Card className="pr-3 relative z-0 w-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Hardware Catalog for Software Company
                </h5>
                <div className="flex items-center">
                    <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
                    <div className="flex px-3 gap-2 text-gray-500 dark:text-gray-400">
                        <IoLogoJavascript/>
                        <SiSpringboot/>
                        <FaJava />
                    </div>
                    <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    During my education, I created a hardware catalog for Quintor B.V. Groningen. In a period of
                    approximately 20 weeks, I created a catalog where hardware components could be added to a database.
                </p>
                <Link href="/projects/hardware-catalog">
                    <Button className="w-full">
                        Read more
                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </Link>
            </Card>
            <Card className="pr-3 relative z-0 w-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    System monitoring site for Hanze Bioinformatics Department
                </h5>
                <div className="flex items-center">
                    <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
                    <div className="flex px-3 gap-2 text-gray-500 dark:text-gray-400">
                        <IoLogoJavascript/>
                        <FaJava/>
                        <SiPrometheus/>
                    </div>
                    <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    In my third year bachelor, I created a system monitoring site for the Hanze Bioinformatics. This was
                    my first project where I created a full-stack application. The project was done with 2 other
                    students.
                </p>
                <Link href="/projects/system-monitoring">
                    <Button className="w-full">
                        Read more
                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </Link>
            </Card>
            <Card className="pr-3 relative z-0 w-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Gene expression analysis analysis of Smokers and E-smokers
                </h5>
                <div className="flex items-center">
                    <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
                    <div className="flex px-3 gap-2 text-gray-500 dark:text-gray-400">
                        <SiRstudio />
                        <SiLatex />
                        <GiDna2 />
                    </div>
                    <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    In my second year, I did a study on gene expression of smokers and e-smokers. I discovered genes
                    that were differentially expressed in e-smokers compared to smokers. These genes were playing a role
                    in the creation of tRNA.
                </p>
                <Link href="/projects/gene-expression-analysis">
                    <Button className="w-full">
                        Read more
                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </Link>
            </Card>
            <Card className="pr-3 relative z-0 w-full">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Next-generation sequencing data analysis pipeline
                </h5>
                <div className="flex items-center">
                    <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
                    <div className="flex px-3 gap-2 text-gray-500 dark:text-gray-400">
                        <FaPython />
                        <GiDna2 />
                    </div>
                    <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    In my second year, I re-created a bad performing pipeline for the analysis of next-generation
                    sequencing data. The pipeline was re-created in Python and could handle single-end and paired-end
                    data.
                </p>
                <Link href="/projects/ngs-pipeline">
                    <Button className="w-full">
                        Read more
                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </Link>
            </Card>
        </div>

    );
}