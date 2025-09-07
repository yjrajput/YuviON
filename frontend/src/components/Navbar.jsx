import React, { useState } from 'react'
import {Sparkles} from 'lucide-react'
import Hamburger from 'hamburger-react';
import { ArrowRight } from 'lucide-react';
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link to={'/'} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Sparkles className='w-4 h-4 text-white'/>
                </div>
                <span className="font-semibold text-lg">Aura.ai</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
                <a href="#playground" className="text-muted-foreground hover:text-foreground transition-colors">
                  Playground
                </a>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
            </nav>

            <div className='flex items-center gap-4'>
                <button className="bg-gradient-to-r cursor-pointer flex  gap-2 px-4 py-2.5 rounded-[10px] text-white font-bold from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">Get Started <ArrowRight/></button>
                <button className="md:hidden"><Hamburger className = "w-2" toggled={isOpen} toggle={setOpen} size={20}/></button>

                <div
                className={`fixed top-[65px] bg-white right-0 h-[100vh] w-64 flex justify-center items-center backdrop-blur-md   shadow-lg transition-transform duration-300 ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <nav className="p-6 flex flex-col gap-4">
                  <a href="#features">Features</a>
                  <a href="#playground">Playground</a>
                  <a href="#pricing">Pricing</a>
                  <a href="#about">About</a>
                </nav>
                </div>
            </div>
        </div>

        
    </header>
  )
}

export default Navbar