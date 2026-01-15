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
  isPaid?: boolean
  videos: PlaylistVideo[]
}

export const COURSES: Course[] = [
  {
    id: "ai-curious-to-ai-serious",
    title: "AI Curious to AI Serious",
    creator: "Raul John Aju · AI Kid of India",
    duration: "12 hours",
    type: "playlist",
    isPaid: false,
    videos: [
      { day: 1, title: "Introduction to AI", youtubeId: "DI2gyY8WxSg" },
    ],
  },
  {
    id: "ai-learner-to-ai-earner",
    title: "AI Learner to AI Earner",
    creator: "Raul John Aju · AI Kid of India",
    duration: "18 hours",
    type: "playlist",
    isPaid: false,
    videos: [
      { day: 1, title: "Advanced AI Strategy", youtubeId: "8Gko-J-1PdA" },
    ],
  },
  {
    id: "starting-with-meta-ads",
    title: "Starting with meta ads",
    creator: "Satish Kushwaha",
    duration: "5 hours",
    type: "playlist",
    isPaid: false,
    videos: [
      { day: 1, title: "Meta Ads Fundamentals", youtubeId: "meta-placeholder" },
    ],
  },
]
