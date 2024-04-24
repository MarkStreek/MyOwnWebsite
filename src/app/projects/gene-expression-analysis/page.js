import Link from "next/link";
import {Button} from "flowbite-react";

export default function Home() {
    return (
        <div className="xs:mt-16 sm:mt-16 md:mt-0">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Fill in...
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                This project...
                <br/><br/>
            </p>
            <br/><br/>
            <Link href="/projects">
                <Button>
                    Go back to projects
                </Button>
            </Link>
        </div>
    );
}