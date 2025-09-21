import React from 'react'
import { useState } from 'react';
import { Scissors, Sparkles } from 'lucide-react';
const RemoveObject = () => {
  const [input, setInput] = useState('');
  const [object, setObject] = useState('');
  const handleOnSubmit = async (event) => {
    event.preventDefault();
  }
  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      <form onSubmit={handleOnSubmit} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-purple-500 ' />
          <h1 className='text-xl font-semibold'>Object Removal</h1>
        </div>
        <p className='mt-6 text-sm font-semibold'>Upload Image</p>

        <input onChange={(event) => setInput(event.target.files[0])} accept='image/*' rows={4} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600' required type='file' />

       <p className='mt-6 text-sm font-semibold'>Describe object name to remove</p>

        <textarea onChange={(event) => setObject(event.target.value)} value={object} rows={4} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-200 '  placeholder='e.g., watch or spoon, Only single object name' required />


        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-semibold text-white px-4 py-2 mt-6 rounded-lg cursor-pointer'>
          <Scissors className='w-5' />
          Remove Object
        </button>
      </form>

      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
        <div className='flex items-center gap-3'>
          <Scissors className='w-5 h-5 text-purple-500' />
          <h1 className='text-xl font-semibold'>
            Processed Image
          </h1>


        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='flex-1 flex justify-center items-center '>
            <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
              <Scissors className='w-9 h-9 ' />
              <p>Upload an image and click "Remove Object" to get started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RemoveObject