"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <>
      <Button variant="link" size="icon" onClick={() => setTheme("light")}>
          <Sun className="h-4 w-4" />
      </Button>
      |
      <Button variant="link" size="icon" onClick={() => setTheme("dark")}>
          <Moon className="h-4 w-4" />
      </Button>


   
    </>
   
  )
}
