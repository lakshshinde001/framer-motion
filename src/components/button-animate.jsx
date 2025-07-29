import React from 'react'
import {motion} from 'motion/react'

const AnimateButton = () => {
  return (
   <div className="[perspective::1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-900 flex justify-center items-center" 
    style={{
      backgroundImage : `radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 0.5px, transparent 0)`,
      backgroundSize : "8px 8px",
      backgroundRepeat : "repeat"
    }}>
       <motion.button 
        whileHover={{
          rotateX:25,
          rotateY:20,
          boxShadow : "0px 20px 50px rgba(8, 112, 184, 0.7)"
        }}
        style={{
          translateZ:100
        }}
        transition={{
          duration:0.3
        }}
       className="group relative px-12 py-4  bg-black text-neutral-500 rounded-md "> 
       
       <span className="group-hover:text-cyan-500 transitio-colors duration-300">Kulp Labs</span>

        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px mx-auto">
        </span>
         <span className="absolute opacity-0 group-hover:opacity-100 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm transition-opacity duration-300">
        </span>
        
       </motion.button>
    </div>
  )
}

export default AnimateButton