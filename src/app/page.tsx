import { ChartColumnIncreasing, Moon, Trophy, Zap } from "lucide-react";
import Navbar from "./_Components/Navbar";
import Works from "../Components/Works/Works";
import CallToAction from "./_Components/CallToAction";
import { Bebas_Neue } from "next/font/google";


const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const css = "w-full items-center justify-between flex px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pt-12 pb-12";
  const choose = [
    {
      id: 1,
      title: "Real-Time Feedback",
      description: "See every keystroke instantly.",
      icon: <Zap className="mr-1" />,
    },
    {
      id: 2,
      title: "Detailed Statistics",
      description: "View WPM, accuracy and mistakes.",
      icon: <ChartColumnIncreasing className="mr-1" />,
    },
    {
      id: 3,
      title: "Leaderboards",
      description: "Compete with other Users.",
      icon: <Trophy className="mr-1" />,
    },
    {
      id: 4,
      title: "Dark Mode",
      description: "Comfortable typing day and night.",
      icon: <Moon className="mr-1" />,
    },
  ]

  return (
    <main>
      <Navbar css={css} />
      <div className={`${css} flex-col gap-2 `}>
        <h2 className={`text-[#192060] text-center text-3xl font-extrabold ${bebas.className}`}>Why Choose SoulsType ?</h2>
        <p className="text-gray-500">Everything You Need To Improve Your Typing ?</p>
        <div className="grid grid-cols-4 gap-4 mt-3">
          {choose.map((item) => (
            <div className="bg-white dark:bg-[#161B22] py-3 px-4 rounded-md" key={item.id}>
              <h3 className={`text-[18px] font-bold flex items-center text-[#192060] ${bebas.className}`}>{item.icon} {item.title}</h3>
              <p className="text-gray-500 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Works css={css} />
      <CallToAction css={css} />
    </main>
  );
}