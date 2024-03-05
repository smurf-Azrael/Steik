"use client"

import LineItem from "@/components/leaderboard/line-item"

const lineitem_example = [
  {
    number: 565,
    address: "seil238479234792384789234yru8",
    self: true,
    numPoints: 9542,
  },
  {
    number: 1,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 56234,
  },
  {
    number: 2,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 51231,
  },
  {
    number: 3,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 42512,
  },
  {
    number: 4,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 36731,
  },
  {
    number: 5,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 32341,
  },
  {
    number: 6,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 24562,
  },
  {
    number: 7,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 16324,
  },
  {
    number: 8,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 15123,
  },
  {
    number: 9,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 14526,
  },
  {
    number: 10,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 13952,
  },
  {
    number: 11,
    address: "seil238479234792384789234yru8",
    self: false,
    numPoints: 12222,
  },
]
export default function Leaderboard() {
  return (
    <section className=" px-16 pb-3 pt-6">
      <div className="rounded-sm bg-[#FFFDF1] p-6">
        <p className="font-bebas text-2xl  text-custom sm:text-3xl md:text-4xl xl:text-5xl">
          LEADERBOARD
        </p>
        {lineitem_example.map((lineitem) => {
          return (
            <LineItem
              number={lineitem.number}
              address={lineitem.address}
              self={lineitem.self}
              numPoints={lineitem.numPoints}
            ></LineItem>
          )
        })}
      </div>
    </section>
  )
}
