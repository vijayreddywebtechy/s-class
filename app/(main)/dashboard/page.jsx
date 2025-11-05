import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard 
      <div className='flex items-center gap-1'>
        <Label htmlFor="terms">Accept Terms</Label>
        <Checkbox id="terms" />
      </div>
      </div>
  )
}

export default Dashboard