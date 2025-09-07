import { SquarePen, Hash, Image, Eraser, Scissors, File } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: SquarePen,
      title: "AI Article Writer",
      description: "Generate high-quality, engaging articles on any topic with our AI writing technology.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Hash,
      title: "Blog Title Generator",
      description: "Find the perfect, catchy title for your blog posts with our AI-powered generator.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Image,
      title: "AI Image Generation",
      description: "Create stunning visuals with our AI image generation tool. Experience the power of AI.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Eraser,
      title: "Background Removal",
      description: "Effortlessly remove backgrounds from your images with our AI-driven tool.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Scissors,
      title: "Object Removal",
      description: "Remove unwanted objects from your images seamlessly with our AI object removal tool.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: File,
      title: "Resume Reviewer",
      description: "Get your resume reviewed by AI to improve your chances of landing your dream job.",
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
              <div
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border rounded-xl bg-white/80 dark:bg-neutral-900/80"
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
