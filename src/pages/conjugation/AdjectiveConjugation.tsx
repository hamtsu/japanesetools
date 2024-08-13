import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import ThemeButton from "../../components/ThemeButton";
import StreakCounter from "../../components/StreakCounter";
import conjugationdata from "../../assets/conjugationdata.json";
import { FaExclamationCircle } from "react-icons/fa";
import Button from "../../components/Button";
import { FaArrowRight, FaPersonCircleExclamation } from "react-icons/fa6";
import HiraganaInput from "../../components/HiraganaInput";
import AdjectiveCard from "../../components/AdjectiveCard";
import AdjectiveSettings from "../../components/AdjectiveSettings";


const AdjectiveConjugation = () => {
  const [currentAdjective, setCurrentAdjective] = useState<{
    kanji: string;
    hiragana: string;
    english: string;
    type: string;
    present_negative: string;
    past_affirmative: string;
    past_negative: string;
  }>();

  const [currentConjugationType, setCurrentConjugationType] =
    useState<string>("present_negative");

  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isIncorrect, setIsIncorrect] = useState<boolean>(false);

  const [currentStreak, setCurrentStreak] = useState<number>(0);

  const [enteredAnswer, setEnteredAnswer] = useState("");

  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const [badSettings, setBadSettings] = useState<boolean>(false);

  const [defaultOptions, setDefaultOptions] = useState<{
    "い-adjectives": boolean;
    "な-adjectives": boolean;
    past: boolean;
    present: boolean;
    negative: boolean;
    affirmative: boolean;
  }>({
    "い-adjectives": true,
    "な-adjectives": true,
    past: true,
    present: true,
    negative: true,
    affirmative: true,
  });

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomConjugationType(options: typeof defaultOptions) {
    const types = [];

    if (options.past || options.present) {
      if (options.affirmative) {
        if (options.past) {
          types.push("past_affirmative");
        }
      }

      if (options.negative) {
        if (options.past) {
          types.push("past_negative");
        }
        if (options.present) {
          types.push("present_negative");
        }
      }
    }

    return types[getRandomInt(0, types.length - 1)];
  }

  function nextRandomAdjective(options: typeof defaultOptions) {
    const adjectives = conjugationdata.adjectives;
    const randomType = randomConjugationType(options);
    let chosenAdjective;

    let timeout = 0

    do {
      let randomAdjective = adjectives[getRandomInt(0, adjectives.length - 1)];

      if (randomAdjective.type === "い-adjective" && options["い-adjectives"]) {
        chosenAdjective = randomAdjective;
      }
      if (randomAdjective.type === "な-adjective" && options["な-adjectives"]) {
        chosenAdjective = randomAdjective;
      }

      if (timeout > 100) {
        console.log("error finding adjective")
        break;
      }

      timeout++
    } while (!chosenAdjective || chosenAdjective === currentAdjective);

    setCurrentAdjective(chosenAdjective);
    setCurrentConjugationType(randomType);
  }

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const answer = e.target[0].value;
    setEnteredAnswer(answer);

    if (answer === currentAdjective?.[currentConjugationType]) {
      setIsCorrect(true);
      setCurrentStreak(currentStreak + 1);
    } else {
      setIsIncorrect(true);
      setCurrentStreak(0);
    }
  };

  const onOptionChange = (name: string, enabled: boolean) => {
    const options = JSON.parse(
      localStorage.getItem("adjective-conjugation-options")
    );

    options[name] = enabled;

    if (options.present && !options.past && !options.negative) {
      setBadSettings(true);
    } else {
      setBadSettings(false);

      localStorage.setItem(
        "adjective-conjugation-options",
        JSON.stringify(options)
      );
      setDefaultOptions(options);
    }
  };

  useEffect(() => {
    let options = localStorage.getItem("adjective-conjugation-options");

    if (!options) {
      localStorage.setItem(
        "adjective-conjugation-options",
        JSON.stringify({
          "い-adjectives": true,
          "な-adjectives": true,
          past: true,
          present: true,
          negative: true,
          affirmative: true,
        })
      );

      options = localStorage.getItem("adjective-conjugation-options");
    }

    setDefaultOptions(JSON.parse(options));

    nextRandomAdjective(JSON.parse(options)); // Passed through as updated state cant be accessed from function for whatever reason
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter" && (isCorrect || isIncorrect)) {
        e.preventDefault();
        setIsCorrect(false);
        setIsIncorrect(false);
        nextRandomAdjective(
          JSON.parse(localStorage.getItem("adjective-conjugation-options"))
        );
      }
    };

    window.addEventListener("keydown", handler, false);
    return () => window.removeEventListener("keydown", handler, false);
  }, [isCorrect, isIncorrect]);

  const closeSettings = () => {
    if (!badSettings) {
      setIsSettingsOpen(false);
      nextRandomAdjective(defaultOptions);
    }
  };

  return (
    <div className="w-screen h-screen flex">
      <Sidebar currentPage={"Adjective-Conjugation"} />

      <div className="w-full h-full pl-2 bg-slate-50 dark:bg-neutral-900">
        {/* Header */}
        <div className="flex px-2 pt-3">
          <div className="flex flex-col">
            <h1 className="text-4xl text-neutral-900 dark:text-slate-50">
              <b>Adjective</b> Conjugation
            </h1>
            <p className="bg-yellow-400 text-neutral-850 text-opacity-80 px-3 leading-5 w-fit font-mono mt-1 select-none">
              WORK IN PROGRESS
            </p>
          </div>
          <div className="flex-grow" />
          <ThemeButton />
        </div>

        {/* Content */}
        <div className="flex flex-col w-full h-full items-center mt-5 gap-20">
          {currentAdjective && !isSettingsOpen ? (
            <>
              <StreakCounter streak={currentStreak} />
              <AdjectiveCard
                currentConjugationType={currentConjugationType}
                currentAdjective={currentAdjective}
                isCorrect={isCorrect}
                isIncorrect={isIncorrect}
                isSettingsOpen={isSettingsOpen}
                setIsSettingsOpen={setIsSettingsOpen}
              />

              {isCorrect || isIncorrect ? (
                <div>
                  <div className="flex my-2">
                    <p className="text-neutral-800/50 dark:text-slate-100/60 ">
                      you entered{" "}
                      <b className="text-neutral-800 dark:text-slate-100">
                        {enteredAnswer}
                      </b>
                    </p>

                    <div className="flex-grow" />

                    <p className="text-neutral-800/50 dark:text-slate-100/60 flex items-center gap-1 hover:text-red-500 hover:dark:text-red-500 hover:cursor-pointer transition-colors">
                      <FaExclamationCircle size={15} /> report problem
                    </p>
                  </div>

                  <Button
                    type="secret-success"
                    className="w-96 font-bold text-lg flex items-center gap-1"
                    onClick={() => {
                      setIsCorrect(false);
                      setIsIncorrect(false);
                      nextRandomAdjective(defaultOptions);
                    }}
                  >
                    Next verb <FaArrowRight />
                  </Button>
                </div>
              ) : (
                <div className="flex gap-2 ">
                  <div className="dark:text-slate-100 bg-slate-200 dark:bg-neutral-800 p-2 rounded-md w-96">
                    <form onSubmit={onSubmit}>
                      <HiraganaInput />
                      <input type="submit" className="hidden" />
                    </form>
                  </div>
                </div>
              )}
            </>
          ) : isSettingsOpen ? (
            <AdjectiveSettings
              badSettings={badSettings}
              closeSettings={closeSettings}
              defaultOptions={defaultOptions}
              onOptionChange={onOptionChange}
            />
          ) : (
            <div className="dark:text-slate-100 w-96 h-36 mt-36 bg-slate-200 dark:bg-neutral-800 p-4 rounded-md antialiased">
              <FaPersonCircleExclamation
                className="animate-fade-in"
                size={30}
              />
              <h1 className="text-4xl font-bold">Loading...</h1>
              <p>Currently loading please wait</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdjectiveConjugation;
