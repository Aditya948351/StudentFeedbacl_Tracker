import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  BarChartBig,
  Book,
  Bot,
  Snowflake,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

export function NavMenu() {
  return (
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Link href="/dashboard" className="flex flexr-row">
            <BarChartBig className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/EngiHub" className="flex flex-row">
            <Book className="mr-2 h-4 w-4" />
            <span>EngiHub</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/raviai" className="flex flexr-row">
            <Bot className="mr-2 h-4 w-4" />
            <span>Ai Helper</span>
          </Link>
        </DropdownMenuItem>        
        <DropdownMenuItem>
          <Link href="/quizz/new" className="flex flexr-row">
            <Plus className="mr-2 h-4 w-4" />
            <span>New Quizz</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/compiler" className="flex flexr-row">
            <Snowflake className="mr-2 h-4 w-4" />
            <span>Code Compiler</span>
          </Link>
        </DropdownMenuItem>
        

        <DropdownMenuItem disabled>
  <div className="flex flex-row items-center text-muted-foreground cursor-not-allowed">
    <CreditCard className="mr-2 h-4 w-4" />
    <span>Billing (Disabled)</span>
  </div>
</DropdownMenuItem>
<DropdownMenuItem>
          <Link href="/settings" className="flex flexr-row">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuSub>
          <DropdownMenuPortal>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
  <a
    href="https://github.com/Aditya948351"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-row items-center"
  >
    <Github className="mr-2 h-4 w-4" />
    <span>GitHub</span>
  </a>
</DropdownMenuItem>
      <DropdownMenuItem disabled>
        <span className="h-5 font-bold text-foreground">Made by PBL Group No 8</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}
