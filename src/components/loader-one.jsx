import React from 'react'
import {motion} from 'motion/react'

const LoaderOne = () => {
  return (
    <div className='flex gap-2'>
       <motion.div
        initial={{
            rotateX:2
        }}
        transition={{
            duration:1
        }}
    
       className='rounded-full h-4 w-4 bg-red-500'/>
       <motion.div className='rounded-full h-4 w-4 bg-green-500'/>
       <motion.div className='rounded-full h-4 w-4 bg-black'/>
    </div>
  )
}

export default LoaderOne