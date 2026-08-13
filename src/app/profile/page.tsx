"use client";

import Image from "next/image";
import { PenBox } from "lucide-react";
import useEngine from "@/hooks/useEngine";
import { calculateAccuracy, calculateAccuracyPercentage } from "@/utils/calculateAccuracy";
import SpeedChart from "@/Components/speed/SpeedChart";

export default function Profile() {
  const css = "w-full items-center justify-between flex px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-12";
  const { errors, totalTyped } = useEngine();

  return (
    <main>
      <div className={css}>
        <div className="relative">
          <Image src="/avatar.png" alt="" width={2000} height={2000} className="w-[200px] border-4 border-[#192060] rounded-full" />
          <div className="absolute bg-[#192060] p-2 rounded-md text-white top-4/5 right-3 cursor-pointer">
            <PenBox />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-[#192060] text-[20px] font-bold">User Name</h1>
            <p>abbbdsas@.gamil.com</p>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-[#192060] text-[17px]">Best WPM: {(totalTyped % 5) % .5}</h3>
            <h3 className="text-[#192060] text-[17px]">Average: {totalTyped - errors}</h3>
            <h3 className="text-[#192060] text-[17px]">Accuracy: {calculateAccuracy(calculateAccuracyPercentage(errors, totalTyped))}</h3>
          </div>
        </div>
      </div>
      <div className={css}>
        <div>
          <h1 className="mb-3 font-bold text-3xl text-[#192060] flex items-center"><PenBox className="mr-2" size={30} /> Achievements</h1>
          <div className="flex flex-col gap-1.5">
            <p className="text-[#192060] font-medium">Days Streak 7</p>
            <p className="text-[#192060] font-medium">WPM 80</p>
            <p className="text-[#192060] font-medium">WPM 100</p>
            <p className="text-[#192060] font-medium">Top 100</p>
            <p className="text-[#192060] font-medium">Teats 100</p>
          </div>
        </div>
        <div>
          <Image src="/pngwing.com.png" alt="" width={400} height={400} className="rounded-lg w-[300px]" />
        </div>
      </div>
      <SpeedChart css={css} />
    </main>
  );
}

