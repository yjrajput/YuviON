import React, { useEffect, useState } from 'react'
import {Sparkles} from 'lucide-react'
const Dashboard = () => {
  const [creation, setCreation] = useState([])

  const getDashbordData = async () =>{
    setCreation();
  }

  useEffect(() =>{
    getDashbordData()
  })
  return (
    <div className='h-full overflow-y-scroll p-6'>
        <div className='flex justify-start gap-4 flex-wrap'>
            <div className='flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200' >
                <div className='text-slate-600'>
                  <p className='text-sm'>Total Creations</p>
                  <h2 className='text-xl font-semibold'></h2>
                </div>
                <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588f2] to-[#0bb0d7] text-white flex justify-center items-center'>
                  <Sparkles className='w-5'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard