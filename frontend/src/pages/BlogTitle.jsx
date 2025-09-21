
import { Hash, Sparkles } from 'lucide-react';
import { useState } from 'react';

const BlogTitle = () => {

  const blogCategories = ['General','Technology','Business','Health','Lifestyle','Travel','Food'];
  const [selectedCategory, setSelectedCtegory] = useState('General');
  const [input, setInput] = useState('')
   const handleOnSubmit = async (event) =>{
      event.preventDefault();
  }
  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      <form onSubmit={handleOnSubmit} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-purple-500 ' />
          <h1 className='text-xl font-semibold'>AI Title Generate</h1>
        </div>
        <p className='mt-6 text-sm font-semibold'>Keyword</p>

        <input onChange={(event) => setInput(event.target.value)} value={input} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-200 ' type="text" placeholder='The future of artificial intelligence is...' required />

        <p className='mt-4 text-sm font-medium'>Category</p>

        <div className='mt-3 flex gap-3 flex-wrap sm:max-9/11'>
          {
            blogCategories.map((item) => (
              <span
                onClick={() => setSelectedCtegory(item)}
                className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedCategory === item
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-500 border-gray-300'
                  }`}
                key={item}
              >
                {item}
              </span>
            ))
          }
        </div>
        <br />
        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-semibold text-white px-4 py-2 mt-6 rounded-lg cursor-pointer'>
          <Hash className='w-5'/>
          Generate Title
        </button>
      </form>

      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
          <div className='flex items-center gap-3'>
              <Hash className='w-5 h-5 text-purple-500'/>
              <h1 className='text-xl font-semibold'>
                  Generated title
              </h1>

              
          </div>
          <div className='flex-1 flex justify-center items-center'>
                  <div className='flex-1 flex justify-center items-center '>
                    <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
                      <Hash className='w-9 h-9 '/>
                      <p>Enter a topic and click "Generated title" to get started</p>
                    </div>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default BlogTitle