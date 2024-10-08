import { FC, useEffect } from "react";
import { FaArrowRight, FaEye, FaEyeSlash, FaInfo } from "react-icons/fa6";
import ConjugationAnimation from "./ConjugationAnimation";
import ArrowScroller from "./ArrowScroller";
import Button from "./Button";

type VerbConjugationGuideProps = {
  conjugationType: string;
  hidden: boolean;
  setHidden: any;
  incorrectEnding?: string;
  verbType: "う-verb" | "る-verb" | "irregular";
  verbConjugatedEnding: string;
  verbBase: string;

};

const VerbConjugationGuide: FC<VerbConjugationGuideProps> = ({
  conjugationType,
  hidden,
  setHidden,
  incorrectEnding,
  verbType,
  verbConjugatedEnding,
  verbBase
}) => {
  useEffect(() => {
    if (incorrectEnding) {
      let element;

      if (verbType === "る-verb") {
        element = document.getElementById("る");
      } else if (verbType === "irregular") {
        const irregularSection = document.getElementById("irregular");

        if (irregularSection) {
          irregularSection.className = irregularSection.className + " text-lg text-green-500";
        }
      } else {
        if (
          incorrectEnding === "う" ||
          incorrectEnding === "つ" ||
          incorrectEnding === "る"
        ) {
          element = document.getElementById("うつる");
        } else if (
          incorrectEnding === "め" ||
          incorrectEnding === "ぶ" ||
          incorrectEnding === "む"
        ) {
          element = document.getElementById("めぶむ");
        } else {
          element = document.getElementById(incorrectEnding);
        }
      }
      if (element) {
        element.className = element.className + " text-lg text-green-500";

        const childrenBefore = Array.from(element.children);

        const arrowRight = document.createElement("span");
        arrowRight.className = "animate-pulse text-lg text-green-500";
        arrowRight.innerHTML = "➜";

        element.innerHTML = "";

        element.appendChild(arrowRight);

        childrenBefore.forEach((child) => {
          element.appendChild(child);
        });
      }
    }
  }, [incorrectEnding]);

  if (conjugationType === "te_form") {
    return (
      <div className="flex gap-3 animate-fade-in-late mt-[-50px]">
        {hidden ? (
          <>
            <div className="flex-col">
              <div className="bg-slate-200 text-neutral-800 dark:bg-neutral-850 dark:text-neutral-200 animate-fade-in-1 rounded-md min-w-[220px] text-3xl h-fit p-2">
                <ArrowScroller />

                <ConjugationAnimation
                  verbs={
                    incorrectEnding ? [
                      {
                        base: verbBase,
                        firstEnding: incorrectEnding,
                        secondEnding: verbConjugatedEnding,
                        type: verbType,
                      }
                    ] : [
                    {
                      base: "行",
                      firstEnding: "く",
                      secondEnding: "って",
                      type: "irregular",
                    },
                    {
                      base: "食べ",
                      firstEnding: "る",
                      secondEnding: "て",
                      type: "ichidan",
                    },
                    {
                      base: "遊",
                      firstEnding: "ぶ",
                      secondEnding: "んで",
                      type: "godan",
                    },
                  ]}
                />
              </div>

              <div className="bg-slate-200 rounded-md animate-fade-in-2 mt-2 dark:bg-neutral-850">
                <Button
                  type="secret"
                  onClick={() => setHidden(!hidden)}
                  className="w-fit flex gap-2 items-center"
                >
                  <FaEyeSlash /> hide guide
                </Button>
              </div>
            </div>

            <div className="rounded-md animate-fade-in-3 p-3 bg-slate-200 text-neutral-800 dark:bg-neutral-850 dark:text-neutral-200 min-w-[500px]">
              <div className="w-full flex gap-2 rounded-md bg-slate-100 dark:bg-neutral-900 p-3 text-sm">
                <div>
                  <h1 className="font-bold text-sm">
                    Godan Verbs{" "}
                    <span className="opacity-70 font-normal">(う-verbs)</span>
                  </h1>
                  <span
                    id="うつる"
                    className="flex gap-2 font-bold items-center"
                  >
                    <span>う, つ, る</span>{" "}
                    <FaArrowRight className="opacity-70" /> <span>って</span>
                  </span>
                  <span
                    id="めぶむ"
                    className="flex gap-2 font-bold items-center"
                  >
                    <span>め, ぶ, む</span>{" "}
                    <FaArrowRight className="opacity-70" /> <span>んで</span>
                  </span>
                  <span id="く" className="flex gap-2 font-bold items-center">
                    <span>く</span> <FaArrowRight className="opacity-70" />{" "}
                    <span>いて</span>
                  </span>
                  <span id="ぐ" className="flex gap-2 font-bold items-center">
                    <span>ぐ</span> <FaArrowRight className="opacity-70" />{" "}
                    <span>いで</span>
                  </span>
                  <span id="す" className="flex gap-2 font-bold items-center">
                    <span>す</span> <FaArrowRight className="opacity-70" />{" "}
                    <span>して</span>
                  </span>
                </div>
                <div>
                  <h1 className="font-bold text-sm">
                    Ichidan Verbs{" "}
                    <span className="opacity-70 font-normal">(る-verbs)</span>
                  </h1>
                  <span id="る" className="flex gap-2 font-bold items-center">
                    <span>る</span> <FaArrowRight className="opacity-70" />{" "}
                    <span>て</span>
                  </span>
                </div>
                <div id="irregular">
                  <h1 className="font-bold text-sm">Irregular Verbs</h1>
                  <span id="行く" className="flex items-center">
                    <span>
                      行<b>く</b>{" "}
                    </span>
                    <FaArrowRight className="mx-2 opacity-70" />{" "}
                    <span>
                      行<b>って</b>
                    </span>
                  </span>
                  <span id="来る" className="flex gap-2 items-center">
                    <ruby>
                      来<rt className="text-xs opacity-70">く</rt>る
                    </ruby>
                    <FaArrowRight className="opacity-70" />{" "}
                    <ruby>
                      来<rt className="text-xs opacity-70">き</rt>て
                    </ruby>
                  </span>
                  <span id="する" className="flex items-center">
                    <span>する</span>{" "}
                    <FaArrowRight className="opacity-70 mx-2" /> <span>し</span>
                    <b>て</b>
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Button
            type="secret"
            onClick={() => setHidden(!hidden)}
            className="w-fit animate-fade-in flex gap-2 items-center"
          >
            <FaEye /> show conjugation guide
          </Button>
        )}
      </div>
    );
  }
};

export default VerbConjugationGuide;
