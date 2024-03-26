export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Steik",
  description:
    "Steik is of its kind staking platform with realtime points mechanism on Sei Network. Steik. Accumulate. Get rewarded.",
  mainNav: [
    {
      title: "Home",
      href: "/dashboard",
    },
    {
      title: "Claim points",
      href: "/stats",
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
