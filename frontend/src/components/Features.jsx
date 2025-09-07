import React from 'react'
import { Brain,Zap, Shield, Palette, Code, Globe } from 'lucide-react';
const Features = () => {

    const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Leverage cutting-edge language models with state-of-the-art reasoning capabilities.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant responses with our optimized infrastructure and edge computing.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Your data is protected with end-to-end encryption and privacy-first design.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Palette,
    title: "Creative Tools",
    description: "Generate images, write content, and create designs with AI-powered creativity.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Code,
    title: "Developer API",
    description: "Integrate AI capabilities into your applications with our robust API.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Available worldwide with multi-language support and local processing.",
    gradient: "from-indigo-500 to-purple-500"
  }
];
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Powerful Features for
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Modern AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to harness the power of artificial intelligence in one comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background/60 backdrop-blur-sm border-border/50"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Features