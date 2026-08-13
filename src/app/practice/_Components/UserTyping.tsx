import cn from "classnames";

const UserTyping = ({
    userInput,
    words
}: {
    userInput: string;
    words: string;
}) => {
    const typedCharacters = userInput.split("")

    return (
        <div className="text-[20px] leading-8 font-semibold">
            {
                typedCharacters.map((char, index) =>(
                    <   Character key={`${char}_${index}`} actual={char} expected={words[index]} />
                ))
            }
        </div>
    )
};

const Character = ({ actual, expected }: { actual: string; expected: string }) => {
    const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";

    return <span className={cn({
        "text-red-500": !isCorrect && !isWhiteSpace,
        "text-[#192060]": isCorrect && !isWhiteSpace,
        "bg-red-500/50": !isCorrect && isWhiteSpace,
    })}>{expected}</span>;
};

export default UserTyping