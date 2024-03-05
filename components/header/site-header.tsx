import { AlignRight } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/header/main-nav"

import MobileMenu from "./mobile-menu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-0 w-full px-4">
      <div className="flex h-32 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="ml-16 flex items-center space-x-1">
            <Button className="whitespace-nowrap">Connect Wallet</Button>
            <MobileMenu>
              <Button variant="ghost" size="icon" className="ml-2 lg:hidden">
                <AlignRight className="size-5" />
              </Button>
            </MobileMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}
