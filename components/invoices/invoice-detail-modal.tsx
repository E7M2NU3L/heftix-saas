'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Define types
interface InvoiceItem {
  description: string;
  amount: number;
}

interface Invoice {
  invoiceNumber: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  sessionDate: string;
  sessionTime: string;
  sessionType: string;
  items: InvoiceItem[];
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  id: string;
}

interface InvoiceDetailModalProps {
  invoice: Invoice;
  onClose: () => void;
  onUpdateStatus: (state: 'paid' | 'pending' | 'overdue') => void;
}

export default function InvoiceDetailModal({ invoice, onClose, onUpdateStatus }: InvoiceDetailModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Invoice #{invoice?.invoiceNumber}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Patient Details</h3>
            <p>{invoice?.patientName}</p>
            <p>{invoice?.patientEmail}</p>
            <p>{invoice?.patientPhone}</p>
          </div>
          <div>
            <h3 className="font-semibold">Therapy Session Details</h3>
            <p>Date: {new Date(invoice?.sessionDate).toLocaleDateString()}</p>
            <p>Time: {invoice?.sessionTime}</p>
            <p>Type: {invoice?.sessionType}</p>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoice?.items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item?.description}</TableCell>
                <TableCell className="text-right">${item?.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className="font-semibold">Total</TableCell>
              <TableCell className="text-right font-semibold">${invoice?.amount.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="font-semibold">Status: </span>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              invoice?.status === 'paid' ? 'bg-green-100 text-green-800' :
              invoice?.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {invoice?.status.charAt(0).toUpperCase() + invoice?.status.slice(1)}
            </span>
          </div>
          <div className="space-x-2">
            <Button onClick={() => {
              onUpdateStatus('paid');
              handleClose();
            }}>Mark as Paid</Button>
            <Button variant="outline" onClick={() => onUpdateStatus('pending')}>Send Reminder</Button>
            <Button variant="outline" onClick={() => window.open(`/api/invoices/${invoice?.id}/pdf`, '_blank')}>Download PDF</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
