function HangmanWord() {
    const word = "test"
    const guessedLetters = ["t"]

    const wordArr = word.split("").map((letter, index) => {
        return (
            <span key={`letter-#${index}-letter`} className="letter-container mx-5 border-b-[.1em] border-black">
                <span className={`${letter}-#${index} ${guessedLetters.includes(letter) ? "visible" : "invisible"}`}>
                    {letter}
                </span>
            </span>)
    });

    return (
        <div className="hang-word flex gap-[.25rem] text-9xl font-bold font-mono uppercase">
            {wordArr}
        </div>
    );
};

export default HangmanWord;