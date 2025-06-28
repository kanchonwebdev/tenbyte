"use client";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect } from "react";

import axios from 'axios';
import Cookies from 'js-cookie';

export default function DashboardPage() {
    useEffect(() => {
        const fetchData = async () => {
            const token = Cookies.get('token');
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/profiles`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
        };
        fetchData();
    }, []);

    return (
        <div className="w-full max-w-[1440px] mx-auto p-6 bg-gray-100 dark:bg-gray-800">
            <h1 className="text-3xl font-bold mb-4">Dashboard Page</h1>
            <p className="text-gray-700">Welcome to your dashboard!</p>

            <div className="mt-6">
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Test Invoice</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">$250.00</TableCell>
                            </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    );
}