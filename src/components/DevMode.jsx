import { ChevronDown, CodeXml } from "lucide-react"
import FigmaSelectTool from "../icons/FigmaSelectTool.svg"
import FrameTool from "../icons/FrameTool.svg"
import SlashTool from "../icons/SlashTool.svg"
import SketchTool from "../icons/SketchTool.svg"
import TextTool from "../icons/TextTool.svg"
import ChatTool from "../icons/ChatTool.svg"
import AiTool from "../icons/AiTool.svg"
import RulerTool from "../icons/RulerTool.svg"
import WriteBoxTool from "../icons/WriteBoxTool.svg"
import { cn } from "../lib/utils"
import { useState } from "react"
import { motion } from "framer-motion";

const FigmaModes = {
  DesignMode: [
    {
      "tool": FigmaSelectTool,
      "classes": "bg-blue-400 p-[6px]",
      "alt": "Selection tool",
      "addDelay": false
    },
    {
      "tool": FrameTool,
      "classes": "",
      "alt": "Frame tool",
      "addDelay": false
    },
    {
      "tool": SlashTool,
      "classes": "",
      "alt": "Some tool",
      "addDelay": false
    },
    {
      "tool": SketchTool,
      "classes": "",
      "alt": "Sketch tool",
      "addDelay": true
    },
    {
      "tool": TextTool,
      "classes": "",
      "alt": "Text tool",
      "addDelay": true
    },
    {
      "tool": ChatTool,
      "classes": "",
      "alt": "Chat tool",
      "addDelay": true
    },
    {
      "tool": AiTool,
      "classes": "",
      "alt": "AI tool",
      "addDelay": true
    },
  ],
  DevMode: [
    {
      "tool": FigmaSelectTool,
      "classes": "bg-green-500 p-[6px]",
      "alt": "Selection tool",
      "addDelay": true
    },
    {
      "tool": RulerTool,
      "classes": "",
      "alt": "Ruler tool",
      "addDelay": true
    },
    {
      "tool": WriteBoxTool,
      "classes": "",
      "alt": "Write Box tool",
      "addDelay": true
    },
    {
      "tool": ChatTool,
      "classes": "",
      "alt": "Chat tool",
      "addDelay": true
    },
  ]
}

/* eslint-disable react/prop-types */
const FigmaToolButton = (props) => {
  const { overrideClasses, imgSrc, imgAlt } = props
  return (
    <button className="flex gap-1 items-center">
      <div className={cn("rounded-md", overrideClasses)}>
        <img src={imgSrc} alt={imgAlt} className="" />
      </div>
      <div className="">
        <ChevronDown size={16} />
      </div>
    </button>
  )
}

const DevMode = () => {
  const [devMode, setDevMode] = useState(false);
  const toggleDevMode = () => {
    setDevMode(!devMode)
  }
  return (
    <section className="section-card !bg-[#24292E] items-center">
      <div className="rounded-lg flex items-center bg-white mx-auto">
        <div className={"p-3 flex items-center gap-4 transition-all duration-100"}>
          {
            devMode ?
              FigmaModes.DevMode.map(item => (
                <div className={cn("flex items-center gap-4", devMode && "animate-moveDown")} key={item.alt}>
                  <FigmaToolButton
                    overrideClasses={item.classes}
                    imgSrc={item.tool}
                    imgAlt={item.alt}
                  />
                </div>
              ))
              :
              FigmaModes.DesignMode.map(item => (
                <motion.div
                  initial={item.addDelay && { opacity: 0, scale: 0.5 }}
                  animate={item.addDelay && { opacity: 1, scale: 1 }}
                  transition={item.addDelay && {
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                  className={cn("flex items-center gap-4", !devMode && "animate-moveUp")}
                  key={item.alt}
                >
                  <FigmaToolButton
                    overrideClasses={item.classes}
                    imgSrc={item.tool}
                    imgAlt={item.alt}
                    key={item.tool}
                  />
                </motion.div>
              ))
          }
        </div>

        {/* toggle button */}
        <div className="p-3 border-l-2">
          <button onClick={() => toggleDevMode()} className={cn("h-10 w-16 flex rounded-md p-1 transition-all duration-500", devMode ? "bg-green-500 items-end justify-end" : "bg-gray-100")}>
            <div className="p-2 bg-white rounded-md flex items-center shadow-md">
              <CodeXml size={16} />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default DevMode  