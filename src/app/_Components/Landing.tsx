import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const Landing = ({ css }: { css: string }) => {

  return (
    <div className={`bg-white dark:bg-[#161B22] max-[700px]:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row ${css}`}>
      <div className="flex flex-col items-center gap-1.5">
        <h2 className={`font-bold text-[#192060] max-[700px]:text-3xl text-4xl ${bebas.className}`}>Improve Your Typing Speed</h2>
        <p className="text-[18px] text-gray-400 mt-2.5 max-[700px]:text-[16px]">Practice every day and track your progress.</p>
        <button className="bg-[#192060] mt-2.5 w-fit text-white py-2 px-4 rounded-md duration-300 hover:bg-[#192060]/80 cursor-pointer"><Link href="/level">Start Typing</Link></button>
      </div>
      <div>
        <Image src="/homepage.svg" alt="" width={400} height={400} className="rounded-lg" />
      </div>
    </div>
  )
}

export default Landing

//Sometimes , when you're feeling helpless, the secret is to help someone else. Get out of your own head. Trust me. The next time someone asks for help, say yes.