import React, { useState } from 'react'
import { Send, Copy, Download, Sparkles } from "lucide-react";
import { URL } from '../../../backend/Server';
import Markdown from 'react-markdown'
const Playground = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

 const handleSubmit = async () => {
  if (!prompt.trim()) return;

  setIsLoading(true);

  
  const payload = {
    contents: [
      {
        parts: [
          {
            text: prompt
          }
        ]
      }
    ]
  };

  try {
    let res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    res = await res.json();
    console.log()
    setResponse(
      res.candidates[0].content.parts[0].text || "No response from server."
    );
  } catch (error) {
    console.error("Error fetching:", error);
    setResponse("Something went wrong. Please try again.");
  } finally {
    setIsLoading(false);
  }
};


  const demoPrompts = [
    "Write a creative story about a robot learning to paint",
    "Explain quantum computing in simple terms",
    "Create a marketing strategy for a sustainable fashion brand",
    "Design a healthy meal plan for busy professionals",
  ];

  return (
    <section
      id="playground"
      className="py-20 px-4 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container mx-auto max-w-4xl">
        
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Try Our AI <br />
            <span className=" bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Playground
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the power of AI with our interactive demo. Try any prompt
            and see the magic happen.
          </p>
        </div>

        <div className="space-y-6">
         
          <div className="space-y-3">
            <label className="text-sm font-medium text-muted-foreground">
              Try these examples:
            </label>
            <div className="flex flex-wrap gap-2">
              {demoPrompts.map((demoPrompt, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(demoPrompt)}
                  className="text-xs cursor-pointer bg-white/80 dark:bg-neutral-900/80 hover:bg-accent py-2 px-3 border rounded-md transition-colors"
                >
                  {demoPrompt}
                </button>
              ))}
            </div>
          </div>

     
          <div className="p-6 bg-white/80 dark:bg-neutral-900/80 border rounded-2xl shadow-sm">
            <div className="space-y-4">
              <div className="space-y-2 flex flex-col">
                <label className="text-sm font-medium">Your Prompt</label>
                <textarea
                  placeholder="Ask me anything... I can help with writing, analysis, coding, creative tasks, and more!"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px] rounded-md px-4 py-3 bg-input-background border border-border/50 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={isLoading || !prompt.trim()}
                className="w-full rounded-md flex justify-center items-center cursor-pointer text-white font-bold py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-60 transition-colors"
              >
                {isLoading ? (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Generating Response...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Generate Response
                  </>
                )}
              </button>
            </div>
          </div>

          {response && (
            <div className="p-6 bg-white/80 dark:bg-neutral-900/80 border rounded-2xl shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">AI Response</label>
                  <div className="flex gap-2">
                    <button className="flex border justify-center items-center gap-1 py-1 px-[10px] rounded-md hover:bg-accent transition-colors">
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </button>
                    <button className="flex border justify-center items-center gap-1 px-[10px] rounded-md hover:bg-accent transition-colors">
                      <Download className="w-4 h-4 mr-1" />
                      Export
                    </button>
                  </div>
                </div>
                <div className="reset-tw bg-muted/20 max-h-[300px] overflow-y-scroll rounded-lg p-4 text-sm leading-relaxed whitespace-pre-line">
                  <Markdown>
                  {response}
                  </Markdown>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Playground;
