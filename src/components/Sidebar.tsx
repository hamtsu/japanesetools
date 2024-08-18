import { FC, useState } from "react";
import Chevron from "./Icons/Chevron";
import {
  FaCircle,
  FaGithub,
  FaHeart,
  FaLanguage,
  FaMagnifyingGlass,
  FaStar,
} from "react-icons/fa6";
import {
  FaAngleDown,
  FaAngleUp,
  FaGavel,
  FaGlobeAsia,
  FaHashtag,
  FaHome,
} from "react-icons/fa";
import Button from "./Button";

import { useNavigate } from "react-router-dom";
import Divider from "./Divider";

type SidebarProps = {
  currentPage: string;
};

const Sidebar: FC<SidebarProps> = ({ currentPage }) => {
  const [isHover, setIsHover] = useState<boolean>();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isConjugationOpen, setIsConjugationOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsHover(false);
  };

  const navigate = useNavigate();

  const extendConjugation = () => {
    setIsConjugationOpen(!isConjugationOpen);
  };

  return (
    <div
      className={`flex bg-slate-100 dark:bg-neutral-900 ${
        isSidebarOpen ? "" : "w-0"
      }`}
    >
      <div
        className={`${
          isSidebarOpen ? "left-0" : "-left-80"
        } h-screen sm:flex order-1 relative flex-col bg-slate-200 dark:bg-neutral-850 px-3 p-1 transition-all `}
      >
        <h1 className="mb-2 px-2 text-2xl dark:text-neutral-200 text-neutral-600 p-1 rounded-md flex items-center gap-4">
          <div className="min-w-[50px] h-[50px] border border-neutral-500 rounded-md flex items-center text-center">
            <FaGlobeAsia className="mx-auto" />
          </div>
          <div>
            <b>Japanese</b> Tools
          </div>
        </h1>

        <Divider height={1} />

        <div className="flex flex-col gap-2 w-full mt-2">
          <Button
            type={currentPage == "Home" ? "sidebar-current" : "sidebar"}
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <FaHome className="text-sm" />
            Home
            {currentPage == "Home" && (
              <>
                <div className="flex-grow" />

                <div className="h-full w-1 rounded-md bg-neutral-600 dark:bg-white animate-fade-in"></div>
              </>
            )}
          </Button>

          {/* <Button
            type={currentPage == "Kanji" ? "sidebar-current" : "sidebar"}
            onClick={() => navigate("/kanji")}
            className="flex items-center gap-2 font-bold"
          >
            <FaMagnifyingGlass className="text-sm" />
            Kanji Lookup
          </Button> */}

          <Button
            type={currentPage == "Particles" ? "sidebar-current" : "sidebar"}
            onClick={() => navigate("/particles")}
            className="flex items-center gap-2 "
          >
            <b>は</b>
            Particles
            <div className="bg-yellow-400 px-1 text-neutral-900 font-mono">
              WIP
            </div>
            {currentPage == "Particles" && (
              <>
                <div className="flex-grow" />

                <div className="h-full w-1 rounded-md bg-neutral-600 dark:bg-white animate-fade-in"></div>
              </>
            )}
          </Button>

          <Button
            type={currentPage == "Conjugation" ? "sidebar-current" : "sidebar"}
            onClick={extendConjugation}
            className="flex items-center gap-2"
          >
            <FaHashtag className="text-sm" />
            Conjugation {isConjugationOpen ? <FaAngleUp /> : <FaAngleDown />}
          </Button>

          {/* Conjugation section */}
          <div
            className={`${
              isConjugationOpen ? "flex" : "hidden"
            } flex-col gap-1 text-sm ml-3`}
          >
            <Button
              type={
                currentPage == "Verb-Conjugation"
                  ? "sidebar-current"
                  : "sidebar"
              }
              onClick={() => navigate("/conjugation/verb")}
              className="flex items-center gap-2 "
            >
              <FaCircle size={12} />
              Verbs
              <div className="bg-purple-400 px-1 text-neutral-900 font-mono">
                WIP
              </div>
              {currentPage == "Verb-Conjugation" && (
              <>
                <div className="flex-grow" />

                <div className="h-full w-1 rounded-md bg-neutral-600 dark:bg-white animate-fade-in"></div>
              </>
            )}
            </Button>
            <Button
              type={
                currentPage == "Adjective-Conjugation"
                  ? "sidebar-current"
                  : "sidebar"
              }
              onClick={() => navigate("/conjugation/adjectives")}
              className="flex items-center gap-2 "
            >
              <FaStar />
              Adjectives
              <div className="bg-yellow-400 px-1 text-neutral-900 font-mono">
                WIP
              </div>

              {currentPage == "Adjective-Conjugation" && (
              <>
                <div className="flex-grow" />

                <div className="h-full w-1 rounded-md bg-neutral-600 dark:bg-white animate-fade-in"></div>
              </>
            )}
            </Button>
          </div>
        </div>

        <div className="flex-grow" />
        <div className="text-slate-100 w-full p-1 flex gap-2 items-center">
          <div
            className="flex gap-1 items-center content-center opacity-50 hover:opacity-100 select-none transition-colors"
            onClick={() =>
              window.open("https://github.com/hamtsu/japanesetools", "_blank")
            }
          >
            <FaGithub /> github
          </div>
          <span className="text-xs opacity-50 select-none">●</span>
          <div className="flex gap-1 items-center content-center opacity-50 hover:text-pink-500 hover:opacity-100 select-none">
            <FaHeart /> donate
          </div>
        </div>
      </div>

      <div
        className={`h-screen ${
          isSidebarOpen ? "order-2" : ""
        } flex items-center bg-transparent text-neutral-500/50 dark:text-slate-300/50`}
      >
        {isSidebarOpen ? (
          <span
            onClick={toggleSidebar}
            className={`px-2 absolute z-10 transition-opacity ${
              isHover ? "opacity-100" : "opacity-50"
            }`}
            onMouseLeave={() => setIsHover(false)}
            onMouseEnter={() => setIsHover(true)}
          >
            {isHover ? (
              <Chevron color="#e2e8f0" />
            ) : (
              <div className="h-5 rounded-md w-1 bg-neutral-500/50 dark:bg-slate-300/50"></div>
            )}
          </span>
        ) : (
          <span
            onClick={toggleSidebar}
            className={`px-2 rotate-180 transition-opacity ${
              isHover ? "opacity-100" : "dark:opacity-50"
            }`}
            onMouseLeave={() => setIsHover(false)}
            onMouseEnter={() => setIsHover(true)}
          >
            <Chevron color="#e2e8f0" />
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
