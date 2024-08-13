import { FaCog } from "react-icons/fa";
import { FaCheck, FaFlag, FaXmark } from "react-icons/fa6";
import Button from "./Button";
import { FC } from "react";

type VerbCardProps = {
  isCorrect: boolean;
  currentVerb: any;
  currentConjugationType: string;
  isIncorrect: boolean;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (value: boolean) => void;
};

const VerbCard: FC<VerbCardProps> = ({ isCorrect, currentVerb, currentConjugationType, isIncorrect, isSettingsOpen, setIsSettingsOpen }) => {
  return (
    <div className="flex gap-2">
      {isCorrect ? (
        <>
          <div className="text-slate-100 bg-green-600 p-3 rounded-md antialiased animate-fade-in">
            <h3 className="text-2xl">
              <span className="opacity-70">you were</span> <b>correct</b>
            </h3>
            <h1 className="text-8xl font-extrabold ">
              {currentVerb[currentConjugationType]}
            </h1>
          </div>

          <div className="flex flex-col gap-2 animate-fade-in">
            <div className="text-slate-100 bg-green-600 p-3 rounded-md ">
              <h4 className="text-2xl">{currentVerb.type}</h4>
              <p className="text-1xl font-extrabold ">
                {currentConjugationType.replace(/_/g, " ")}
              </p>
            </div>

            <div className="text-slate-100 bg-green-600 p-3 rounded-md w-fit">
              <FaCheck size="50px" />
            </div>
          </div>
        </>
      ) : isIncorrect ? (
        <>
          <div className="text-slate-100 bg-red-600 p-3 rounded-md antialiased animate-fade-in">
            <h3 className="text-2xl">
              <span className="opacity-70">you were</span> <b>incorrect</b>
            </h3>
            <h1 className="text-8xl font-extrabold ">
              {currentVerb[currentConjugationType]}
            </h1>
          </div>

          <div className="flex flex-col gap-2 animate-fade-in">
            <div className="text-slate-100 bg-red-600 p-3 rounded-md ">
              <h4 className="text-2xl">{currentVerb.type}</h4>
              <p className="text-1xl font-extrabold ">
                {currentConjugationType.replace(/_/g, " ")}
              </p>
            </div>

            <div className="text-slate-100 bg-red-600 p-3 rounded-md w-fit">
              <FaXmark size="50px" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="dark:text-slate-100 bg-slate-200 dark:bg-neutral-800 p-4 rounded-md antialiased animate-fade-in">
            <h3 className="text-4xl font-extrabold">{currentVerb.hiragana}</h3>
            <h1 className="text-9xl font-extrabold ">{currentVerb.kanji}</h1>
          </div>

          <div className="flex gap-2 flex-col">
            <div className="dark:text-slate-100 bg-slate-200 dark:bg-neutral-800 p-3 rounded-md animate-fade-in h-fit">
              <h2 className="text-6xl font-bold">{currentVerb.english}</h2>
              <p className="opacity-50 mt-2">Conjugate this to</p>
              <p className="opacity-100 font-bold">
                {currentConjugationType.replace(/_/g, " ")}
              </p>
            </div>
            <div className="dark:text-slate-100 flex gap-1 bg-slate-200 dark:bg-neutral-800 p-1 rounded-md animate-fade-in h-fit">
              <Button
                type="secret"
                className="flex items-center gap-2"
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              >
                <FaCog/> settings
              </Button>
              <Button
                type="secret"
                className="hover:dark:text-red-500 hover:text-red-500 flex items-center gap-2"
              >
                <FaFlag /> report issue
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VerbCard;
