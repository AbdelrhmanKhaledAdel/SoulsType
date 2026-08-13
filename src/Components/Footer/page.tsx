import { Keyboard } from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link"

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});


function Footer() {
  const css = "w-full grid grid-cols-3 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pt-12 pb-12";

  return (
    <footer>
      <div className={` ${css} gap-2 bg-[#192060] max-[700px]:grid-cols-2 max-[500px]:grid-cols-1`}>
        <div className="flex flex-col gap-1.5">
          <div className="text-white text-3xl font-bold">
            <Link href="/"><h1 className={`${bebas.className} flex items-center gap-1`}><Keyboard size={33} />Souls Type</h1></Link>
          </div>
          <p className="text-white text-sm">Improve your typing speed with <br /> real-time feedback and detailed <br /> performance statistics.</p>
        </div>
        <div className="flex flex-col gap-1.5">
          <h2 className="text-white text-lg font-bold">Navigation</h2>
          <ul>
            <li><Link href="/" className="text-white hover:underline duration-300">Home</Link></li>
            <li><Link href="/practice" className="text-white hover:underline duration-300">Practice</Link></li>
            <li><Link href="/about" className="text-white hover:underline duration-300">About Us</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-1.5">
          <h2 className="text-white text-lg font-bold">Resources</h2>
          <ul>
            <li><Link href="/" className="text-white hover:underline duration-300">FAQ</Link></li>
            <li><Link href="/" className="text-white hover:underline duration-300">Privacy Policy</Link></li>
            <li><Link href="/" className="text-white hover:underline duration-300">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="bg-white dark:bg-[#161b22] text-center text-[16px] py-4">
        <p>&copy; {new Date().getFullYear()} Souls Type. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;

