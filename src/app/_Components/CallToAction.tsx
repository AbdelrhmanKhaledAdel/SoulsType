"use client";

import Link from "next/link";
import { Bebas_Neue } from "next/font/google";


const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});

const CallToAction = ({css}: {css: string}) => {
  return (
    <div className={`${css} flex-col gap-2`}>
        <h1 className={`text-3xl font-bold text-center text-[#192060] ${bebas.className}`}>Ready to Improve Your Typing Speed?</h1>
        <button className="bg-[#192060] mt-2.5 w-fit text-white py-2 px-4 rounded-md duration-300 cursor-pointer hover:bg-[#192060]/80">
          <Link href="/practice">Start Practice</Link>
        </button>
    </div>
  )
}

export default CallToAction