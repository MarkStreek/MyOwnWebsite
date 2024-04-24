import Link from "next/link";
import {Button, List} from "flowbite-react";
import {FaJava} from "react-icons/fa";
import {IoLogoJavascript, IoServerSharp} from "react-icons/io5";
import {SiMysql, SiThymeleaf, SiPrometheus} from "react-icons/si";



export default function Home() {
    return (
        <div className="xs:mt-16 sm:mt-16 md:mt-0">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                System monitoring site for Hanze Bioinformatics Department
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                The old-fashioned monitoring system of the Hanze Bioinformatics Department was outdated and not working
                anymore.
                As a exercise for the third year of my bachelor, I created a new system monitoring site with two other
                students.
                <br/><br/>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                The site is used to monitor all the pc's and servers in the department. Additionally,
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                the site has a functionality to view classrooms maps and to see which pc's are up and running.
                The map functionality is dynamically build using a configuration file. This way, the department can
                easily change the map if needed.
                <br/><br/>
                The Frontend of the site is build with HTML and Javascript. The requests are caught by a Java Servlet-based backend.
                The backend requests to the prometheus server to get the data. The data is then processed and send to the frontend.
            </p>
            <br />
            <Link href="https://github.com/MarkStreek/Bioinf-Status-Page" className="underline">
                <p className="font-normal text-gray-700 dark:text-gray-400">Watch this project on Github</p>
            </Link>
            <br/>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                For this project, the following technologies/frameworks were used:
            </p>
            <br/>
            <List className="ml-6">
                <List.Item icon={FaJava}>Java</List.Item>
                <List className="ml-10">
                    <List.Item icon={SiThymeleaf}>Thymeleaf Templating</List.Item>
                    <List.Item icon={IoServerSharp}>Java Servlets</List.Item>
                </List>
                <List.Item icon={IoLogoJavascript}>Javascript</List.Item>
                <List.Item icon={SiPrometheus}>Prometheus Server Monitoring</List.Item>
            </List>
            <br/><br/>
            <Link href="/projects">
                <Button>
                    Go back to projects
                </Button>
            </Link>
        </div>
    );
}