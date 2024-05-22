import React from 'react';
import { List } from "flowbite-react";
import { Button } from "@nextui-org/react";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import Link from "next/link";



export default function Home() {
    return(
        <div className="xs:mt-16 sm:mt-16 md:mt-0">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hardware Catalog for Software Company
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                This project was a exercise for the software company Quintor B.V. Groningen. The goal was to create a
                hardware catalog where hardware components could be added to a database. Additional features were the
                ability to add specifications to the hardware components and to add values to these specifications.
                <br/><br/>
                The application is especially used by system managers to keep track of the hardware components in the
                company. If a component is going to a employee, the system can manage this.
                <br/>
                When a employee already has a component and the employee want a new one, the application can create a
                request to the chief technology officer to approve the request. This request must be made for a second
                loan
                <br/><br/>
            </p>
            <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                Used technologies for this project
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                For this project, the following technologies/frameworks were used:
            </p>
            <br/>
            <List className="ml-6">
                <List.Item icon={FaJava}>Spring Boot (Java)</List.Item>
                <List className="ml-10">
                    <List.Item icon={FaJava}>JPA</List.Item>
                    <List.Item icon={FaJava}>Jakarta</List.Item>
                    <List.Item icon={FaJava}>Lombok</List.Item>
                </List>
                <List.Item icon={IoLogoJavascript}>REACT.js (Javascript)</List.Item>
                <List className="ml-10">
                    <List.Item icon={IoLogoJavascript}>NEXTUI</List.Item>
                </List>
                <List.Item icon={SiMysql}>MySQL database</List.Item>
            </List>
            <br/><br />
            <Link href="/projects">
                <Button>
                    Go back to projects
                </Button>
            </Link>
        </div>
    );
}