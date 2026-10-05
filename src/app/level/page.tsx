import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { Zap, Timer, File, ChartColumnIcon } from "lucide-react";
import { levels } from "../../data/levels"


const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

function page() {
    const css = "w-full flex px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pt-12 pb-12";

  return (
    <main>
        <div className={`${css} flex-col gap-3`}>
            {
                levels.map((item) => (
                    <div className="bg-white relative overflow-hidden shadow-2xl dark:bg-[#1E293B] py-4 px-5 w-fit rounded-md" key={item.id}>
                        <div className="flex flex-col gap-2.5 z-10">
                            <h2 className={`text-[#192060] font-black ${bebas.className} text-3xl flex items-center gap-2`}><Zap className="text-yellow-400" /> Level {item.id}</h2>
                            <p className="text-gray-600 max-w-125 w-full">{item.text}</p>
                            <div className="flex items-center gap-3 justify-between">
                                <span className="flex gap-1 items-center text-[#192060] font-bold"><Timer />{item.duration}s Time</span>
                                <span className="flex gap-1 items-center text-[#192060] font-bold"><File />{item.wordCount} words</span>
                                <span className="flex gap-1 items-center text-[#192060] font-bold"><ChartColumnIcon />{item.difficulty} Difficulty</span>
                            </div>
                            <button className="bg-[#192060] mt-2.5 w-fit text-white py-2 px-4 rounded-md duration-300 hover:bg-[#192060]/80 cursor-pointer"><Link href={`/practice?practiceId=${item.id}`}>Start Typing</Link></button>
                        </div>
                    </div>
                ))
            }
        </div>
    </main>
  )
}

export default page