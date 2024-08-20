import Exclamation from "./Icons/Exclamation";
import JapanFlag from "./Icons/JapanFlag";

const HiriganaBackground = () => {
  return (
    <div
      className="bg-neutral-850 rounded-md p-3 px-14 w-full overflow-clip text-6xl text-neutral-200 font-bold flex items-center animate-fade-in-late"
      style={{
        backgroundImage: "url('./../../japanesetools/hiragana-bg.svg')", // Path to your image
        backgroundRepeat: "repeat",
        backgroundSize: "340px 300px",
      }}
    >
      <p>
        A set of useful tools for learning the <JapanFlag /> <b>Japanese language</b>
        <Exclamation />
      </p>
    </div>
  );
};

export default HiriganaBackground;
