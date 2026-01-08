export interface PlaylistVideo {
  day: number
  title: string
  youtubeId: string
}

export interface Course {
  id: string
  title: string
  creator: string
  duration: string
  type: "playlist"
  videos: PlaylistVideo[]
}

export const COURSES: Course[] = [
  {
    id: "build-your-own-ai-30-days",
    title: "Build Your Own AI in 30 Days",
    creator: "Raultherockstar",
    duration: "30 Days",
    type: "playlist",
    videos: [
      { day: 1, title: "What is AI?", youtubeId: "DI2gyY8WxSg" },
      { day: 2, title: "Machine Learning and Neural Networks", youtubeId: "f0Tf0S2f_Hk" },
      { day: 3, title: "How AI Thinks (LLMs, LoRA, ANI, AGI, ASI)", youtubeId: "R3LqFv-9k-k" },
      { day: 4, title: "The Dark Side of AI", youtubeId: "q6O7S7F9C6M" },
      { day: 5, title: "Get Your Doubts Answered", youtubeId: "5Vz1y4R9Wc0" },
      { day: 6, title: "Using / Hosting AI Locally", youtubeId: "Yp6S6x7X2y4" },
      { day: 7, title: "Make Your AI Look Like ChatGPT (UI/UX)", youtubeId: "X7U8Q4q9Wc0" },
      { day: 8, title: "Create a Dataset", youtubeId: "Z8U7Q4q9Wc0" },
      { day: 9, title: "Get Your Doubts Answered", youtubeId: "WiGtzqBr1hg" },
      { day: 10, title: "Build Marvel Dataset & Save as JSON", youtubeId: "V7U8Q4q9Wc0" },
      { day: 11, title: "Run AI Models with Google Colab", youtubeId: "U7U8Q4q9Wc0" },
      { day: 12, title: "Live Q&A", youtubeId: "T7U8Q4q9Wc0" },
      { day: 13, title: "Running the Model & Code Explanation", youtubeId: "S7U8Q4q9Wc0" },
      { day: 15, title: "Chat with Your Model", youtubeId: "R7U8Q4q9Wc0" },
      { day: 16, title: "Setup Ollama", youtubeId: "Q7U8Q4q9Wc0" },
      { day: 18, title: "Create AI Images Locally", youtubeId: "P7U8Q4q9Wc0" },
      { day: 20, title: "Hugging Face Tokens Explained", youtubeId: "O7U8Q4q9Wc0" },
      { day: 22, title: "RAG Explained + Agentic RAG", youtubeId: "N7U8Q4q9Wc0" },
      { day: 23, title: "RAG with Tabular Data", youtubeId: "M7U8Q4q9Wc0" },
      { day: 25, title: "Testing Fun AI Games", youtubeId: "L7U8Q4q9Wc0" },
      { day: 26, title: "Get Your Doubts Answered", youtubeId: "K7U8Q4q9Wc0" },
      { day: 29, title: "AI Images to Animated Videos", youtubeId: "J7U8Q4q9Wc0" },
      { day: 30, title: "Finale – You Made It", youtubeId: "I7U8Q4q9Wc0" },
    ],
  },
  {
    id: "ai-earner-challenge",
    title: "7-Week #AIEarnerChallenge",
    creator: "Raultherockstar",
    duration: "7 Weeks",
    type: "playlist",
    videos: [
      { day: 1, title: "What Is AI?", youtubeId: "8Gko-J-1PdA" },
      { day: 2, title: "AI Browsers Research for You", youtubeId: "Y-5uL0zFz8A" },
      { day: 3, title: "AI Builds Your Entire App", youtubeId: "hGv-7o9P2fM" },
      { day: 4, title: "Build a Full Website with AI", youtubeId: "uB-0n8v5Q7E" },
      { day: 5, title: "Organize Life Using AI", youtubeId: "mD-0n8v5Q7E" },
      { day: 6, title: "AI That Brings Customers", youtubeId: "nD-0n8v5Q7E" },
      { day: 7, title: "AI That Talks Like Human", youtubeId: "oD-0n8v5Q7E" },
      { day: 8, title: "Build a Full Brand with AI", youtubeId: "pD-0n8v5Q7E" },
      { day: 9, title: "AI Makes Ads Better", youtubeId: "Moht1rJd3vE" },
      { day: 10, title: "How AI Thinks", youtubeId: "qD-0n8v5Q7E" },
      { day: 11, title: "How AI Creates Media", youtubeId: "ncQRc58Yakg" },
      { day: 12, title: "Writing Perfect Prompts", youtubeId: "rD-0n8v5Q7E" },
      { day: 13, title: "Edit Videos Faster with AI", youtubeId: "mKhd-8boOTc" },
      { day: 14, title: "AI Marketing Any Product", youtubeId: "sD-0n8v5Q7E" },
      { day: 15, title: "Finale – Market & Optimize", youtubeId: "tD-0n8v5Q7E" },
    ],
  },
]
