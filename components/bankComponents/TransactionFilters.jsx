"use client"
import React, { useState } from 'react'
import { format } from "date-fns"
import { CalendarIcon, X } from "lucide-react"
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import CustomReactSelect from '@/components/ui/CustomReactSelect'
import { Input } from '@/components//ui/input'

const TransactionFilters = ({ toggleFilter }) => {
  const [fromDate, setFromDate] = useState()
  const [toDate, setToDate] = useState()

  return (
    <div className='px-4 py-6 border-b border-slate-200'>
        <div className='flex justify-between'>
            <h5 className='mb-4 text-sm md:text-lg font-medium text-slate-950'>Filter</h5>
            <button variant="outline" className="text-slate-500 hover:bg-slate-200 h-6 w-6 inline-flex items-center justify-center rounded-lg" onClick={() => toggleFilter(false)}><X size={20} /></button>
        </div>
        <div className='mb-4'>
            <Label className="mb-2 block">Transaction type</Label>
            <CustomReactSelect 
              id='transaction-type'
              placeholder="Select transaction type"
            />
        </div>
        
        <div className='mb-4'>
            <Label className="mb-2 block">Beneficiary name</Label>
            <CustomReactSelect 
              id='beneficiary-name'
              placeholder="Select beneficiary"
            />
        </div>
        <h6 className='mt-5 mb-3 text-sm text-slate-950'>Transaction date range</h6>
        <div className='grid sm:grid-cols-2 gap-4 mb-4'>
        <div>
            <Label className="mb-2 block">From Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-between text-left font-normal h-12 px-2 shadow-none hover:bg-white",
                    !fromDate && "text-muted-foreground"
                  )}
                >
                  {fromDate ? format(fromDate, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="h-4 w-4 text-primary-light" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={fromDate}
                  onSelect={setFromDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
        </div>
        <div>
            <Label className="mb-2 block">To Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-between text-left font-normal h-12 px-2 shadow-none hover:bg-white",
                    !toDate && "text-muted-foreground"
                  )}
                >
                  {toDate ? format(toDate, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="h-4 w-4 text-primary-light" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={toDate}
                  onSelect={setToDate}
                  initialFocus
                  disabled={(date) => fromDate ? date < fromDate : false}
                />
              </PopoverContent>
            </Popover>
        </div>
        </div>
        <h6 className='mt-5 mb-3 text-sm text-slate-950'>Amount</h6>
        <div className='grid sm:grid-cols-2 gap-4 mb-4'>
            <div className='mb-4'>
                <Label className="mb-2 block">Min Amount</Label>
                <Input placeholder="" />
            </div>
            <div className='mb-4'>
                <Label className="mb-2 block">Max Amount</Label>
                <Input placeholder="" />
            </div>
        </div>




        <div className="flex justify-between gap-2 pt-2">
          <Button 
            variant="ghost" 
            className='px-6 uppercase h-10 sm:h-12 text-primary-light hover:bg-blue-100 hover:text-primary-light'
            onClick={() => {
              setFromDate(undefined)
              setToDate(undefined)
            }}
          >
            Clear
          </Button>
          <Button 
            className="bg-primary-light px-6 uppercase h-10 sm:h-12"
            onClick={() => {
              // Apply filters logic here
              console.log('Filters:', { fromDate, toDate })
            }}
          >
            Apply
          </Button>
        </div>
    </div>
  )
}

export default TransactionFilters
