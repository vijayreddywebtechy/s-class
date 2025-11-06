"use client"

import { useState } from "react";
import styles from "./page.module.css";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { CalendarDays } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Home() {
const [open, setOpen] = useState(false);
const [date, setDate] = useState(undefined);

  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-2 my-6">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>

       <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Date of birth
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 h-10 md:h-12 justify-between text-sm text-foreground font-normal border-slate-500"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <CalendarDays className="!w-5 !h-5 text-primary" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
      
    </>
  );
}
