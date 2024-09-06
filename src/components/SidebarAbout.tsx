import { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaGithub, FaHeart } from 'react-icons/fa6';

const SidebarAbout = () => {
    const [toggleAbout, setToggleAbout] = useState<boolean>(
        localStorage.getItem("verb-conjugation-options") ||
          localStorage.getItem("adjective-conjugation-options")
          ? false
          : true
      );
      
  return (
    <div
          className={`my-3 rounded-md bg-neutral-900 text-neutral-400 p-3 min-w-[230px] ${
            toggleAbout ? "h-[265px]" : "h-[72px]"
          } transition-all`}
        >
          <div onClick={() => setToggleAbout(!toggleAbout)}>
            {toggleAbout ? (
              <div className="flex cursor-pointer gap-1 opacity-50 hover:opacity-100 items-center">
                <FaAngleDown className="text-xl" /> close about
              </div>
            ) : (
              <div className="flex cursor-pointer gap-1 opacity-50 hover:opacity-100 items-center">
                <FaAngleUp className="text-xl" /> about this site
              </div>
            )}
          </div>
          <div className={`${toggleAbout ? "" : "hidden"} animate-fade-in`}>
            <p className="text-sm opacity-70 mb-2">
              A tool to practice conjugation and other core skills in Japanese. I originally made this for myself to practice conjugation, but I figured it may be useful for others as well.
            </p>
            <p className="text-sm inline-block mb-1">
              This website is open source. please ⭐ the repo if you found it
              useful!
            </p>
          </div>
          <div className="text-slate-100 w-full p-1 flex gap-2 items-center">
            <div
              className="flex gap-1 items-center content-center cursor-pointer opacity-50 hover:opacity-100 select-none transition-colors"
              onClick={() =>
                window.open("https://github.com/hamtsu/japanesetools", "_blank")
              }
            >
              <FaGithub /> github
            </div>
            <span className="flex-grow"></span>
            <div className="flex gap-1 items-center content-center cursor-pointer opacity-50 hover:text-pink-500 hover:opacity-100 select-none">
              <FaHeart /> donate
            </div>
          </div>
        </div>
  )
}

export default SidebarAbout