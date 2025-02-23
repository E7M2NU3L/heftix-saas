import { Suspense } from 'react'
import { InvoiceProvider } from '@/contexts/invoice-context'
import InvoiceOverview from '@/components/invoices/invoice-overview'

export default function InvoicesPage() {
  return (
    <InvoiceProvider>
      <div className="container mx-auto p-4 space-y-8">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Suspense fallback={<div>Loading invoices...</div>}>
              <InvoiceOverview />
            </Suspense>
          </div>
        </div>
      </div>
    </InvoiceProvider>
  )
}

