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
    <div className="flex w-full gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={foxLogoSVG} alt="Fox Logo" className="size-36 sm:size-48" />
      </Link>
      {items?.length ? (
        <nav className="ml-auto mr-20 hidden gap-6 lg:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-custom",
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
