import { FC } from "react";
import { FaAngleDown, FaArrowRight } from "react-icons/fa6";

type VerbConjugationGuideProps = {
  conjugationType: string;
};

const VerbConjugationGuide: FC<VerbConjugationGuideProps> = ({
  conjugationType,
}) => {
  if (conjugationType === "te_form") {
    return (
      <div className="rounded-md p-3 mt-[-50px] bg-neutral-850 text-neutral-200 min-w-[500px]">
        <h1 className="text-2xl mb-2 flex items-center">
          Te-form conjugation guide <div className="flex-grow" />
          <FaAngleDown className="opacity-50 hover:opacity-100" />
        </h1>

        <div className="w-full flex gap-2 rounded-md bg-neutral-900 p-3 text-sm">
          <div>
            <h1 className="font-bold text-sm">Godan Verbs <span className="opacity-70 font-normal">(う-verbs)</span></h1>
            <span className="flex gap-2 font-bold items-center">
              う, つ, る <FaArrowRight className="opacity-70" /> って
            </span>
            <span className="flex gap-2 font-bold items-center">
              め, ぶ, む <FaArrowRight className="opacity-70" /> んで
            </span>
            <span className="flex gap-2 font-bold items-center">
              く <FaArrowRight className="opacity-70" /> いて
            </span>
            <span className="flex gap-2 font-bold items-center">
              ぐ <FaArrowRight className="opacity-70" /> いで
            </span>
            <span className="flex gap-2 font-bold items-center">
              す <FaArrowRight className="opacity-70" /> して
            </span>
          </div>

          <div>
            <h1 className="font-bold text-sm">Ichidan Verbs <span className="opacity-70 font-normal">(る-verbs)</span></h1>
            <span className="flex gap-2 font-bold items-center">
              る <FaArrowRight className="opacity-70" /> って
            </span>

            <h1 className="font-bold text-sm mt-2">
              Irregular Verbs
            </h1>
            <span className="flex items-center">
              行<b>く</b> <FaArrowRight className="mx-2 opacity-70" /> 行<b>って</b>
            </span>
            <span className="flex gap-2 items-center">
              <ruby>
                来<rt className="text-xs opacity-70">く</rt>る
              </ruby>
              <FaArrowRight className="opacity-70" />{" "}
              <ruby>
                来<rt className="text-xs opacity-70">き</rt>る
              </ruby>
            </span>
            <span className="flex items-center">
              する <FaArrowRight className="opacity-70 mx-2" /> し<b>て</b>
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default VerbConjugationGuide;
