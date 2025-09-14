import React, { useEffect, useState } from 'react'
import {Gem, Sparkles} from 'lucide-react'
import {Protect} from '@clerk/clerk-react'
import CreationItems from '../components/CreationItems'
const Dashboard = () => {


  const creationData = [
  {
    id: 1,
    title: "AI Logo Generator",
    description: "A tool that creates professional logos using AI.",
    date: "2025-09-10",
    status: "Completed",
    icon: "🎨"
  },
  {
    id: 2,
    title: "Resume Builder",
    description: "An AI-powered resume builder for job seekers.",
    date: "2025-09-12",
    status: "In Progress",
    icon: "📄"
  },
  {
    id: 3,
    title: "Blog Post Writer",
    description: "Generates SEO-optimized blog posts in seconds.",
    date: "2025-09-13",
    status: "Draft",
    icon: "✍️"
  }
];

  const [creation, setCreation] = useState([])

  const getDashbordData = async () =>{
    setCreation(creationData);
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
                  <h2 className='text-xl font-semibold'>3</h2>
                </div>
                <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white flex justify-center items-center'>
                  <Sparkles className='w-5'/>
                </div>
            </div>

            <div className='flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200' >
                <div className='text-slate-600'>
                  <p className='text-sm'>Active Plan</p>
                  <h2 className='text-xl font-semibold'>
                    <Protect plan='premium' fallback ='Free'>Premium</Protect>
                  </h2>
                </div>
                <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white flex justify-center items-center'>
                  <Gem className='w-5'/>
                </div>
            </div>
        </div>

        <div className='space-y-3'>
          <p className='mt-6 mb-4 '>Recent Creation</p>
          {
            creation.map((item) => <CreationItems item={item} key={item.id}/>)
          }
        </div>
    </div>
  )
}

export default Dashboard