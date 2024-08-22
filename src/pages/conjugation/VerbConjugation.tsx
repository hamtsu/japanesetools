import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import ThemeButton from "../../components/ThemeButton";
import conjugationdata from "../../assets/conjugationdata.json";
import HiraganaInput from "../../components/HiraganaInput";
import { FaArrowRight, FaExclamationCircle } from "react-icons/fa";
import { FaPersonCircleExclamation } from "react-icons/fa6";
import Button from "../../components/Button";
import StreakCounter from "../../components/StreakCounter";
import VerbCard from "../../components/VerbCard";
import VerbSettings from "../../components/VerbSettings";
import VerbConjugationGuide from "../../components/VerbConjugationGuide";

const VerbConjugation = () => {
  const [currentVerb, setCurrentVerb] = useState<{
    kanji: string;
    hiragana: string;
    te_form: string;
    english: string;
    type: string;
    past_affirmative_plain: string;
    past_affirmative_polite: string;
    past_negative_plain: string;
    past_negative_polite: string;
    present_negative_plain: string;
    present_negative_polite: string;
  }>();
  const [currentConjugationType, setCurrentConjugationType] =
    useState<string>("te_form");

  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isIncorrect, setIsIncorrect] = useState<boolean>(false);

  const [currentStreak, setCurrentStreak] = useState<number>(0);

  const [enteredAnswer, setEnteredAnswer] = useState("");

  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const [badSettings, setBadSettings] = useState<boolean>(false);

  const [defaultOptions, setDefaultOptions] = useState<{
    te_form: boolean;
    "う-verbs": boolean;
    "る-verbs": boolean;
    irregular: boolean;
    past: boolean;
    present: boolean;
    negative: boolean;
    affirmative: boolean;
    plain: boolean;
  }>({
    te_form: true,
    "う-verbs": true,
    "る-verbs": true,
    irregular: true,
    past: true,
    present: true,
    negative: true,
    affirmative: true,
    plain: true,
  });

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomConjugationType(options: typeof defaultOptions) {
    const types = [];

    if (options.te_form) {
      types.push("te_form");
    }

    if (options.past || options.present || options.irregular) {
      if (!options.plain) {
        if (options.affirmative) {
          if (options.past) {
            types.push("past_affirmative_polite");
          }
        }

        if (options.negative) {
          if (options.past) {
            types.push("past_negative_polite");
          }
          if (options.present) {
            types.push("present_negative_polite");
          }
        }
      }

      if (options.plain) {
        if (options.affirmative) {
          if (options.past) {
            types.push("past_affirmative_plain");
          }
        }

        if (options.negative) {
          if (options.past) {
            types.push("past_negative_plain");
          }
          if (options.present) {
            types.push("present_negative_plain");
          }
        }
      }
    }

    return types[getRandomInt(0, types.length - 1)];
  }

  function nextRandomVerb(options: typeof defaultOptions) {
    const verbs = conjugationdata.verbs;
    let randomType = randomConjugationType(options);
    let chosenVerb;

    do {
      let randomVerb = verbs[getRandomInt(0, verbs.length - 1)];

      if (randomVerb.type === "う-verb" && options["う-verbs"]) {
        chosenVerb = randomVerb;
      }
      if (randomVerb.type === "る-verb" && options["る-verbs"]) {
        chosenVerb = randomVerb;
      }
      if (randomVerb.type === "irregular" && options.irregular) {
        chosenVerb = randomVerb;
      }
    } while (!chosenVerb || chosenVerb === currentVerb);

    setCurrentVerb(chosenVerb);
    setCurrentConjugationType(randomType);
  }

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const answer = e.target[0].value;
    setEnteredAnswer(answer);

    if (answer === currentVerb?.[currentConjugationType]) {
      setIsCorrect(true);
      setCurrentStreak(currentStreak + 1);
    } else {
      setIsIncorrect(true);
      setCurrentStreak(0);
    }
  };

  const onOptionChange = (name: string, enabled: boolean) => {
    const options = JSON.parse(
      localStorage.getItem("verb-conjugation-options")
    );

    options[name] = enabled;

    if (
      options.present &&
      !options.past &&
      !options.te_form &&
      !options.negative
    ) {
      setBadSettings(true);
    } else {
      setBadSettings(false);

      localStorage.setItem("verb-conjugation-options", JSON.stringify(options));
      setDefaultOptions(options);
    }
  };

  useEffect(() => {
    let options = localStorage.getItem("verb-conjugation-options");

    if (!options) {
      localStorage.setItem(
        "verb-conjugation-options",
        JSON.stringify({
          te_form: true,
          "う-verbs": true,
          "る-verbs": true,
          irregular: true,
          past: true,
          present: true,
          negative: true,
          affirmative: true,
          plain: true,
        })
      );

      options = localStorage.getItem("verb-conjugation-options");
    }

    setDefaultOptions(JSON.parse(options));

    nextRandomVerb(JSON.parse(options)); // Passed through as updated state cant be accessed from function for whatever reason
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter" && (isCorrect || isIncorrect)) {
        e.preventDefault();
        setIsCorrect(false);
        setIsIncorrect(false);
        nextRandomVerb(
          JSON.parse(localStorage.getItem("verb-conjugation-options"))
        );
      }
    };

    window.addEventListener("keydown", handler, false);
    return () => window.removeEventListener("keydown", handler, false);
  }, [isCorrect, isIncorrect]);

  const closeSettings = () => {
    if (!badSettings) {
      setIsSettingsOpen(false);
      nextRandomVerb(defaultOptions);
    }
  };

  return (
    <div className="w-screen h-screen flex">
      <Sidebar currentPage={"Verb-Conjugation"} />

      <div className="w-full h-full pl-2 bg-slate-50 dark:bg-neutral-900">
        {/* Header */}
        <div className="flex px-2 pt-3">
          <div className="flex flex-col">
            <h1 className="text-4xl text-neutral-900 dark:text-slate-50">
              <b>Verb</b> Conjugation
            </h1>
            <p className="bg-purple-400 text-neutral-850 text-opacity-80 px-3 leading-5 w-fit font-mono mt-1 select-none">
              ALMOST FINISHED
            </p>
          </div>
          <div className="flex-grow" />
          <ThemeButton />
        </div>

        {/* Content */}
        <div className="flex flex-col w-full h-full items-center mt-5 gap-20">
          {currentVerb && !isSettingsOpen ? (
            <>
              <StreakCounter streak={currentStreak} />
              <VerbCard
                currentConjugationType={currentConjugationType}
                currentVerb={currentVerb}
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
                      nextRandomVerb(defaultOptions);
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
              <VerbConjugationGuide conjugationType={currentConjugationType} />
            </>
          ) : isSettingsOpen ? (
            <VerbSettings
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

export default VerbConjugation;
