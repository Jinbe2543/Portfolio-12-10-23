import React from 'react'

const ProjectsItem = ({img, title, des, link}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-800 to-[#001b5e]'>
        <img src={img} alt="/" className='rounded-xl group-hover:opacity-100'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white bg-black rounded tracking-wider text-center p-3'>
                {title}
            </h3>
            <p className='pb-4 pt-2 text-white text-center bg-[#001b5e] rounded'>{des}</p>
            <a href={link} target='blank'>
                <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>More Info</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectsItem