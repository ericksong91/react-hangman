function HangmanDrawing() {
    const head = <div className="w-[50px] h-[50px] rounded-full outline-10 outline-black top-[50px] right-[-20px] absolute" />;
    const body = <div className="w-[10px] h-[100px] top-[50px] right-[-20px] absolute" />;
    const rightArm = <div className="w-[100px] h-[10px] top-[150px] right-[-90px] rotate-[30deg] transform-origin-bottom-left bg-black absolute" />;
    const leftArm = <div className="w-[100px] h-[10px] top-[150px] left-[220px] rotate-[-30deg] transform-origin-bottom-left bg-black absolute" />;
    const rightLeg = <div className="w-[100px] h-[10px] top-[230px] right-[-90px] rotate-[60deg] transform-origin-bottom-left bg-black absolute" />;
    const leftLeg = <div className="w-[100px] h-[10px] top-[230px] left-[220px] rotate-[-60deg] transform-origin-bottom-left bg-black absolute" />;


    return (
        <div className="stickman-container relative">
            <div className="hang h-[50px] w-[10px] ml-[120px] top-0 right-0 bg-black absolute" />
            <div className="overhang-line h-[10px] w-[200px] ml-[120px] bg-black" />
            <div className="height-line h-[400px] w-[10px] bg-black ml-[120px]" />
            <div className="base-line h-[10px] w-[250px] bg-black" />
        </div>
    );
};

export default HangmanDrawing;