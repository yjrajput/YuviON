import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { SignIn,useUser } from '@clerk/clerk-react'

const Layout = () => {
  const [sidebar, setSidebar] = useState(false)
  const {user} = useUser()
  return user ? (
    <div className='flex flex-col items-start justify-start h-screen'>
      <div className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200  '>
        <Link to={'/'} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Sparkles className='w-4 h-4 text-white'/>
                </div>
                <span className="font-semibold text-lg">Aura.ai</span>
            </Link>

            {
                sidebar ? <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden'/> : <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden'/>
            }
      </div>
      <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
            <Sidebar sidebar = {sidebar} setSidebar = {setSidebar}/>
            <div className='flex-1 bg-[#f4f7fb]'>
              <Outlet/>
            </div>
      </div>

            
        
    </div>
    
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <SignIn/>
    </div>
  )
}

export default Layout