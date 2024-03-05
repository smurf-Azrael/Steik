export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/dashboard",
    },
    {
      title: "Claim points",
      href: "/steik",
    },
    {
      title: "Stats",
      href: "/stats",
    },
    {
      title: "Leaderboard",
      href: "/leaderboard",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
