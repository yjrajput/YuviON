import React, { useState } from 'react'
import Markdown from 'react-markdown';

const CreationItems = ({item}) => {
    const [expanded, setExpandad] = useState(false);
    

  return (
    <div onClick={() => setExpandad(!expanded)} className='p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer'>
        <div className='flex justify-between items-center gap-4'>
            <div>
                <h2>{item.title}</h2>
                <p className='text-gray-500'>{item.description} - {new Date(item.date).toLocaleDateString()}</p>
            </div>
            <button className='bg-[#eff6ff] border border-[#bfdbfe] text-[#1e40af] px-4 py-1 rounded-full'>{item.status}</button>
        </div>

        {
            expanded && (
                <div>
                    {item.type === 'image' ? (
                        <div>
                            <img className='mt-3 w-full max-w-md' src={item.icon} alt={item.type} />
                        </div>
                    ) : (
                        <div className='reset-tw mt-3 h-full overflow-y-scroll text-sm text-slate-700'>
                            <Markdown>
                                {item.description}
                            </Markdown>
                        </div>
                    )}
                </div>
            )
        }
    </div>
  )
}

export default CreationItems