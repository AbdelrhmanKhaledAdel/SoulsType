"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ArrowUpButton = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleUpClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={handleUpClick}
            className={`fixed bg-[#192060] text-white p-2 rounded-full cursor-pointer
            transition-all duration-300
            ${scroll ? "right-4 bottom-6" : "-right-20 bottom-6"}`}
        >
            <ChevronUp  size={20} />
        </button>
    );
};

export default ArrowUpButton;