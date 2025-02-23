'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Filter } from 'lucide-react'
import { useInvoices } from '@/contexts/invoice-context'
import type { Invoice } from '@/contexts/invoice-context'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

export default function InvoiceOverview() {
  const { invoices, setInvoices } = useInvoices()
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null)
  const [filterStatus, setFilterStatus] = useState('all')
  const [sortBy, setSortBy] = useState('date')
  const [sortOrder, setSortOrder] = useState('desc');

  console.log(selectedInvoice, setInvoices);

  const formatDate = (dateStr: string) => {
    try {
      return format(new Date(dateStr), 'MMM d, yyyy')
    } catch (error) {
      console.error('Invalid date:', dateStr)
      return dateStr
    }
  }

  const filteredInvoices = invoices
    .filter((invoice) => filterStatus === 'all' || invoice.status === filterStatus)
    .sort((a : any , b : any) => {
      if (sortBy === 'date') {
        return sortOrder === 'asc' 
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1
      if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1
      return 0
    })

  const handleSort = (column: keyof Invoice) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(column)
      setSortOrder('asc')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search invoices..."
          className="max-w-sm"
          onChange={(e) => {
            // Implement search functionality
            console.log(e);
          }}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setFilterStatus('all')}>All</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterStatus('paid')}>Paid</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterStatus('pending')}>Pending</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterStatus('overdue')}>Overdue</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              <Button variant="ghost" onClick={() => handleSort('invoiceNumber')}>
                Invoice # <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort('patientName')}>
                Patient Name <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort('date')}>
                Date <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort('status')}>
                Status <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="text-right">
              <Button variant="ghost" onClick={() => handleSort('amount')}>
                Amount <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInvoices.map((invoice) => (
            <TableRow key={invoice.id} onClick={() => setSelectedInvoice(invoice)} className="cursor-pointer">
              <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
              <TableCell>{invoice.patientName}</TableCell>
              <TableCell>{formatDate(invoice.date)}</TableCell>
              <TableCell>
                <span className={cn(
                  "px-2 py-1 rounded-full text-xs font-semibold",
                  invoice.status === 'paid' && "bg-green-100 text-green-800",
                  invoice.status === 'pending' && "bg-yellow-100 text-yellow-800",
                  invoice.status === 'overdue' && "bg-red-100 text-red-800"
                )}>
                  {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                </span>
              </TableCell>
              <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
