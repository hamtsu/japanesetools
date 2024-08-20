import {
  FaArrowDownZA,
  FaArrowRight,
  FaArrowRightArrowLeft,
  FaArrowRightToBracket,
  FaArrowsToCircle,
  FaArrowUpRightFromSquare,
  FaSquareArrowUpRight,
} from "react-icons/fa6";
import Sidebar from "../components/Sidebar";
import ThemeButton from "../components/ThemeButton";
import { FaArrowsAltH } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar currentPage={"Home"} />

      <div className="w-full h-full pl-2 bg-slate-50 dark:bg-neutral-900">
        {/* Header */}
        <div className="flex px-2 pt-3">
          <div className="flex-grow" />
          <ThemeButton />
        </div>

        <div className="flex gap-2 px-3 py-1 flex-wrap">
          <div className="bg-neutral-200 p-5 rounded-md w-fit">
            <h1 className="text-8xl text-neutral-850 w-[500px]">
              <b>JAPANESE</b> TOOLS{" "}
              <FaSquareArrowUpRight className="inline rotate-90" />
            </h1>
          </div>

          <div className="bg-neutral-850 rounded-md p-3 flex-grow overflow-clip">
            <p className="text-neutral-200 rotate-45">

            </p>
          </div>

          <div className="bg-neutral-700 rounded-md w-full h-6"></div>
        </div>

        {/* Content */}
        <div className="flex p-4 mt-14 gap-4">
          <div className="bg-slate-200 dark:bg-neutral-850 rounded-lg p-3 dark:text-slate-100 border dark:border-neutral-700">
            <h1 className="text-2xl font-bold">Kanji Lookup</h1>

            <div className="flex mt-4 h-fit">
              <div className="bg-gray-600 w-2 h-full rounded-md" />
              <p>Look up kanji information here, including the stroke order.</p>
            </div>
          </div>

          <div className="bg-slate-200 dark:bg-neutral-850 rounded-lg p-3 dark:text-slate-100 border dark:border-neutral-700">
            <h1 className="text-2xl font-bold">Conjugation</h1>

            <div className="flex mt-4 h-fit">
              <div className="bg-gray-600 w-2 h-full rounded-md" />
              <p>Look up kanji information here, including the stroke order.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
