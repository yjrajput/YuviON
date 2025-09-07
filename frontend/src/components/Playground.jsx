import React, { useState } from 'react'
import Card from '../ui/Card';
import Textarea from '../ui/Textarea';
import { Send, Copy, Download, Sparkles } from "lucide-react";
const Playground = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);

        const handleSubmit = async () => {
        if (!prompt.trim()) return;
        
        setIsLoading(true);
        setTimeout(() => {
        setResponse(`Here's a creative response to your prompt: "${prompt}"\n\nThis is a demonstration of how our AI would process and respond to your request. In the actual application, this would be powered by advanced language models providing intelligent, contextual responses.\n\nKey features:\n• Real-time processing\n• Context-aware responses\n• Multiple output formats\n• Customizable parameters`);
        setIsLoading(false);
        }, 2000);
    };
    const demoPrompts = [
            "Write a creative story about a robot learning to paint",
            "Explain quantum computing in simple terms",
            "Create a marketing strategy for a sustainable fashion brand",
            "Design a healthy meal plan for busy professionals"
        ];
  return (
        <section id="playground" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Try Our AI <br />
            <span className=" bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Playground
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the power of AI with our interactive demo. Try any prompt and see the magic happen.
          </p>
        </div>

        <div className="space-y-6">
          {/* Demo Prompts */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-muted-foreground">Try these examples:</label>
            <div className="flex flex-wrap gap-2">
              {demoPrompts.map((demoPrompt, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(demoPrompt)}
                  className="text-xs bg-background/60 backdrop-blur-sm hover:bg-accent py-2 px-3 border rounded-[10px]"
                >
                  {demoPrompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <Card className="p-6 bg-background/60 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Prompt</label>
                <Textarea
                  placeholder="Ask me anything... I can help with writing, analysis, coding, creative tasks, and more!"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px] bg-input-background border-border/50 resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={isLoading || !prompt.trim()}
                className="w-full rounded-[10px] flex justify-center items-center text-white font-bold py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                {isLoading ? (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Generating Response...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 " />
                    Generate Response
                  </>
                )}
              </button>
            </div>
          </Card>

          {/* Response Area */}
          {response && (
            <Card className="p-6 bg-background/60 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">AI Response</label>
                  <div className="flex gap-2">
                    <button variant="outline" size="sm">
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </button>
                    <button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Export
                    </button>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-sm leading-relaxed whitespace-pre-line">
                  {response}
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

export default Playground