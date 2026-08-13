import { Bebas_Neue } from "next/font/google";
import Hero from "./_Components/Hero";
import Image from "next/image";
import Works from "@/Components/Works/Works";
import { BookText, Heart, LockKeyhole, Zap } from "lucide-react";

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});


function Profile() {
    const css = "w-full flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-12";
    const choose = [
        {
            id: 1,
            title: "Performance",
            description: "Every feature is designed to deliver a fast, smooth, and distraction-free typing experience.",
            icon: <Zap className="mr-1" />,
        },
        {
            id: 2,
            title: "Learning",
            description: "Typing is a skill that anyone can improve with the right tools and regular practice.",
            icon: <BookText className="mr-1" />,
        },
        {
            id: 3,
            title: "User Experience",
            description: "We focus on creating a clean, intuitive interface that keeps you focused on your goals.",
            icon: <Heart className="mr-1" />,
        },
        {
            id: 4,
            title: "Privacy",
            description: "Your personal information and typing history are protected and handled with care.",
            icon: <LockKeyhole className="mr-1" />,
        }
    ]

    return (
        <main>
            <Hero css={css} />
            <div className={css}>
                <div>
                    <Image src="/about_2.webp" alt="" width={400} height={400} className="rounded-lg" />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className={`text-[#192060] font-bold text-4xl text-center ${bebas.className}`}>Our Story</h1>
                    <p className="text-gray-500 text-[16px] w-full max-w-100">
                        SoulsType was created to provide a modern and simple typing platform for students, developers, writers, and anyone looking to improve their typing skills. We focus on speed, accuracy, and continuous improvement.
                    </p>
                </div>
            </div>
            <div className={`${css} bg-white dark:bg-[#161b22]`}>
                <div className="flex flex-col gap-2">
                    <h1 className={`text-[#192060] font-bold text-4xl text-center ${bebas.className}`}>Our Mission</h1>
                    <p className="text-gray-500 text-[16px] text-center w-full max-w-100">
                        Our mission is to make typing practice simple, enjoyable, and effective by providing real-time feedback and detailed statistics.
                    </p>
                </div>
                <div>
                    <Image src="/about_3.png" alt="" width={400} height={400} className="rounded-lg " />
                </div>
            </div>
            <div className={`${css} flex-col gap-2 `}>
                <h2 className={`text-[#192060] text-center text-3xl font-extrabold ${bebas.className}`}>Our Values</h2>
                <p className="text-gray-500">The principles that guide everything we build</p>
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
        </main>
    ); 
}

export default Profile;
