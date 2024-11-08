import { Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

 function ThemeToggler() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-foodBotColor text-slate-900 border-0">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <h1 className="text-1xl semibold">Toggle Theme</h1>
        </Button>   
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggler