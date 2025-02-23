'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import type { Document } from '@/types/patients'

interface DocumentModalProps {
  documents: Document[]
  onClose: () => void
  onAddDocument: (document: Document) => void
}

export default function DocumentModal({ documents, onClose, onAddDocument }: DocumentModalProps) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [newDocument, setNewDocument] = useState<Partial<Document>>({
    type: 'document',
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
  })

  const handleAddDocument = () => {
    onAddDocument({
      ...newDocument as Document,
      id: Date.now().toString(),
      patientId: '',
    })
    setShowAddForm(false)
    setNewDocument({
      type: 'document',
      title: '',
      content: '',
      date: new Date().toISOString().split('T')[0],
    })
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Patient Documents</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Button onClick={() => setShowAddForm(true)}>Add New Document</Button>
        </div>
        {showAddForm && (
          <div className="mt-4 space-y-4">
            <Select
              value={newDocument.type}
              onValueChange={(value) => setNewDocument({ ...newDocument, type: value as Document['type'] })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select document type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="report">Report</SelectItem>
                <SelectItem value="prescription">Prescription</SelectItem>
                <SelectItem value="document">Document</SelectItem>
                <SelectItem value="log">Log</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Title"
              value={newDocument.title}
              onChange={(e) => setNewDocument({ ...newDocument, title: e.target.value })}
            />
            <Textarea
              placeholder="Content"
              value={newDocument.content}
              onChange={(e) => setNewDocument({ ...newDocument, content: e.target.value })}
            />
            <Input
              type="date"
              value={newDocument.date}
              onChange={(e) => setNewDocument({ ...newDocument, date: e.target.value })}
            />
            <Button onClick={handleAddDocument}>Add Document</Button>
          </div>
        )}
        <div className="mt-4 space-y-4">
          {documents.map((doc) => (
            <div key={doc.id} className="border p-4 rounded-md">
              <h3 className="font-bold">{doc.title}</h3>
              <p className="text-sm text-gray-500">{doc.type} - {doc.date}</p>
              <p className="mt-2">{doc.content}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

