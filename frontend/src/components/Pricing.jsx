import React from 'react'
import {PricingTable} from '@clerk/clerk-react'
const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
            Choose Your&nbsp;
            <span className=" bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
          </p>
        </div>
        <div className="max-w-3xl mx-auto p-6 rounded-2xl min-h-[700px]">
            <PricingTable />
        </div>
        </div>
        
    </section>
  )
}

export default Pricing