import { LucidePause, LucidePlay } from 'lucide-react'
import toreUp from '../../public/images/tore-up-ixd.png'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Slider } from './ui/slider'

export function Popup() {

  const [isExpanded, setIsExpanded] = useState(false)

  const [value, setValue] = useState(0);
  const max = 350; // Adjust as needed

  useEffect(() => {
    const interval = setInterval(() => {
      if (isExpanded) {
        setValue((prevValue) => (prevValue >= max ? 0 : prevValue + 1));
      }
    }, 100); // Change the interval as needed (1000ms = 1 second)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isExpanded]);

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section className="section-card">
      <div className={clsx("border border-gray-200 rounded-2xl group hover:shadow-2xl shadow-lg p-4 flex flex-wrap gap-4 w-full md:max-w-[400px] transition-all duration-300", isExpanded && 'flex-col')}>
        <img src={toreUp} alt='tore up cover image' className={clsx("rounded-lg transition-all duration-300", isExpanded ? 'w-full h-[368px]' : 'size-20')} />
        {
          isExpanded &&
          <Slider
            value={[value]}
            max={max}
            step={1}
            className='transition-all duration-300'
            // onValueChange={setValue}
          />
        }
        <div className="flex flex-1 justify-between items-center">
          <div className="">
            <h3 className='text-lg font-semibold'>Tore Up</h3>
            <p className="text-base">Don Toliver</p>
          </div>
          <button onClick={() => handleClick()} className="group-hover:flex group-hover:items-center rounded-full gap-1 transition-all duration-300 p-2 bg-gray-900 group-hover:text-white group-hover:px-4 group-hover:py-2">
            {/* TODO: deal with inconsistent sizing of icon on hover */}
            {
              isExpanded ?
                (
                  <>
                    <LucidePause fill='white' className='size-5' size={16} strokeWidth={2} />
                    <span className="hidden group-hover:flex font-semibold">Pause</span>
                  </>
                )
                :
                (
                  <>
                    <LucidePlay fill='white' className='size-5' size={16} />
                    <span className="hidden group-hover:flex font-semibold">Play</span>
                  </>
                )
            }
          </button>
        </div>
      </div>
    </section>
  )
}

export default Popup