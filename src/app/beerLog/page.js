import React from "react";
import path from "path";
import fs from "fs";
import TableComponent from "@/app/beerLog/tableComponent";

export default function BeerLog() {

    const directoryPath = path.join(process.cwd(), 'public', 'documents');
    const filenames = fs.readdirSync(directoryPath);
    const jsonFiles = filenames.filter(filename => filename.endsWith('.json'));

    const beers = jsonFiles.map(filename => {
        const filePath = path.join(directoryPath, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileContent);
    });

    return (
        <div>
            <h5 className="text-2xl font-bold tracking-tight">
                My personal project: Beer Log
            </h5>
            <br/>
            <p className="font-normal text-gray-500 dark:text-gray-400">
                I created a personal project where I can log all the beers I have tasted. You can see the list of beers below.
                Search for a beer by typing in the search box. You can also filter by rating.
            </p>
            <br></br>
            <TableComponent data={beers}/>
        </div>
    );
}