import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import foxLogoSVG from "@/public/foxes-logo.svg"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10 w-full">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={foxLogoSVG} alt="Fox Logo" className="size-48" />
      </Link>
      {items?.length ? (
        <nav className="lg:flex gap-6 ml-auto mr-20 hidden">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-custom text-lg font-semibold",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
