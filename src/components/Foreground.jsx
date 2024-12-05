import React, { useRef, useState } from 'react'
import Cards from './Cards'


const Foreground = () => {

    const ref= useRef(null);

    const data=[
        {desc:"hi Hoe are u no email from u for  log tiem is this is god or not per hao.",
        filesize:".6mb",
        close:true,
        tag:{isOpen:false,tagTitle:"Download Now",tagColor:"green"},
        } ,

        {desc:"hi Hoe are u no email from u for  log tiem is this is god or not per hao.",
            filesize:".9mb",
            close:false,
            tag:{isOpen:true,tagTitle:"Upload Now",tagColor:"blue"},
        },

        {desc:"hi Hoe are u no email from u for  log tiem is this is god or not per hao.",
                filesize:".3mb",
                close:true,
                tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
        },

        {desc:"hi Hoe are u no email from u for  log tiem is this is god or not per hao..",
            filesize:".2mb",
            close:false,
            tag:{isOpen:true,tagTitle:"Upload Now",tagColor:"blue"},
            }
    ];

    
  return (
    <div  ref={ref} className='w-full h-full fixed z-[3] top-0 left-0 flex gap-10 flex-wrap p-5'>
        
        {data.map((item,index)=>(
            <Cards data={item} reference={ref}/>
        ))}
    </div>
    
  )
}

export default Foreground
