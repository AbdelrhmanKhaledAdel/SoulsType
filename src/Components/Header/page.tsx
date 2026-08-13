import { Bebas_Neue } from "next/font/google";
import { Keyboard, User, Globe } from "lucide-react";
import Link from "next/link";
import ThemeButton from "@/Components/Header/_Components/ThemeButton";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

function Header() {
  const css = "w-full items-center justify-between flex px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pt-2 pb-2";

  return (
    <header className='bg-[#192060] flex justify-between'>
      <div className={css}>
        <div className="text-white text-2xl font-bold">
          <Link href="/"><h1 className={`${bebas.className} flex items-center gap-1`}><Keyboard />Souls Type</h1></Link>
        </div>
        <div className="flex items-center gap-2 text-white">
          <ThemeButton />
          <div className="relative">
            <button className="p-1.5 border border-white rounded-md cursor-pointer">
              <Globe />
            </button>
            <div className="absolute w-[200px] "></div>
          </div>
          <div className="flex gap-1">
            <User />
            <Link className="hover:underline duration-300" href="/login">Login</Link>
            |
            <Link className="hover:underline duration-300" href="/rigester" >Rigester</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header