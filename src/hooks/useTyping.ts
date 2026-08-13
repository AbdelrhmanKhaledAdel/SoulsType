/* eslint-disable react-hooks/refs */
import { useCallback, useState, useRef, useEffect } from "react";

const isKeyboardCodeAllowed = (code: string) => {
  return (
    code.startsWith("Key") ||
    code.startsWith("Digit") ||
    code === "Backspace" ||
    code === "Space"
  );
};

const useTyping = (enable: boolean) => {
    const [cursor, setCursor] = useState(0);
    const [typed, setTyped] = useState<string>("");
    const totalTyped = useRef(0);
    
    const keydownHandler = useCallback(({ key, code }: KeyboardEvent) => {

        if(!enable || !isKeyboardCodeAllowed(code)) {
            return;
        }

       switch (key) {
        case "Backspace":
          setTyped((prev) => prev.slice(0, -1));
          setCursor((cursor) => cursor - 1);
          totalTyped.current -= 1;
          break;
            default:
            setTyped((prev) => prev.concat(key));
            setCursor((cursor) => cursor + 1);
            totalTyped.current += 1;
        }

    }, [enable]);

    const clearTyped = useCallback(() => {
        setTyped("");
        setCursor(0);
    }, []);

    const resetTotalTyped = useCallback(() => {
        totalTyped.current = 0;
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", keydownHandler);
        // Remove event listeners on cleanup
        return () => {
        window.removeEventListener("keydown", keydownHandler);
        };
  }, [keydownHandler]);



    return {
        typed,
        cursor,
        clearTyped,
        resetTotalTyped,
        totalTyped: totalTyped.current,
    }

}

export default useTyping;