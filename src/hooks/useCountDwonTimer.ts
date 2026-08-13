import { useState, useCallback, useRef, useEffect  } from "react";

const useCountDwonTimer = (seconds: number) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const interValRef = useRef<NodeJS.Timeout | null>(null);
    const startCountdown = useCallback(() => {
        console.log("starting Countdown...");

        interValRef.current = setInterval(() => {

            setTimeLeft((timeLeft) => timeLeft - 1);

        },1000);

    },[setTimeLeft])

    const resetCountdown = useCallback(() => {
        console.log("resetting Countdown...");

        if(interValRef.current) {
            clearInterval(interValRef.current);

            setTimeLeft(seconds);
        }
    },[seconds]);

    useEffect(() => {
        if(!timeLeft && interValRef.current) {
            console.log("Countdown finished...");
            clearInterval(interValRef.current);
        }
    },[timeLeft, interValRef]);

    return { timeLeft, startCountdown, resetCountdown }
}

export default useCountDwonTimer;