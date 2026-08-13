"use client";

import { motion } from "framer-motion";
import { RotateCw } from "lucide-react";
import Results from "./_Components/Results";
import UserTyping from "./_Components/UserTyping";
import Caret from "./_Components/Caret";
import useEngine from "@/hooks/useEngine";
import { calculateAccuracyPercentage } from "@/utils/calculateAccuracy";

const Practice = () => {
    const css = "w-full flex px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pt-12 pb-12";
    const { state, words, timeLeft, typed, errors, totalTyped, restart } = useEngine();
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const wpm = Math.floor(((totalTyped - errors) / 5) / ((60 - timeLeft) / 60));

    return (
        <main>
            <div className={`${css} items-center flex-col gap-2.5 bg-white dark:bg-[#0d131b]`}>
                <div className="bg-[#f3f4f6] dark:bg-[#1E293B] py-3 px-4 rounded-md w-full h-fit">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <p className="text-[20px] px-15 py-15 leading-8 text-gray-600 font-semibold">{words}</p>
                        <div className="px-15 py-15 absolute top-0 flex">
                            <UserTyping words={words} userInput={typed} />
                            <Caret />
                        </div>
                    </motion.div>
                </div>
                <div className="flex items-center justify-center gap-4 w-full">
                    <button className="bg-[#192060] text-white py-2 px-4 rounded-md flex items-center gap-1.5 cursor-pointer duration-300 hover:bg-[#192060]/80" onClick={restart}>Restart <RotateCw /></button>
                    <span className={`bg-[#f3f4f6] dark:bg-[#1E293B] py-2 px-4 rounded-md flex items-center gap-1.5 font-bold text-green-500 ${timeLeft <= 15 ? "text-orange-500!" : ""} ${timeLeft === 10 ? "text-red-500!" : ""}`}>{minutes}:{seconds.toString().padStart(2, '0')}</span>
                    <span className="bg-[#192060] text-white py-2 px-4 rounded-md flex items-center gap-1.5 font-bold">WPM: {wpm}</span>
                </div>
                <Results
                    error={errors}
                    accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
                    total={totalTyped}
                    state={state}
                    className="mt-4"
                />
            </div>
        </main>
    );
}

export default Practice;