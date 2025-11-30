"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function DeadlineAnnouncement() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has already dismissed the announcement
    const hasSeenAnnouncement = localStorage.getItem("deadline-announcement-dismissed")
    
    if (!hasSeenAnnouncement) {
      // Small delay to ensure smooth page load
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 500)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Remember that user has seen the announcement
    localStorage.setItem("deadline-announcement-dismissed", "true")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-5 w-5 text-primary" />
            <DialogTitle className="text-2xl font-bold">
              Deadline Extended!
            </DialogTitle>
          </div>
          <DialogDescription className="text-base pt-2">
            We're excited to announce that the registration deadline has been extended to{" "}
            <span className="font-semibold text-foreground">2nd December</span>.
            <br />
            <br />
            Don't miss this opportunity to participate in the AI for Inclusion Hackathon!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end mt-4">
          <Button onClick={handleClose} className="w-full sm:w-auto">
            Got it!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

