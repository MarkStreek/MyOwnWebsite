'use client';
import React, {useState, useMemo, useCallback} from 'react';
import {
    TableHeader,
    TableBody,
    TableColumn,
    Pagination,
    Table,
    TableRow,
    TableCell,
    Input
} from "@nextui-org/react";

import {FaSearch} from "react-icons/fa";
import Image from "next/image";

export default function TableComponent({data}) {

    const [filterValue, setFilterValue] = useState('');
    const hasSearchFilter = Boolean(filterValue);

    const filteredItems = useMemo(() => {
        let filteredBeers = [...data];
        if (hasSearchFilter) {
            filteredBeers = filteredBeers.filter(beer =>
                beer.title.toLowerCase().includes(filterValue.toLowerCase()) ||
                beer.rating.toLowerCase().includes(filterValue.toLowerCase())
            );
        }

        return filteredBeers;
    }, [data, filterValue, hasSearchFilter]);

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const onRowsPerPageChange = React.useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, rowsPerPage, filteredItems]);

    const [sortDescriptor, setSortDescriptor] = useState({
        column: 'name',
        direction: 'ascending'
    });

    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === 'descending' ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const onSearchChange = useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue('');
        }
    }, []);

    const onClear = useCallback(() => {
        setFilterValue('');
        setPage(1);
    }, []);


    const topContent = useMemo(() => {
        return (
            <div className='flex flex-col gap-4'>
                <div className='flex items-end justify-between gap-3'>
                    <Input
                        isClearable
                        radius={"none"}
                        variant={"underlined"}
                        className='w-full sm:max-w-[44%]'
                        placeholder='Search for a beer or rating...'
                        startContent={<FaSearch className="mr-4"/>}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                        aria-label="Search beers by title or rating"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <label className="flex items-center text-default-400 text-small">
                        Aantal rijen per pagina:&nbsp;
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                            aria-label="Rows per page"
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [filterValue, onSearchChange, onRowsPerPageChange, onClear]);

    return (
        <div>
            <Table
                topContent={topContent}
                color={"primary"}
                selectionMode={"multiple"}
                topContentPlacement='outside'
                bottomContent={
                    <div className='flex w-full justify-center'>
                        <Pagination
                            isCompact
                            showControls
                            showShadow
                            color='secondary'
                            page={page}
                            total={pages}
                            onChange={(page) => setPage(page)}
                            aria-label="Pagination"
                        />
                    </div>
                }
                bottomContentPlacement='outside'
                sortDescriptor={sortDescriptor}
                onSortChange={setSortDescriptor}
                classNames={{
                    wrapper: 'min-h-[222px]'
                }}
                aria-label="Beer table"
            >
                <TableHeader>
                    <TableColumn allowsSorting key="title">Beer Title</TableColumn>
                    <TableColumn allowsSorting key="rating">Beer Rating</TableColumn>
                    <TableColumn allowsSorting key="picture">Picture</TableColumn>
                </TableHeader>
                <TableBody items={sortedItems} emptyContent={'No beers were found...'}>
                    {sortedItems.map(item => (
                        <TableRow key={item.id}>
                            <TableCell key={`${item.id}-title`}>{item.title}</TableCell>
                            <TableCell key={`${item.id}-rating`}>{item.rating}</TableCell>
                            <TableCell key={`${item.id}-picture`}><Image
                                width={60}
                                height={78}
                                src={item.picture}
                                alt={item.title}
                                className="rounded-lg wborder-2 border-gray-300 dark:border-gray-700 md:block sm:hidden xs:hidden"
                            /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}