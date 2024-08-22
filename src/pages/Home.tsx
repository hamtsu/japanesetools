import {
  FaAnglesRight,
  FaCircle,
  FaFile,
  FaGithub,
  FaHeart,
  FaSquareArrowUpRight,
  FaStar,
} from "react-icons/fa6";
import Sidebar from "../components/Sidebar";
import ThemeButton from "../components/ThemeButton";
import HiriganaBackground from "../components/HiraganaBackground";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex">
      <Sidebar currentPage={"Home"} />

      <div className="w-full h-full pl-2 bg-slate-50 dark:bg-neutral-900">
        {/* Header */}
        <div className="flex px-2 pt-3 items-center">
          <div className="rounded-md p-1 font-mono px-3 text-neutral-200 dark:text-neutral-800 bg-neutral-900 dark:bg-neutral-200 h-fit">
            <FaFile className="inline mr-3" />
            you're on the home page
          </div>
          <div className="flex-grow" />
          <ThemeButton />
        </div>

        <div className="flex gap-2 px-3 py-1 flex-nowrap">
          <div className="bg-neutral-200 p-5 rounded-md w-fit animate-fade-in-1">
            <h1 className="text-8xl text-neutral-850 w-[500px]">
              <b>
                KUNREN
                <br />
              </b>
              訓練
              <FaSquareArrowUpRight className="inline rotate-90" />
            </h1>
          </div>

          <HiriganaBackground />
        </div>

        <div className="bg-slate-200 dark:bg-neutral-800 rounded-md mt-1 p-2 px-4 mx-3 flex text-neutral-800 dark:text-neutral-100 font-bold tracking-wide animate-fade-in-3">
          <div className="flex gap-1 font-normal">
            <span className="opacity-60">select a concept to below</span>
            <div className="px-2 leading-5 rounded-md ml-1 border border-neutral-800 opacity-60 dark:border-neutral-200 ">
              <FaAnglesRight
                className="inline text-neutral-850 dark:text-neutral-200"
                size={14}
              />
              <FaAnglesRight
                className="inline text-neutral-850 dark:text-neutral-200"
                size={14}
              />
              <FaAnglesRight
                className="inline text-neutral-850 dark:text-neutral-200"
                size={14}
              />
            </div>
          </div>

          <div className="flex-grow" />

          <div>
            made with <FaHeart className="inline text-red-400 animate-bounce" />{" "}
            by{" "}
            <span
              onClick={() => window.open("https://github.com/hamtsu", "_blank")}
              className="opacity-70 hover:opacity-100 inline cursor-pointer"
            >
              <FaGithub className="inline" /> ethan
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex p-4 gap-4">
          <div
            onClick={() => navigate("/conjugation/verb")}
            className="bg-slate-200 dark:bg-neutral-850 rounded-lg text-neutral-800 dark:text-neutral-200 p-3 border border-transparent hover:border-neutral-800 hover:dark:border-neutral-100 cursor-pointer"
          >
            <div className="flex gap-2 items-center ">
              <div className="bg-indigo-500 p-3 rounded-md">
                <FaCircle className="text-slate-200 " size={25} />
              </div>
              <h1 className="text-3xl font-bold">Verb Conjugation</h1>
            </div>

            <div className="mt-3 bg-slate-100 dark:bg-neutral-900 rounded-md w-full h-28"></div>

            <div className="flex mt-4 gap-2">
              <div className="bg-neutral-700 dark:bg-neutral-200 w-1 rounded-md"></div>
              <p>
                Practice your conjugation of verbs into all various tenses,
                affirmations and types.
              </p>
            </div>

            <p className="bg-purple-400 text-neutral-850 text-opacity-80 px-3 leading-5 w-fit font-mono mt-3 select-none">
              WORK IN PROGRESS
            </p>
          </div>

          <div
            onClick={() => navigate("/conjugation/adjectives")}
            className="bg-slate-200 dark:bg-neutral-850 rounded-lg text-neutral-800 dark:text-neutral-200 p-3 border border-transparent hover:border-neutral-800 hover:dark:border-neutral-100 cursor-pointer"
          >
            <div className="flex gap-2 items-center ">
              <div className="bg-violet-500 p-3 rounded-md">
                <FaStar className="text-slate-200" size={25} />
              </div>
              <h1 className="text-3xl font-bold">Adjective Conjugation</h1>
            </div>

            <div className="mt-3 bg-slate-100 dark:bg-neutral-900 rounded-md w-full h-28"></div>

            <div className="flex mt-4 gap-2">
              <div className="bg-neutral-700 dark:bg-neutral-200 w-1 rounded-md"></div>
              <p>
                Practice your conjugation of Adjectives into all various tenses,
                affirmations and types.
              </p>
            </div>

            <p className="bg-purple-400 text-neutral-850 text-opacity-80 px-3 leading-5 w-fit font-mono mt-3 select-none">
              WORK IN PROGRESS
            </p>
          </div>
        </div>

        {/* TODO make stats */}
        {/* <div className="flex p-4 gap-4">
          <div className="bg-slate-200 dark:bg-neutral-850 rounded-lg p-3 dark:text-slate-100 border dark:border-neutral-700">
            <h1 className="text-2xl font-bold">Verbs Conjugated</h1>

            <div className="flex mt-4 h-fit">
              <div className="bg-gray-600 w-2 h-full rounded-md" />
              <p>.......</p>
            </div>
          </div>

          <div className="bg-slate-200 dark:bg-neutral-850 rounded-lg p-3 dark:text-slate-100 border dark:border-neutral-700">
            <h1 className="text-2xl font-bold">Adjectives Conjugated</h1>

            <div className="flex mt-4 h-fit">
              <div className="bg-gray-600 w-2 h-full rounded-md" />
              <p>.......</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
