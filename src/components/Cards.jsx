
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react"



const Cards = ({data ,reference}) => {
  return (
    
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.1} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white p-5 overflow-hidden px-8 py-10'>
    <FaRegFileAlt/>
    <p className='mt-5 text-sm leading-tight font-semibold'>{data.desc}</p>
    <div className='footer absolute bottom-0  w-full  left-0 '>

        <div className='flex  items-center justify-between mb-3 py-3 px-8'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full items-center justify-center flex'>
            {data.close ? <IoMdClose size='.7em' color='#fff'/> : <LuDownload size='.7em' color='#fff'/> }
            </span>
            
        </div>
        {
            data.tag.isOpen ? (<div className={`tag w-full py-4 ${data.tag.tagColor == "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
            ) : null
        }
        
    </div>  
    </motion.div>  
  )
}

export default Cards
