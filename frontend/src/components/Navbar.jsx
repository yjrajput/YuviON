import React from 'react'
import {Link} from 'react-router-dom'
import {ArrowRight} from 'lucide-react'
const Navbar = () => {
    
  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
       <Link to={'/'}><h1 className='text-primary  font-bold text-3xl'>Yuvion.ai</h1></Link> 

       <button  className='flex items-center gap-2 rounded-full text-lg cursor-pointer bg-primary text-white px-10 py-2.5 '>Get started <ArrowRight className='w-4 h-4' /></button>
    </div>
  )
}

export default Navbar