import React from "react";
import { cn } from "../../libs/utils";
import { CiBank } from "react-icons/ci";
import {AnimatePresence, motion} from 'motion/react'
import { useState } from "react"; 

const Card = () => {

    const [open, setOpen] = useState(true);
  return (

    <AnimatePresence>
   open && <motion.div

    exit={{
        opacity: 0,
        scale : 0.98,
        filter : "blur(10px)"

    }}

    transition={{
        duration: 1, 
        ease : "easeInOut"
    }}

      className={cn(
        "w-72 min-h-[26rem]  h-[26rem] rounded-xl",
        "shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
        "p-6 flex flex-col bg-white"
      )}
    >
      <h2 className="font-bold text-[10px]"> Kulp UI Components</h2>
      <p className="text-neutral-400 mt-2 text-[10px]">
        {" "}
        Collection of beautiful UI components, let's get on with it.
      </p>
      <div className="flex items-center justify-center">
        <button className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1" onClick={(event) => setOpen(!event)}>
          <img
            src="https://assets.aceternity.com/pro/logos/aceternity-ui.png"
            height={50}
            width={50}
            alt="logo"
          />
        </button>
      </div>
      <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
        <motion.div 
            initial={{
                opacity : 0,
                scale: 0.98,
                filter : 'blur(10px)'
            }}

            whileHover={{
                opacity : 1,
                scale: 1.05,
                filter : 'blur(0px)'
            }}

            transition={{
                type : "spring",
                duration: 1,
                ease:'easeInOut'
            }}

        className="absolute inset-0 h-full w-full border-neutral-200 bg-white rounded-lg divide-y  divide-neutral-200 flex flex-col ">
          <div className="flex flex-row flex-1 items-center justify-center">
            <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ml-1">
              <CiBank className="h-4 w-4 m text-neutral-600" />
            </div>
            <div className="flex flex-col ml-2">
              <p className="text-[8px] font-bold text-neutral-600">
                Acerternity UI Components
              </p>
              <p className="text-[8px]  text-neutral-400 mt-1">
                Acerternity UI Components
              </p>
            </div>
          </div>
          <div className="flex flex-row flex-1 items-center justify-center">
            <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ml-1">
              <CiBank className="h-4 w-4 m text-neutral-600" />
            </div>
            <div className="flex flex-col ml-2">
              <p className="text-[8px] font-bold text-neutral-600">
                Acerternity UI Components
              </p>
              <p className="text-[8px]  text-neutral-400 mt-1">
                Acerternity UI Components
              </p>
            </div>
          </div>
          <div className="flex flex-row flex-1 items-center justify-center">
            <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ml-1">
              <CiBank className="h-4 w-4 m text-neutral-600" />
            </div>
            <div className="flex flex-col ml-2">
              <p className="text-[8px] font-bold text-neutral-600">
                Acerternity UI Components
              </p>
              <p className="text-[8px]  text-neutral-400 mt-1">
                Acerternity UI Components
              </p>
            </div>
          </div>
          <div className="flex flex-row flex-1 items-center justify-center">
            <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ml-1">
              <CiBank className="h-4 w-4 m text-neutral-600" />
            </div>
            <div className="flex flex-col ml-2">
              <p className="text-[8px] font-bold text-neutral-600">
                Acerternity UI Components
              </p>
              <p className="text-[8px]  text-neutral-400 mt-1">
                Acerternity UI Components
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default Card;
