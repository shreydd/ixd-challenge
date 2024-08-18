import clsx from "clsx";
import { animate, motion } from "framer-motion";
import { ArrowBigUp } from "lucide-react";
import { useState } from "react";

export const Upvote = () => {
  
  const [upvoteCount, setUpvoteCount] = useState(70);
  const [upVoted, setUpVoted] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  function AnimateButton() {
    if (upVoted) {
      setUpvoteCount(upvoteCount - 1)
      setUpVoted(!upVoted);
    } else {
      setUpvoteCount(upvoteCount + 1)
      setUpVoted(!upVoted);
    }
    !upVoted && animate("#upvote-arrow-wrapper",{y: [-4, 4, 0]})
  }

  return (
    <section className="section-card">
      <button 
        onClick={() => AnimateButton()} 
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)} 
        className={clsx("hover:border-green-400 hover:text-green-400 border-2 hover:shadow-[0_0_0_4px_#00AA4526] rounded-lg flex flex-col items-center px-5 py-2", upVoted ? "border-green-500 text-green-500" : "border-gray-400")}
      >
        <motion.div id="upvote-arrow-wrapper" className={clsx(buttonHover && "bg-green-100 rounded-full")}>
          <ArrowBigUp size={36} strokeWidth={1.2} fill={clsx(upVoted ? "#4ade80" : "none")} />
        </motion.div>
        <p className={clsx("text-base font-semibold text-black", upVoted && "text-green-400")}>{upvoteCount}</p>
      </button>
    </section>
  )
}