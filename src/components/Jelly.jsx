import clsx from "clsx";
import { useState } from "react";
import CheckMark from "../icons/PeerlistCheckmark.svg"

export const Jelly = () => {

  const [tagSelected, setTagSelected] = useState([]);

  const cuisines = ["Indian", "Italian", "French", "Spanish", "German", "Japanese", "Chinese", "Portugese", "Arabic", "Korean", "Dutch", "Swedish", "Russian", "Asian", "American", "Scandanavian", "Continental"]

  function JellyTagSelected(index) {
    let btnId = "button-" + index
    let findButtonId = tagSelected.filter(tag => tag === btnId)
    if (!findButtonId.length) {
      setTagSelected([...tagSelected, btnId])
    } else {
      let filteredButtons = tagSelected.filter(tag => tag !== btnId)
      setTagSelected([...filteredButtons])
    }
  }

  return (
    <section className="section-card flex flex-col py-36" id="day2">
      <h2 className="font-instrumentSerif text-5xl mb-6 text-balance">What are your favorite cuisines?</h2>
      <div className="flex gap-2 max-w-3xl flex-wrap">
        {
          cuisines.map((item, index) => {
            let tagStatus = tagSelected.includes("button-" + index)
            return (
              <button
                key={item}
                id={"button-" + index}
                className={
                  clsx("py-2 px-3 rounded-full border border-orange-500 transition-all duration-300",
                    tagStatus ? "text-white bg-orange-500 hover:bg-orange-500"
                      : "text-gray-700 bg-transparent hover:bg-orange-100")
                }
                onClick={() => JellyTagSelected(index)}
              >
                <div className="flex items-center gap-2 justify-center text-base">
                  {item}
                  {tagStatus && <img src={CheckMark} alt="checkmark" className="animate-checkmark" />}
                </div>
              </button>
            )
          })
        }
      </div>
    </section>
  )
}