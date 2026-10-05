/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import useCountDwonTimer from "./useCountDwonTimer";
import useTyping from "./useTyping";
import { countErrors } from "@/utils/calculateAccuracy";

export type State = "start" | "run" | "finish" | "stop"

const NUMBER_OF_WORDS = 20;
const COUNTDWON_SECONDS = 30;

const generateWords = (count: number) => {
    return faker.word.words(count).toLowerCase();
};

const useWords = (count: number) => {
    // const []
    const [words, setWords] = useState<string>(generateWords(count));

    const updateWords = useCallback(() => {
        setWords(generateWords(count));
    }, [count]);

    return { words, updateWords };
}

const useEngine = ({ TimeCount, wordCount }: { TimeCount: number, wordCount: number }) => {
    const [state, setState] = useState<State>("start");
    const { words, updateWords } = useWords(wordCount);
    const { timeLeft, startCountdown, resetCountdown } = useCountDwonTimer(TimeCount);
    const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTyping(state !== "finish");

    const [errors, setErrors] = useState(0);

    const isStarting = state === "start" && cursor > 0;
    const areWordsFinished = cursor === words.length;

    const sumErrors = useCallback(() => {
        const wordsReached = words.substring(0, cursor);
        setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached))
    }, [typed, words, cursor]);

    useEffect(() => {
        if (isStarting) {
            setState("run");
            startCountdown();
        }
    }, [isStarting, startCountdown, cursor]);

    useEffect(() => {
        if (!timeLeft) {
            console.log("time is up...");
            setState("finish");
            sumErrors();
        }
    }, [timeLeft, sumErrors]);

    useEffect(() => {
        if (areWordsFinished) {
            console.log("Words are Finished...");
            sumErrors();
            updateWords();
            clearTyped();
        }
    }, [
        cursor,
        words,
        clearTyped,
        typed,
        areWordsFinished,
        updateWords,
        sumErrors
    ]);

    const stop = useCallback(() => {
        console.log("stop...");
        // sumErrors();
        // updateWords();
        // clearTyped();  
    }, [
        cursor,
        words,
        clearTyped,
        typed,
        areWordsFinished,
        updateWords,
        sumErrors
    ]);

    const restart = useCallback(() => {
        console.log("restarting...");
        resetCountdown();
        resetTotalTyped();
        setState("start");
        setErrors(0);
        updateWords();
        clearTyped()
    }, [
        clearTyped,
        updateWords,
        resetCountdown,
        resetTotalTyped
    ])

    return {
        state,
        words,
        timeLeft,
        typed,
        errors,
        totalTyped,
        restart,
        stop
    }
};

export default useEngine;
