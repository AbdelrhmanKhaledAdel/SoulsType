"use client";
import { ChartColumn, ChartNoAxesCombined, Contact, Hand, HandCoins, Keyboard, Minus, Plus, User } from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import { useState } from "react";

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});

function Works({ css }: { css: string }) {
    const [content, setContent] = useState(0);
    const works = [
        {
            id: 1,
            title: "Choose Your Test",
            description: "Select the test duration and mode that best fits your practice.",
            icons: <Keyboard className="mr-1" />,
        },
        {
            id: 2,
            title: "Analyze Your Performance",
            description: "Review your typing speed, accuracy, and mistakes to see where you can improve.",
            icons: <ChartColumn className="mr-1" />,
        },
        {
            id: 3,
            title: "Track Your Progress",
            description: "Save your results, monitor your improvement, and challenge yourself to reach higher speeds.",
            icons: <ChartNoAxesCombined className="mr-1" />,
        },
        {
            id: 4,
            title: "Is SoulsType free to use?",
            description: "Yes. You can practice typing for free without any hidden fees.",
            icons: <HandCoins className="mr-1" />,
        },
        {
            id: 5,
            title: "Do I need to create an account?",
            description: "No, you can start practicing immediately. However, creating an account allows you to save your progress and view your statistics.",
            icons: <User className="mr-1" />,
        },
        {
            id: 6,
            title: "What is WPM?",
            description: "WPM (Words Per Minute) measures how many words you can type in one minute. One word is calculated as five characters.",
            icons: <Hand className="mr-1" />,
        },
        {
            id: 7,
            title: "How can I report a bug or send feedback?",
            description: "You can contact us through our Contact page or send us an email with your feedback.",
            icons: <Contact className="mr-1" />,
        }
    ]

    return (
        <div className={`${css} flex-col gap-2 bg-white dark:bg-[#161B22] `}>
            <h2 className={`text-[#192060] text-center text-3xl font-extrabold ${bebas.className}`}>How It Works</h2>
            <p className="text-gray-500">Start improving your typing skills in just a few simple steps.</p>
            <div className="mt-3 flex flex-col gap-3 w-full">
                {
                    works.map((item) => {
                        return (
                            <div className="w-full flex flex-col items-center " key={item.id}>
                                <div className={`w-full max-w-150 text-center bg-[#192060] text-white py-1.5 px-2.5 flex items-center justify-between ${content === item.id ? "rounded-tr-md rounded-tl-md" : "rounded-md"}`}>
                                    <h3 className="flex items-center">{item.icons} {item.title}</h3>
                                    <div className="cursor-pointer">
                                        {
                                            content === item.id ? <div onClick={() => setContent(0)}>
                                                <Minus />
                                            </div> : <div onClick={() => setContent(item.id)}>
                                                <Plus />
                                            </div>
                                        }
                                    </div>
                                </div>
                                {
                                    content === item.id ?
                                        <div className="bg-[#f3f4f6] dark:bg-[#0D1117] py-2 px-4 w-full max-w-150 rounded-bl-md rounded-br-md">
                                            <p className="text-gray-500">{item.description}</p>
                                        </div> : ""
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Works