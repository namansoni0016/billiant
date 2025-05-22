import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function InvoicesList() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Invoice ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>#1</TableCell>
                    <TableCell>Naman Soni</TableCell>
                    <TableCell>$5000.00</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>22/05/2025</TableCell>
                    <TableCell>#1</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}