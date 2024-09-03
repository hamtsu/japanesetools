import { FaCaretRight } from "react-icons/fa6"

const ArrowScroller = () => {
  return (
    <p className="rounded-md overflow-hidden whitespace-nowrap bg-slate-100 dark:bg-neutral-800 mb-4">
            <div className="animate-scroll opacity-50 flex">
              <FaCaretRight size={20} />
              <FaCaretRight size={20} />
              <FaCaretRight size={20} />
              <FaCaretRight size={20} />
              <FaCaretRight size={20} />
              <FaCaretRight size={20} />
              <FaCaretRight size={20} />
            </div>
          </p>
  )
}

export default ArrowScroller