'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { Patient } from '@/types/patients'
import { DialogClose, DialogFooter } from '../ui/dialog'
import { RainbowButton } from '../ui/rainbow-button'
import { Loader } from 'lucide-react'

interface PatientFormProps {
  patient?: Patient
  onSubmit: (patient: Patient) => void
  onCancel: () => void;
  open : boolean;
  setOpen : (state : boolean) => void;
}

export default function PatientForm({ open, setOpen,  patient, onSubmit, onCancel }: PatientFormProps) {
  console.log(open, onCancel);
  const [formData, setFormData] = useState<Patient>(
    patient as Patient || {
        id: Date.now().toString(),
        name: '',
        age: 0,
        gender: '',
        diagnosis: '',
        admissionDate: new Date().toISOString().split('T')[0],
    }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  };

  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
        setLoading(true);
        onSubmit(formData);
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
        setOpen(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="gender">Gender</Label>
        <Input
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="diagnosis">Diagnosis</Label>
        <Input
          id="diagnosis"
          name="diagnosis"
          value={formData.diagnosis}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="admissionDate">Admission Date</Label>
        <Input
          id="admissionDate"
          name="admissionDate"
          type="date"
          value={formData.admissionDate}
          onChange={handleChange}
          required
        />
      </div>
      <DialogFooter className="flex justify-end space-x-2">
        <DialogClose asChild>
            <Button type="button" size={"sm"} variant="outline">
                Cancel
            </Button>
        </DialogClose>
        <RainbowButton disabled={isLoading} type="submit">{isLoading ? <><Loader className='mr-2 h-4 w-4 animate-spin' />Loading..</> : <>Save</>}</RainbowButton>
      </DialogFooter>
    </form>
  )
}

