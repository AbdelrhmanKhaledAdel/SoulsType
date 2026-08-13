import { Bebas_Neue } from "next/font/google";
import Form from "../rigester/_Components/Form";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

function page() {
  return (
    <main>
      <div className="flex items-center justify-center pt-28 h-[90vh] pb-28">
        <div className="w-[320PX] h-[450PX] flex flex-col justify-between p-6 shadow-md rounded-md bg-white dark:bg-[#161B22]">
          <h2 className={`text-center text-[#192060] text-4xl font-bold ${bebas.className} dark:text-shadow-white `}>Rigester</h2>
          <Form />
        </div>
      </div>
    </main >
  )
}

export default page