import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});

function Hero({ css }: { css: string }) {
    return (
        <div className={`${css} bg-white dark:bg-[#161b22]`}>
            <div className="flex flex-col gap-2">
                <h1 className={`text-[#192060] font-bold text-4xl ${bebas.className}`}>About SoulsType</h1>
                <p className="text-gray-500 text-[16px]">SoulsType helps you improve your typing speed and<br /> accuracy through clean, distraction-free practice and<br /> detailed performance tracking.</p>
            </div>
            <div>
                <Image src="/about_1.svg" alt="" width={400} height={400} className="rounded-lg" />
            </div>
        </div>
    );
}

export default Hero;
