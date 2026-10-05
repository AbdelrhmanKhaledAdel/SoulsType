import { State } from "@/hooks/useEngine";
import { calculateAccuracy } from "@/utils/calculateAccuracy";
import { motion } from "framer-motion";
import ProgressCircle from "./ProgressCircle";

function Results({
    error,
    accuracyPercentage,
    total,
    className,
    state
}: {
    error: number;
    state: State;
    accuracyPercentage: number;
    total: number;
    className?: string;
}) {
    if(state !== "finish") {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
        >
            <div className="flex sm:flex-col md:flex-row items-center mt-4 justify-center gap-8 w-full">
                <ProgressCircle color="red" progress={error} title="Errors" />
                <ProgressCircle color="green" progress={accuracyPercentage} title="Accuracy" />
                <ProgressCircle color="#192060" progress={total} title="Total" />
            </div>
        </motion.div>
    )
}

export default Results