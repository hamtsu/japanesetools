import Exclamation from "./Icons/Exclamation";
import JapanFlag from "./Icons/JapanFlag";

const HiriganaBackground = () => {
  return (
    <div
      className="bg-neutral-850 rounded-md p-3 px-8 w-full overflow-clip text-4xl text-neutral-200 font-bold sm:hidden md:flex items-center animate-fade-in-2"
      style={{
        backgroundImage: "url('./../../kunren/hiragana-bg.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "340px 300px",
      }}
    >
      <p>
        A set of useful tools for learning the <JapanFlag />{" "}
        <b>Japanese language.</b>

        <div className="mt-2"></div>
        <ruby>訓練<rt>くんれん</rt></ruby>しましょう <Exclamation />
      </p>
    </div>
  );
};

export default HiriganaBackground;
