import { FC, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

type ConjugationAnimationProps = {
  verbs: {
    base: string;
    firstEnding: string;
    secondEnding: string;
    type: string;
  }[];
  wider?: boolean;
};

const ConjugationAnimation: FC<ConjugationAnimationProps> = ({
  verbs,
  wider,
}) => {
  const [isTransformed, setIsTransformed] = useState(false);
  const [_, setTransformedTimes] = useState(0);
  const [currentVerb, setCurrentVerb] = useState<{
    base: string;
    firstEnding: string;
    secondEnding: string;
    type: string;
  }>(verbs[0]);

  const changeVerb = (times: number) => {
    const nextIndex = times % verbs.length;
    setCurrentVerb(verbs[nextIndex]);
    setIsTransformed(false);
  };

  useEffect(() => {
    setCurrentVerb(verbs[0]);

    const interval = setInterval(() => {
      setIsTransformed((prev) => !prev);
      setTransformedTimes((prev) => {
        const newTimes = prev + 1;
        if (newTimes % 4 === 0) {
          // change verb every 4 times
          changeVerb(newTimes / 4);
        }
        return newTimes;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [verbs]);

  return (
    <div className={`flex items-start justify-start ${wider && "w-[300px]"}`}>
      <span className="text-5xl font-bold">
        {currentVerb.base !== "く" &&
          (currentVerb.base !== "す" &&
            
            currentVerb.base)}
        <span
          className={`inline-block transition-all duration-500 ${
            isTransformed
              ? "animate-fade-in text-green-500"
              : "text-red-500 animate-pulse"
          }`}
        >
          {isTransformed
            ? currentVerb.secondEnding
            : (currentVerb.base === "く" && "くる") ||
              (currentVerb.base === "す" && "する") ||
              currentVerb.firstEnding}
        </span>

        <span className="flex gap-2 font-bold text-lg items-center mt-3">
          {(currentVerb.base === "く" && "くる") ||
            (currentVerb.base === "す" && "する") ||
            currentVerb.firstEnding}
          <FaArrowRight className="opacity-70" /> {currentVerb.secondEnding}
          <span className="opacity-50">{currentVerb.type}</span>
        </span>
      </span>
    </div>
  );
};

export default ConjugationAnimation;
