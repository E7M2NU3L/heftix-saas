'use client'

import React, { createContext, useContext, useState } from 'react'

interface Invoice {
  id: string;
  invoiceNumber: string;
  patientName: string;
  patientEmail?: string;
  patientPhone?: string;
  date: string;
  status: 'paid' | 'pending' | 'overdue';
  amount: number;
  sessionDate: string;
  sessionTime: string;
  sessionType: string;
  items: Array<{
    description: string;
    amount: number;
  }>;
}

interface InvoiceContextType {
  invoices: Invoice[];
  setInvoices: React.Dispatch<React.SetStateAction<Invoice[]>>;
}

// Mock data with consistent date format
const mockData: Invoice[] = [
  {
    id: "inv-001",
    invoiceNumber: 'INV001',
    patientName: 'John Doe',
    patientEmail: 'john@example.com',
    patientPhone: '+1234567890',
    date: '2024-01-15',
    sessionDate: '2024-01-15',
    sessionTime: '09:00 AM',
    sessionType: 'Regular Session',
    status: 'paid',
    amount: 150.00,
    items: [
      { description: 'Therapy Session (1 hour)', amount: 150.00 }
    ]
  },
  {
    id: "inv-002",
    invoiceNumber: 'INV002',
    patientName: 'Jane Smith',
    patientEmail: 'jane@example.com',
    patientPhone: '+1234567891',
    date: '2024-02-20',
    sessionDate: '2024-02-20',
    sessionTime: '10:00 AM',
    sessionType: 'Initial Consultation',
    status: 'paid',
    amount: 250.00,
    items: [
      { description: 'Initial Consultation (90 min)', amount: 250.00 }
    ]
  },
  {
    id: "inv-003",
    invoiceNumber: 'INV003',
    patientName: 'Alice Johnson',
    patientEmail: 'alice@example.com',
    patientPhone: '+1234567892',
    date: '2024-02-21',
    sessionDate: '2024-02-21',
    sessionTime: '11:00 AM',
    sessionType: 'Follow-up Session',
    status: 'pending',
    amount: 175.00,
    items: [
      { description: 'Follow-up Session (60 min)', amount: 175.00 }
    ]
  },
  {
    id: "inv-004",
    invoiceNumber: 'INV004',
    patientName: 'Bob Brown',
    patientEmail: 'bob@example.com',
    patientPhone: '+1234567893',
    date: '2024-02-22',
    sessionDate: '2024-02-22',
    sessionTime: '09:30 AM',
    sessionType: 'Therapy Session',
    status: 'paid',
    amount: 300.00,
    items: [
      { description: 'Therapy Session (1 hour)', amount: 300.00 }
    ]
  },
  {
    id: "inv-005",
    invoiceNumber: 'INV005',
    patientName: 'Charlie Davis',
    patientEmail: 'charlie@example.com',
    patientPhone: '+1234567894',
    date: '2024-02-23',
    sessionDate: '2024-02-23',
    sessionTime: '01:00 PM',
    sessionType: 'Initial Consultation',
    status: 'overdue',
    amount: 220.00,
    items: [
      { description: 'Initial Consultation (90 min)', amount: 220.00 }
    ]
  },
  {
    id: "inv-006",
    invoiceNumber: 'INV006',
    patientName: 'Diana Evans',
    patientEmail: 'diana@example.com',
    patientPhone: '+1234567895',
    date: '2024-02-24',
    sessionDate: '2024-02-24',
    sessionTime: '03:00 PM',
    sessionType: 'Regular Session',
    status: 'paid',
    amount: 180.00,
    items: [
      { description: 'Regular Session (1 hour)', amount: 180.00 }
    ]
  },
  {
    id: "inv-007",
    invoiceNumber: 'INV007',
    patientName: 'Ethan Foster',
    patientEmail: 'ethan@example.com',
    patientPhone: '+1234567896',
    date: '2024-02-25',
    sessionDate: '2024-02-25',
    sessionTime: '10:30 AM',
    sessionType: 'Follow-up Session',
    status: 'pending',
    amount: 200.00,
    items: [
      { description: 'Follow-up Session (60 min)', amount: 200.00 }
    ]
  },
  {
    id: "inv-008",
    invoiceNumber: 'INV008',
    patientName: 'Fiona Green',
    patientEmail: 'fiona@example.com',
    patientPhone: '+1234567897',
    date: '2024-02-26',
    sessionDate: '2024-02-26',
    sessionTime: '02:00 PM',
    sessionType: 'Therapy Session',
    status: 'paid',
    amount: 275.00,
    items: [
      { description: 'Therapy Session (1 hour)', amount: 275.00 }
    ]
  },
  {
    id: "inv-015",
    invoiceNumber: 'INV015',
    patientName: 'Alice Johnson',
    patientEmail: 'alice@example.com',
    patientPhone: '+1234567899',
    date: '2024-03-15',
    sessionDate: '2024-03-15',
    sessionTime: '11:00 AM',
    sessionType: 'Follow-up Session',
    status: 'paid',
    amount: 175.00,
    items: [
      { description: 'Follow-up Session (1 hour)', amount: 175.00 }
    ]
  },
  // Add more mock invoices...
];

const InvoiceContext = createContext<InvoiceContextType | null>(null);

export function useInvoices() {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error('useInvoices must be used within an InvoiceProvider');
  }
  return context;
}

export function InvoiceProvider({ children }: { children: React.ReactNode }) {
  const [invoices, setInvoices] = useState<Invoice[]>(mockData);

  return (
    <InvoiceContext.Provider value={{ invoices, setInvoices }}>
      {children}
    </InvoiceContext.Provider>
  );
}

export type { Invoice };

