"use client";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


const Form = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <form className="flex flex-col gap-5 justify-between">
            <div className="flex flex-col gap-1.5">
                <h3 className="font-medium">User Name :</h3>
                <input type="text" className="bg-[#f3f4f6] dark:bg-[#0D1117] pt-2 pb-2 pl-3 pr-3 font-medium rounded-md border-none outline-none" />
            </div>
            <div className="flex flex-col gap-1.5 relative">
                <h3 className="font-medium">Password :</h3>
                <input type={showPassword ? "text" : "password"} className="bg-[#f3f4f6] dark:bg-[#0D1117] pt-2 pb-2 pl-3 pr-3 font-medium rounded-md border-none outline-none" />
                <div className="absolute top-[54%] right-1.75 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff /> : <Eye />}
                </div>
            </div>
            <div className="flex flex-col gap-1.5 relative">
                <h3 className="font-medium">Confirm Password :</h3>
                <input type={showConfirmPassword ? "text" : "password"} className="bg-[#f3f4f6] dark:bg-[#0D1117] pt-2 pb-2 pl-3 pr-3 font-medium rounded-md border-none outline-none" />
                <div className="absolute top-[54%] right-1.75 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                </div>
            </div>
            <div className="text-center">
                <button className="p-1.5 font-semibold w-full rounded-md border-none outline-none text-white bg-[#192060] hover:shadow-md hover:bg-[#192060]/80 duration-300 cursor-pointer">Rigester</button>
                <p className="mt-2">Already have an account? <Link href="/login" className="font-medium text-[#192060] hover:underline duration-300">Login</Link></p>
            </div>
        </form>
    )
}

export default Form;