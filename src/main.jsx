/**
 * ============================================================================
 * ILEARN — Modern Intentional E-Learning Platform
 * ============================================================================
 * Designed for education startups & curious lifelong learners.
 *
 * Core Capabilities & User Journeys:
 * 1. Discover Available Courses:
 *    - Search, category filter tabs, sorting, level badges, and ratings.
 * 2. Explore Course Details:
 *    - In-depth syllabus breakdown, learning outcomes, instructor credentials,
 *      reviews, and lesson preview estimates.
 * 3. Frictionless Enrollment Flow:
 *    - Interactive enrollment confirmation modal with value props and instant access.
 * 4. Rich Learning & Lesson Experience:
 *    - Distraction-free player, playback speeds, focus mode toggle, interactive
 *      knowledge check quiz, personal note-taking with local persistence,
 *      and lesson key takeaways.
 * 5. Comprehensive Learning Progress Tracking:
 *    - Lesson-by-lesson checkmarks, course completion percentages, certificate
 *      generation upon 100% completion, weekly activity bars, and milestone badges.
 * 6. Intuitive Navigation:
 *    - Seamless routing across Discover, My Learning, Course Details, Lesson Player,
 *      and Analytics Dashboard with persistent light/dark themes.
 * ============================================================================
 */

import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  Bookmark,
  BookmarkCheck,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Compass,
  Download,
  FileCheck,
  FileDown,
  FileText,
  Filter,
  Flame,
  Globe,
  Headphones,
  HelpCircle,
  LayoutDashboard,
  Lock,
  Maximize2,
  Menu,
  MessageSquare,
  Minimize2,
  Moon,
  MoreHorizontal,
  Pause,
  Play,
  Podcast,
  RotateCcw,
  Search,
  Settings,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  TrendingUp,
  Trophy,
  UserCheck,
  UserRound,
  Volume2,
  VolumeX,
  X,
  Zap,
} from 'lucide-react'
import './styles.css'

/* ============================================================================
   1. MOCK DATA & CONSTANTS
   ============================================================================ */

/**
 * Curated courses catalog data with modules, outcomes, and interactive quiz items.
 */
const COURSES_DATA = [
  {
    id: 1,
    title: 'Designing for Calm',
    tagline: 'Craft digital experiences that respect attention and reduce cognitive friction.',
    category: 'Design',
    level: 'Beginner',
    author: 'Maya Chen',
    authorRole: 'Principal Product Designer & Author',
    authorBio: 'Maya leads design systems at Studio Forma and specializes in human-centric digital interfaces.',
    duration: '3h 24m',
    totalDurationMinutes: 204,
    rating: '4.9',
    reviewsCount: 384,
    color: 'bg-[#d8e6df]',
    badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80',
    description: 'Calm design is not merely minimalism — it is the deliberate practice of removing unnecessary noise and respecting human cognitive limits. In this course, you will learn practical design patterns and typography hierarchy that instill peace in complex products.',
    outcomes: [
      'Master the 5 core principles of calm user interfaces',
      'Reduce cognitive load through deliberate whitespace and typographic hierarchy',
      'Design graceful state transitions and feedback micro-interactions',
      'Audit existing digital products for sensory clutter and friction',
    ],
    resources: [
      { name: 'Calm Design System Checklist.pdf', size: '1.4 MB' },
      { name: 'Typographic Scale & Whitespace Tokens.fig', size: '3.8 MB' },
    ],
    lessons: [
      {
        id: 1,
        title: 'Welcome to the course & philosophy of calm',
        duration: '8:45',
        preview: 'An introduction to calm software, setting our intentions, and outlining the learning path ahead.',
        takeaways: [
          'Calm design respects the user’s cognitive bandwidth as their most valuable asset.',
          'Software should inform and assist without shouting or creating artificial urgency.',
        ],
        quiz: {
          question: 'What is the primary objective of calm technology?',
          options: [
            'To maximize the time a user spends inside the app',
            'To deliver utility while requiring the smallest possible amount of attention',
            'To replace all text with icons and illustrations',
          ],
          correct: 1,
          explanation: 'Calm technology aims to inform and empower without demanding constant, active attention.',
        },
      },
      {
        id: 2,
        title: 'The calm design principle: Respecting human attention',
        duration: '14:20',
        preview: 'Explore how cognitive bandwidth works and why quiet interfaces outperform noisy ones.',
        takeaways: [
          'Attention is finite; every flashing banner or badge costs mental focus.',
          'Prioritize peripheral awareness over intrusive modal popups.',
        ],
        quiz: {
          question: 'Which element is considered a high-friction cognitive trigger?',
          options: [
            'Consistent baseline typography',
            'Flashing unread notification counters with urgent sound effects',
            'Muted neutral background surfaces',
          ],
          correct: 1,
          explanation: 'Aggressive badges and intrusive audio cues trigger sensory alarms that disrupt focus.',
        },
      },
      {
        id: 3,
        title: 'Making space for focus: Whitespace & hierarchy',
        duration: '18:10',
        preview: 'Hands-on layout techniques to give interface elements breathing room and clarity.',
        takeaways: [
          'Whitespace is an active design element, not empty wasted space.',
          'Use macro-whitespace to separate major concepts and micro-whitespace for scannability.',
        ],
        quiz: {
          question: 'How does generous whitespace benefit the learner or user?',
          options: [
            'It forces more scroll distance to increase page views',
            'It reduces visual clutter, allowing the brain to process key elements faster',
            'It is solely an aesthetic preference with no measurable UX benefit',
          ],
          correct: 1,
          explanation: 'Whitespace reduces visual crowding and dramatically boosts reading comprehension.',
        },
      },
      {
        id: 4,
        title: 'A more intentional workflow: Colors & subtle cues',
        duration: '12:35',
        preview: 'Learn how to use muted palettes with purposeful accent colors for intuitive navigation.',
        takeaways: [
          'Use 90% neutral and grounded tones, reserving high-contrast colors strictly for primary actions.',
          'Subtle state transitions reassure the user without breaking flow.',
        ],
        quiz: {
          question: 'When should vibrant accent colors be used in calm UI?',
          options: [
            'On every heading and icon across the page',
            'Strictly for key call-to-actions, confirmation feedback, and primary progress',
            'Only on background containers',
          ],
          correct: 1,
          explanation: 'Accent colors maintain their power only when applied sparingly for key interactions.',
        },
      },
      {
        id: 5,
        title: 'Micro-interactions that soothe rather than startle',
        duration: '15:50',
        preview: 'Implement smooth animations and tactile feedback that reassure the user without distraction.',
        takeaways: [
          'Keep animation durations between 150ms and 300ms for natural, organic motion.',
          'Provide instant, quiet acknowledgment for every user action.',
        ],
        quiz: {
          question: 'What is the optimal duration for subtle UI state transitions?',
          options: ['50ms or less', '150ms to 300ms', '1000ms to 2000ms'],
          correct: 1,
          explanation: '150ms to 300ms feels snappy and human without causing perceptible lag or motion sickness.',
        },
      },
      {
        id: 6,
        title: 'Your capstone practice: Redesigning a noisy dashboard',
        duration: '22:15',
        preview: 'Apply all concepts to audit and refactor a crowded interface into a serene, efficient workspace.',
        takeaways: [
          'Perform a friction audit by listing every element competing for user attention.',
          'Refactor layouts by grouping secondary metrics into collapsible drawers.',
        ],
        quiz: {
          question: 'What is the first step in auditing a cluttered interface?',
          options: [
            'Delete all analytics data',
            'Identify and rank the primary intent versus secondary noise',
            'Switch immediately to dark mode',
          ],
          correct: 1,
          explanation: 'Understanding the core user job-to-be-done establishes the hierarchy for removing noise.',
        },
      },
    ],
  },
  {
    id: 2,
    title: 'The Creative Habit',
    tagline: 'Build consistent creative rituals that outlast fleeting motivation.',
    category: 'Creativity',
    level: 'All levels',
    author: 'Jon Bell',
    authorRole: 'Creative Director & Essayist',
    authorBio: 'Jon has coached over 5,000 artists and entrepreneurs on sustaining lifelong creative practices.',
    duration: '2h 48m',
    totalDurationMinutes: 168,
    rating: '4.8',
    reviewsCount: 242,
    color: 'bg-[#f0dfd2]',
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80',
    description: 'Great creative work is not born from spontaneous lightning strikes; it is cultivated through steady, daily discipline. Discover how to build sustainable creative routines, overcome creative paralysis, and finish the projects you start.',
    outcomes: [
      'Overcome resistance and the fear of the blank canvas',
      'Design a friction-free morning studio or writing ritual',
      'Develop an effective personal idea capture system',
      'Transform unstructured inspiration into finished artifacts',
    ],
    resources: [
      { name: 'Daily Creative Habit Tracker.pdf', size: '920 KB' },
    ],
    lessons: [
      {
        id: 1,
        title: 'Debunking the myth of creative genius',
        duration: '10:15',
        preview: 'Why showing up every day consistently beats sporadic bursts of inspired brilliance.',
        takeaways: ['Inspiration is the reward for showing up, not the prerequisite for starting.'],
        quiz: {
          question: 'What is the most reliable driver of long-term creative output?',
          options: ['Waiting for sudden inspiration', 'A consistent, daily creative habit', 'Purchasing expensive new tools'],
          correct: 1,
          explanation: 'Consistency compounds over time and removes the barrier of starting.',
        },
      },
      {
        id: 2,
        title: 'Setting up your daily creative sanctuary',
        duration: '16:40',
        preview: 'Curating physical and digital spaces designed specifically to trigger deep focus.',
        takeaways: ['Environment shapes behavior more reliably than sheer willpower.'],
        quiz: {
          question: 'Why is a dedicated creative workspace effective?',
          options: ['It serves as an environmental cue that primes the brain for focus', 'It looks better on social media', 'It is required by copyright laws'],
          correct: 0,
          explanation: 'Consistent environments trigger conditioned focus states automatically.',
        },
      },
      {
        id: 3,
        title: 'Overcoming resistance & the blank page syndrome',
        duration: '19:05',
        preview: 'Mental models and rapid ideation frameworks to get moving within 3 minutes.',
        takeaways: ['Lower the bar to start: write the worst possible first sentence just to break inertia.'],
        quiz: {
          question: 'What is the fastest way to overcome creative inertia?',
          options: ['Lower the stakes and produce a deliberately imperfect draft', 'Wait another week', 'Delete your idea'],
          correct: 0,
          explanation: 'Lowering stakes eliminates perfection paralysis.',
        },
      },
      {
        id: 4,
        title: 'The discipline of shipping unfinished drafts',
        duration: '14:30',
        preview: 'How iterative release cycles unlock new insights and protect against perfectionism.',
        takeaways: ['A published good draft teaches you more than an unpublished masterpiece.'],
        quiz: {
          question: 'Why should creators ship iterative drafts?',
          options: ['To receive early real-world feedback and maintain momentum', 'To rush without care', 'To fill up storage'],
          correct: 0,
          explanation: 'Real-world feedback clarifies what resonates with your audience.',
        },
      },
      {
        id: 5,
        title: 'Designing your weekly creative reflection review',
        duration: '21:00',
        preview: 'A structured review routine to evaluate what sparked joy and where your art is heading.',
        takeaways: ['Celebrate small finished pieces to build intrinsic motivation.'],
        quiz: {
          question: 'What is the purpose of a weekly creative reflection?',
          options: ['To evaluate progress, celebrate milestones, and adjust course', 'To punish yourself for missed days', 'To restart from scratch'],
          correct: 0,
          explanation: 'Reflection fosters continuous improvement and sustainable growth.',
        },
      },
    ],
  },
  {
    id: 3,
    title: 'Product Thinking 101',
    tagline: 'Frame real problems, uncover user motivations, and build products people love.',
    category: 'Business',
    level: 'Intermediate',
    author: 'Alex Morgan',
    authorRole: 'Former VP of Product at Horizon Labs',
    authorBio: 'Alex has led product strategy across multiple high-growth technology platforms over the past decade.',
    duration: '4h 12m',
    totalDurationMinutes: 252,
    rating: '4.9',
    reviewsCount: 512,
    color: 'bg-[#e4def1]',
    badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
    description: 'Product thinking is the superpower of finding the intersection between genuine user pain points and viable business models. Learn how to validate assumptions before writing code and prioritize features that move the needle.',
    outcomes: [
      'Conduct high-signal customer discovery interviews',
      'Map user journeys to identify friction points and drop-offs',
      'Construct lean feature prioritization matrices',
      'Define clear North Star metrics and leading indicators',
    ],
    resources: [
      { name: 'Customer Discovery Script Template.docx', size: '850 KB' },
      { name: 'RICE Prioritization Matrix.xlsx', size: '1.2 MB' },
    ],
    lessons: [
      {
        id: 1,
        title: 'Understanding problem spaces vs solution spaces',
        duration: '15:20',
        preview: 'Why most products fail by building the right answer to the wrong question.',
        takeaways: ['Fall in love with the customer problem, not your initial solution idea.'],
        quiz: {
          question: 'What is the primary danger of jumping straight into solution space?',
          options: ['Building a flawless solution for a problem nobody actually has', 'Using modern frameworks', 'Hiring too many designers'],
          correct: 0,
          explanation: 'Building without validating the root problem leads to low product adoption.',
        },
      },
      {
        id: 2,
        title: 'Jobs To Be Done (JTBD) framework in action',
        duration: '22:10',
        preview: 'Deconstructing user motivation and the emotional catalysts behind product adoption.',
        takeaways: ['Users don’t buy a 1/4-inch drill bit; they buy a 1/4-inch hole in the wall.'],
        quiz: {
          question: 'According to JTBD theory, why do customers "hire" products?',
          options: ['To make progress in a specific life or work situation', 'To collect apps', 'Because of color palettes alone'],
          correct: 0,
          explanation: 'Products are hired to help users make tangible progress.',
        },
      },
      {
        id: 3,
        title: 'Customer discovery interviews without confirmation bias',
        duration: '28:45',
        preview: 'Scripting and conducting live user conversations that yield unfiltered truth.',
        takeaways: ['Ask about past behaviors rather than hypothetical future promises.'],
        quiz: {
          question: 'Which question yields the highest signal in user interviews?',
          options: ['"Would you buy this feature if we made it?"', '"Tell me about the last time you experienced this problem."', '"Do you like our logo?"'],
          correct: 1,
          explanation: 'Asking about past concrete behavior prevents hypothetical and polite answers.',
        },
      },
      {
        id: 4,
        title: 'Prioritization matrices: RICE & Opportunity Scoring',
        duration: '20:15',
        preview: 'Evaluating technical effort versus strategic impact to guide roadmap decisions.',
        takeaways: ['RICE stands for Reach, Impact, Confidence, and Effort.'],
        quiz: {
          question: 'In the RICE scoring model, which factor divides the score?',
          options: ['Reach', 'Impact', 'Effort'],
          correct: 2,
          explanation: 'Score = (Reach * Impact * Confidence) / Effort.',
        },
      },
      {
        id: 5,
        title: 'Prototyping & validating hypotheses with zero code',
        duration: '25:30',
        preview: 'Rapid test setups using landing pages, concierge tests, and wizard-of-oz models.',
        takeaways: ['Test demand before investing engineering bandwidth.'],
        quiz: {
          question: 'What is a "Smoke Test" in product validation?',
          options: ['Testing server firewalls', 'A landing page gauging interest with a CTA before full development', 'Code compilation test'],
          correct: 1,
          explanation: 'Smoke tests measure actual conversion intent before committing build resources.',
        },
      },
      {
        id: 6,
        title: 'Defining North Star metrics & product health telemetry',
        duration: '18:50',
        preview: 'Establishing telemetry that measures actual user value delivered rather than vanity metrics.',
        takeaways: ['A North Star metric reflects genuine value captured by users.'],
        quiz: {
          question: 'What differentiates a North Star metric from a vanity metric?',
          options: ['It tracks direct user value rather than surface impressions', 'It always goes up automatically', 'It is measured only once a year'],
          correct: 0,
          explanation: 'A great North Star metric aligns customer success with business revenue.',
        },
      },
    ],
  },
  {
    id: 4,
    title: 'Writing That Connects',
    tagline: 'Communicate with punchy clarity, empathy, and unforgettable voice.',
    category: 'Communication',
    level: 'Beginner',
    author: 'Rhea Patel',
    authorRole: 'Editorial Director & Speechwriter',
    authorBio: 'Rhea edits leading publications and writes speeches delivered at international leadership summits.',
    duration: '1h 56m',
    totalDurationMinutes: 116,
    rating: '4.7',
    reviewsCount: 198,
    color: 'bg-[#e6e4c9]',
    badgeColor: 'bg-lime-100 text-lime-800 dark:bg-lime-950/60 dark:text-lime-300',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
    description: 'In an era of endless noise, clear writing is the ultimate competitive edge. Master concise sentence structures, captivating hooks, and persuasive storytelling techniques to engage and inspire any audience.',
    outcomes: [
      'Eliminate fluff, passive voice, and corporate jargon',
      'Craft magnetic hooks that instantly draw readers in',
      'Structure complex arguments into scannable, digestible prose',
      'Develop an authentic, warm, and memorable tone of voice',
    ],
    resources: [
      { name: 'Self-Editing 10-Point Checklist.pdf', size: '640 KB' },
    ],
    lessons: [
      {
        id: 1,
        title: 'The architecture of an engaging first sentence',
        duration: '11:10',
        preview: 'Hooking readers immediately by raising curiosity and promising tangible value.',
        takeaways: ['Start in media res: plunge the reader directly into the tension or insight.'],
        quiz: {
          question: 'What is the sole job of the first sentence of an essay or email?',
          options: ['To explain the entire thesis', 'To get the reader to read the second sentence', 'To list all references'],
          correct: 1,
          explanation: 'Great hooks create curiosity momentum that carries the reader forward.',
        },
      },
      {
        id: 2,
        title: 'Pruning the garden: Cutting 30% of words effortlessly',
        duration: '14:40',
        preview: 'Eliminating filler phrases, zombie nouns, and unnecessary qualifiers.',
        takeaways: ['Replace weak verbs and adverbs with punchy, specific action verbs.'],
        quiz: {
          question: 'Which phrase is an example of redundant filler words?',
          options: ['"In order to"', '"Because"', '"Quickly"'],
          correct: 0,
          explanation: '"In order to" can almost always be simplified to "To".',
        },
      },
      {
        id: 3,
        title: 'Storytelling frameworks for essays, emails, and pitches',
        duration: '18:25',
        preview: 'The Hero’s Journey adapted for modern memos, newsletters, and case studies.',
        takeaways: ['Frame the reader as the hero, and your insight as the trusted mentor/guide.'],
        quiz: {
          question: 'In customer-centric storytelling, who is the hero of the journey?',
          options: ['Your company or product', 'The reader / customer', 'The investor'],
          correct: 1,
          explanation: 'Effective communication positions the reader as the hero overcoming an obstacle.',
        },
      },
      {
        id: 4,
        title: 'Rhythm and cadence: Varying sentence lengths for impact',
        duration: '12:50',
        preview: 'Using musicality in prose to create reading velocity and emphasis.',
        takeaways: ['Mix short, punchy sentences with longer descriptive sentences to create melody.'],
        quiz: {
          question: 'What happens when all sentences in a paragraph are the exact same length?',
          options: ['It becomes monotonous and tires the reader', 'It guarantees viral sharing', 'It improves SEO rating'],
          correct: 0,
          explanation: 'Varying rhythm keeps the human ear engaged and prevents reading fatigue.',
        },
      },
      {
        id: 5,
        title: 'The final polish checklist: Self-editing masterclass',
        duration: '16:00',
        preview: 'Step-by-step review to ensure tone consistency, punchy flow, and zero grammatical ambiguity.',
        takeaways: ['Read your draft out loud to catch awkward pauses and clunky phrases.'],
        quiz: {
          question: 'What is the most effective technique to identify clunky phrasing before publishing?',
          options: ['Reading the text out loud', 'Running spell check once', 'Changing the font size'],
          correct: 0,
          explanation: 'Reading out loud forces your brain to hear unnatural phrasing instantly.',
        },
      },
    ],
  },
]

/**
 * Filter categories available in the catalog.
 */
const CATEGORIES = ['All courses', 'Design', 'Creativity', 'Business', 'Communication']

/**
 * Gamification achievements unlocked by user activity.
 */
const ACHIEVEMENTS = [
  { id: 'streak-3', title: '3-Day Momentum', desc: 'Maintained a 3-day continuous learning streak', icon: Flame, color: 'text-amber-500 bg-amber-500/10' },
  { id: 'first-course', title: 'Pioneer Learner', desc: 'Completed your first interactive course lesson', icon: Sparkles, color: 'text-emerald-500 bg-emerald-500/10' },
  { id: 'quiz-master', title: 'Concept Master', desc: 'Aced a lesson practice check with 100% accuracy', icon: Trophy, color: 'text-amber-600 bg-amber-500/10' },
  { id: 'notes-master', title: 'Mindful Scribe', desc: 'Authored and saved lesson notes for future review', icon: FileText, color: 'text-blue-500 bg-blue-500/10' },
]

/* ============================================================================
   2. LOCAL STORAGE PERSISTENCE UTILITIES
   ============================================================================ */

function readStoredArray(key, fallback) {
  try {
    const stored = localStorage.getItem(key)
    if (!stored) return fallback
    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed : fallback
  } catch (error) {
    return fallback
  }
}

function readStoredObject(key, fallback) {
  try {
    const stored = localStorage.getItem(key)
    if (!stored) return fallback
    const parsed = JSON.parse(stored)
    return typeof parsed === 'object' && parsed !== null ? parsed : fallback
  } catch (error) {
    return fallback
  }
}

/* ============================================================================
   3. ROUTING & NAVIGATION PARSER
   ============================================================================ */

function getRoute() {
  const path = window.location.pathname
  if (path.startsWith('/course/')) {
    const parsedId = Number(path.split('/')[2]) || 1
    return { page: 'course', id: parsedId }
  }
  if (path.startsWith('/learn/')) {
    const parsedId = Number(path.split('/')[2]) || 1
    return { page: 'learn', id: parsedId }
  }
  if (path === '/dashboard') return { page: 'dashboard' }
  if (path === '/my-learning') return { page: 'my-learning' }
  if (path === '/analytics') return { page: 'analytics' }
  return { page: 'discover' }
}

/* ============================================================================
   4. CORE APPLICATION ROOT
   ============================================================================ */

function App() {
  // Navigation & Route state
  const [route, setRoute] = useState(getRoute)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Theme state (Persisted in localStorage)
  const [dark, setDark] = useState(() => localStorage.getItem('ilearn-theme') === 'dark')

  // Search, Filter & Sort state
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All courses')
  const [sortBy, setSortBy] = useState('popular')

  // Persistent Learning Progress & Enrolled State
  const [completedMap, setCompletedMap] = useState(() =>
    readStoredObject('ilearn-completed-map', { 1: [0, 1] })
  )
  const [activeLessonMap, setActiveLessonMap] = useState(() =>
    readStoredObject('ilearn-active-lesson-map', { 1: 0, 2: 0, 3: 0, 4: 0 })
  )
  const [enrolledCourses, setEnrolledCourses] = useState(() =>
    readStoredArray('ilearn-enrolled-courses', [1, 3])
  )
  const [bookmarkedCourses, setBookmarkedCourses] = useState(() =>
    readStoredArray('ilearn-bookmarked-courses', [2])
  )
  const [userNotes, setUserNotes] = useState(() =>
    readStoredObject('ilearn-user-notes', {
      '1_0': 'Key principle: Calm software creates breathing space for deep thought.',
      '1_1': 'Attention is finite: avoid artificial urgency and noisy notification badges.',
    })
  )

  // Enrollment Modal Trigger State
  const [enrollingCourse, setEnrollingCourse] = useState(null)
  // Certificate Modal State
  const [certificateCourse, setCertificateCourse] = useState(null)

  // Transition splash screen for Analytics page
  const [analyticsSplash, setAnalyticsSplash] = useState(false)

  // Toast feedback notification
  const [toastMessage, setToastMessage] = useState(null)

  const showToast = (message) => {
    setToastMessage(message)
    window.setTimeout(() => setToastMessage(null), 2800)
  }

  // Popstate history navigation
  useEffect(() => {
    const handlePopState = () => setRoute(getRoute())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Sync theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('ilearn-theme', dark ? 'dark' : 'light')
  }, [dark])

  // Sync local storage
  useEffect(() => {
    localStorage.setItem('ilearn-completed-map', JSON.stringify(completedMap))
  }, [completedMap])

  useEffect(() => {
    localStorage.setItem('ilearn-active-lesson-map', JSON.stringify(activeLessonMap))
  }, [activeLessonMap])

  useEffect(() => {
    localStorage.setItem('ilearn-enrolled-courses', JSON.stringify(enrolledCourses))
  }, [enrolledCourses])

  useEffect(() => {
    localStorage.setItem('ilearn-bookmarked-courses', JSON.stringify(bookmarkedCourses))
  }, [bookmarkedCourses])

  useEffect(() => {
    localStorage.setItem('ilearn-user-notes', JSON.stringify(userNotes))
  }, [userNotes])

  // Splash dismissal
  useEffect(() => {
    if (!analyticsSplash) return
    const timeout = window.setTimeout(() => setAnalyticsSplash(false), 1100)
    return () => window.clearTimeout(timeout)
  }, [analyticsSplash])

  // Navigation handler
  const navigate = (path) => {
    window.history.pushState({}, '', path)
    const newRoute = getRoute()
    setRoute(newRoute)
    setMobileMenuOpen(false)
    setAnalyticsSplash(path === '/analytics')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Enrollment flow triggers
  const initiateEnrollment = (course) => {
    setEnrollingCourse(course)
  }

  const confirmEnrollment = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses((prev) => [...prev, courseId])
    }
    setEnrollingCourse(null)
    showToast('🎉 Enrolled successfully! Redirecting to lesson player...')
    navigate(`/learn/${courseId}`)
  }

  const handleToggleBookmark = (courseId, e) => {
    if (e) e.stopPropagation()
    if (bookmarkedCourses.includes(courseId)) {
      setBookmarkedCourses((prev) => prev.filter((id) => id !== courseId))
      showToast('Course removed from bookmarks')
    } else {
      setBookmarkedCourses((prev) => [...prev, courseId])
      showToast('🔖 Saved course to bookmarks')
    }
  }

  const handleToggleLessonComplete = (courseId, lessonIndex) => {
    const currentCompleted = completedMap[courseId] || []
    const isCompleted = currentCompleted.includes(lessonIndex)
    const updated = isCompleted
      ? currentCompleted.filter((i) => i !== lessonIndex)
      : [...currentCompleted, lessonIndex]

    setCompletedMap((prev) => ({
      ...prev,
      [courseId]: updated,
    }))

    const course = COURSES_DATA.find((c) => c.id === courseId)
    if (!isCompleted) {
      if (course && updated.length === course.lessons.length) {
        showToast('🏆 Incredible! You have completed the entire course!')
        setCertificateCourse(course)
      } else {
        showToast('✨ Lesson marked as completed!')
      }
    }
  }

  const handleSaveNote = (courseId, lessonIndex, text) => {
    const noteKey = `${courseId}_${lessonIndex}`
    setUserNotes((prev) => ({
      ...prev,
      [noteKey]: text,
    }))
    showToast('💾 Lesson note saved')
  }

  const activeCourse = useMemo(() => {
    return COURSES_DATA.find((c) => c.id === route.id) || COURSES_DATA[0]
  }, [route.id])

  const filteredCourses = useMemo(() => {
    let result = COURSES_DATA.filter((course) => {
      const matchesSearch = `${course.title} ${course.tagline} ${course.category} ${course.author}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      const matchesCategory =
        selectedCategory === 'All courses' || course.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    if (sortBy === 'rating') {
      result.sort((a, b) => Number(b.rating) - Number(a.rating))
    } else if (sortBy === 'duration') {
      result.sort((a, b) => a.totalDurationMinutes - b.totalDurationMinutes)
    }

    return result
  }, [searchQuery, selectedCategory, sortBy])

  const getCourseProgress = (courseId) => {
    const course = COURSES_DATA.find((c) => c.id === courseId)
    if (!course) return 0
    const completedList = completedMap[courseId] || []
    return Math.round((completedList.length / course.lessons.length) * 100)
  }

  const currentActiveLesson = activeLessonMap[activeCourse.id] || 0

  return (
    <div className="min-h-screen bg-[#fbfaf8] text-[#1a1e1b] transition-colors duration-300 dark:bg-[#0d1210] dark:text-[#f3f5f3]">
      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl border border-emerald-600/20 bg-[#1e382b] px-5 py-3.5 text-sm font-semibold text-white shadow-2xl animate-fade-in">
          <Sparkles size={17} className="text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Enrollment Flow Modal */}
      {enrollingCourse && (
        <EnrollmentModal
          course={enrollingCourse}
          onClose={() => setEnrollingCourse(null)}
          onConfirm={() => confirmEnrollment(enrollingCourse.id)}
        />
      )}

      {/* Certificate Showcase Modal */}
      {certificateCourse && (
        <CertificateModal
          course={certificateCourse}
          onClose={() => setCertificateCourse(null)}
        />
      )}

      {/* Dashboard Shell for /dashboard and /analytics */}
      {route.page === 'dashboard' || route.page === 'analytics' ? (
        <DashboardShell
          route={route}
          navigate={navigate}
          dark={dark}
          setDark={setDark}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          enrolledCount={enrolledCourses.length}
        >
          {route.page === 'dashboard' ? (
            <DashboardView
              navigate={navigate}
              enrolledCourses={enrolledCourses}
              getCourseProgress={getCourseProgress}
            />
          ) : analyticsSplash ? (
            <AnalyticsSplash />
          ) : (
            <AnalyticsView />
          )}
        </DashboardShell>
      ) : (
        /* Marketing / Editorial Shell for Discover, My Learning, Course Detail, & Player */
        <MarketingShell
          route={route}
          navigate={navigate}
          dark={dark}
          setDark={setDark}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        >
          {route.page === 'discover' && (
            <DiscoverView
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortBy={sortBy}
              setSortBy={setSortBy}
              courses={filteredCourses}
              navigate={navigate}
              bookmarkedCourses={bookmarkedCourses}
              onToggleBookmark={handleToggleBookmark}
              getCourseProgress={getCourseProgress}
              onInitiateEnroll={initiateEnrollment}
            />
          )}

          {route.page === 'my-learning' && (
            <MyLearningView
              navigate={navigate}
              enrolledCourses={enrolledCourses}
              bookmarkedCourses={bookmarkedCourses}
              getCourseProgress={getCourseProgress}
              onToggleBookmark={handleToggleBookmark}
              onViewCertificate={(c) => setCertificateCourse(c)}
            />
          )}

          {route.page === 'course' && (
            <CourseDetailView
              course={activeCourse}
              navigate={navigate}
              isEnrolled={enrolledCourses.includes(activeCourse.id)}
              isBookmarked={bookmarkedCourses.includes(activeCourse.id)}
              progress={getCourseProgress(activeCourse.id)}
              onInitiateEnroll={() => initiateEnrollment(activeCourse)}
              onToggleBookmark={handleToggleBookmark}
            />
          )}

          {route.page === 'learn' && (
            <LearningPlayerView
              course={activeCourse}
              activeLessonIndex={currentActiveLesson}
              setActiveLessonIndex={(idx) =>
                setActiveLessonMap((prev) => ({ ...prev, [activeCourse.id]: idx }))
              }
              completedLessons={completedMap[activeCourse.id] || []}
              onToggleComplete={(idx) => handleToggleLessonComplete(activeCourse.id, idx)}
              userNotes={userNotes[`${activeCourse.id}_${currentActiveLesson}`] || ''}
              onSaveNote={(text) => handleSaveNote(activeCourse.id, currentActiveLesson, text)}
              progress={getCourseProgress(activeCourse.id)}
              navigate={navigate}
            />
          )}
        </MarketingShell>
      )}
    </div>
  )
}

/* ============================================================================
   5. MODALS & POPUPS (Enrollment & Certificate)
   ============================================================================ */

/**
 * 5.1 Enrollment Flow Confirmation Modal.
 */
function EnrollmentModal({ course, onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-black/10 bg-[#fbfaf8] p-6 shadow-2xl dark:border-white/10 dark:bg-[#121815] sm:p-8">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full text-gray-400 hover:bg-black/5 dark:hover:bg-white/10"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#234432] text-white">
            <Sparkles size={20} />
          </span>
          <div>
            <p className="eyebrow">Confirm Enrollment</p>
            <h3 className="text-xl font-bold tracking-tight">{course.title}</h3>
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
          You are about to unlock full access to all {course.lessons.length} video lessons, downloadable exercise guides, interactive knowledge checks, and certificate eligibility.
        </p>

        {/* Benefits List */}
        <div className="my-6 space-y-2.5 rounded-2xl border border-black/5 bg-black/[0.02] p-4 text-xs dark:border-white/5 dark:bg-white/[0.03]">
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
            <Check size={15} /> <span>Self-paced lifetime access to all course modules</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
            <Check size={15} /> <span>Personal interactive note-taking and lesson quizzes</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
            <Check size={15} /> <span>Verified Certificate of Completion upon 100% progress</span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-full border border-black/10 px-5 py-2.5 text-xs font-semibold text-gray-600 hover:bg-black/5 dark:border-white/10 dark:text-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex items-center gap-2 rounded-full bg-[#1b3426] px-6 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#284f3a] dark:bg-white dark:text-[#121c16]"
          >
            <span>Confirm & Start Learning</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

/**
 * 5.2 Certificate Showcase & Download Modal.
 */
function CertificateModal({ course, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-amber-600/30 bg-[#fefdfb] p-6 shadow-2xl dark:border-amber-500/20 dark:bg-[#151c17] sm:p-10">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full text-gray-400 hover:bg-black/5 dark:hover:bg-white/10"
        >
          <X size={18} />
        </button>

        {/* Certificate Decorative Border Container */}
        <div className="rounded-2xl border-4 border-double border-amber-800/20 p-8 text-center dark:border-amber-500/30">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400">
            <Trophy size={28} />
          </div>

          <p className="eyebrow mt-4 text-amber-800 dark:text-amber-300">
            Certificate of Intentional Mastery
          </p>
          <h2 className="serif mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            {course.title}
          </h2>

          <p className="mt-4 text-xs text-gray-500">This certificate certifies that</p>
          <p className="mt-1 text-lg font-bold text-[#1b3426] dark:text-[#90cca7]">
            Jordan Davis
          </p>
          <p className="mt-1 text-xs text-gray-500">
            has successfully completed all coursework, interactive exercises, and curriculum requirements.
          </p>

          <div className="mt-8 flex items-center justify-between border-t border-amber-900/10 pt-4 text-xs font-semibold text-gray-500 dark:border-white/10">
            <span>Instructor: {course.author}</span>
            <span>Issued: September 2026</span>
            <span>Credential ID: IL-{course.id}84920</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <ShieldCheck size={16} /> Verified Authentic Credential
          </span>
          <button
            onClick={() => {
              alert('Certificate downloaded to your device as PDF.')
              onClose()
            }}
            className="flex items-center gap-2 rounded-full bg-[#1b3426] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#254935] dark:bg-white dark:text-[#121c16]"
          >
            <Download size={14} /> Download Certificate (PDF)
          </button>
        </div>
      </div>
    </div>
  )
}

/* ============================================================================
   6. SHARED UI ATOMS & COMPONENTS
   ============================================================================ */

function Brand({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-2.5 text-left text-[20px] font-bold tracking-tight transition"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#223d2f] text-white shadow-sm transition-transform duration-300 group-hover:scale-105 dark:bg-[#34634c] dark:text-[#f3f5f3]">
        <Podcast size={19} strokeWidth={2.2} />
      </span>
      <span className="font-semibold tracking-tight">ILEARN</span>
    </button>
  )
}

function ThemeButton({ dark, setDark }) {
  return (
    <button
      aria-label="Toggle theme mode"
      onClick={() => setDark(!dark)}
      className="grid h-10 w-10 place-items-center rounded-full text-gray-500 transition-colors hover:bg-black/5 dark:text-gray-400 dark:hover:bg-white/10"
      title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {dark ? <Sun size={18} className="text-amber-300" /> : <Moon size={18} />}
    </button>
  )
}

function AnimatedHamburger({ checked, onChange, label, className = '' }) {
  return (
    <label className={`animated-hamburger ${className}`} aria-label={label}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          className="animated-hamburger-line animated-hamburger-top"
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        />
        <path className="animated-hamburger-line" d="M7 16 27 16" />
      </svg>
    </label>
  )
}

function MetricCard({ label, value, change, icon: Icon, trend = 'up' }) {
  return (
    <div className="card p-5 transition hover:-translate-y-0.5">
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          {label}
        </p>
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#e5eee7] text-[#2b593f] dark:bg-[#1a2d23] dark:text-[#9bcbb1]">
          <Icon size={16} />
        </span>
      </div>
      <p className="mt-4 text-3xl font-bold tracking-tight text-[#16291e] dark:text-white">
        {value}
      </p>
      <div className="mt-2 flex items-center gap-1 text-xs font-medium text-[#3b7353] dark:text-[#78c097]">
        {trend === 'up' && <TrendingUp size={13} />}
        <span>{change}</span>
      </div>
    </div>
  )
}

function CourseCard({
  course,
  navigate,
  isBookmarked,
  onToggleBookmark,
  progress = 0,
  onInitiateEnroll,
  isEnrolled,
}) {
  return (
    <div
      onClick={() => navigate(`/course/${course.id}`)}
      className="card group cursor-pointer overflow-hidden p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:border-white/20 flex flex-col justify-between"
    >
      <div>
        {/* Course Thumbnail Image */}
        <div className={`relative mb-4 aspect-[16/10] overflow-hidden rounded-xl ${course.color}`}>
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover mix-blend-multiply opacity-80 transition duration-500 group-hover:scale-105 dark:opacity-70"
            loading="lazy"
          />
          <span className="glass-pill absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold text-gray-800 dark:text-gray-200">
            {course.category}
          </span>

          <button
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark course'}
            onClick={(e) => onToggleBookmark(course.id, e)}
            className="glass-pill absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full text-gray-700 transition hover:scale-110 dark:text-gray-200"
          >
            {isBookmarked ? (
              <BookmarkCheck size={16} className="text-emerald-700 dark:text-emerald-400" />
            ) : (
              <Bookmark size={16} />
            )}
          </button>

          {progress > 0 && (
            <div className="glass-pill absolute bottom-3 left-3 rounded-full px-3 py-1 text-[11px] font-semibold text-emerald-900 dark:text-emerald-200">
              {progress}% completed
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{course.level}</span>
          <span className="flex items-center gap-1 font-medium text-amber-600 dark:text-amber-400">
            <Star size={13} fill="currentColor" /> {course.rating}{' '}
            <span className="text-gray-400">({course.reviewsCount})</span>
          </span>
        </div>

        <h3 className="mt-2 text-[17px] font-bold leading-snug tracking-tight group-hover:text-[#2d5740] dark:group-hover:text-[#90cca7]">
          {course.title}
        </h3>

        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
          {course.tagline}
        </p>
      </div>

      <div className="mt-4 border-t border-gray-100 pt-3 text-xs text-gray-500 dark:border-white/5 dark:text-gray-400">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 truncate">
            <UserRound size={13} /> {course.author}
          </span>
          <span className="flex items-center gap-1 shrink-0">
            <Clock3 size={13} /> {course.duration}
          </span>
        </div>
      </div>
    </div>
  )
}

/* ============================================================================
   7. LAYOUT SHELLS
   ============================================================================ */

function MarketingShell({
  route,
  navigate,
  dark,
  setDark,
  mobileMenuOpen,
  setMobileMenuOpen,
  children,
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 border-b border-black/[0.06] bg-[#fbfaf8]/90 backdrop-blur-xl transition-colors dark:border-white/[0.08] dark:bg-[#0d1210]/90">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
          <Brand onClick={() => navigate('/')} />

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => navigate('/')}
              className={`nav-link ${route.page === 'discover' || route.page === 'course' ? 'active' : ''}`}
            >
              Discover
            </button>
            <button
              onClick={() => navigate('/my-learning')}
              className={`nav-link ${route.page === 'my-learning' || route.page === 'learn' ? 'active' : ''}`}
            >
              My Learning
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="nav-link"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate('/analytics')}
              className={`nav-link ${route.page === 'analytics' ? 'active' : ''}`}
            >
              Analytics
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeButton dark={dark} setDark={setDark} />

            <button
              onClick={() => navigate('/dashboard')}
              className="hidden items-center gap-2.5 rounded-full border border-black/10 bg-white/70 py-1.5 pl-1.5 pr-3.5 text-xs font-semibold shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 sm:flex"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#dbe7de] text-xs font-bold text-[#234232] dark:bg-[#20362b] dark:text-[#aee2c2]">
                JD
              </span>
              <span>Jordan Davis</span>
            </button>

            <button
              aria-label="Toggle mobile menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="grid h-10 w-10 place-items-center rounded-full text-gray-600 transition hover:bg-black/5 dark:text-gray-300 dark:hover:bg-white/10 md:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-black/5 bg-[#fbfaf8] px-5 py-4 dark:border-white/10 dark:bg-[#0d1210] md:hidden">
            <nav className="flex flex-col space-y-1">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/5"
              >
                <Compass size={18} /> Discover Catalog
              </button>
              <button
                onClick={() => navigate('/my-learning')}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/5"
              >
                <BookOpen size={18} /> My Learning
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/5"
              >
                <LayoutDashboard size={18} /> Dashboard
              </button>
              <button
                onClick={() => navigate('/analytics')}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/5"
              >
                <BarChart3 size={18} /> Learning Analytics
              </button>
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto w-full max-w-[1240px] flex-1 px-5 pb-24 lg:px-8">
        {children}
      </main>

      <footer className="mt-auto border-t border-black/[0.06] bg-white/40 py-10 dark:border-white/[0.08] dark:bg-[#090d0b]">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-6 px-5 text-xs text-gray-500 dark:text-gray-400 sm:flex-row lg:px-8">
          <div className="flex items-center gap-2 font-medium">
            <Podcast size={15} className="text-[#3b6d52]" />
            <span>ILEARN Intentional Learning Studio © 2026. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/')} className="hover:text-ink dark:hover:text-white">
              Discover
            </button>
            <button onClick={() => navigate('/my-learning')} className="hover:text-ink dark:hover:text-white">
              My Courses
            </button>
            <button onClick={() => navigate('/analytics')} className="hover:text-ink dark:hover:text-white">
              Insights
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function DashboardShell({
  route,
  navigate,
  dark,
  setDark,
  mobileMenuOpen,
  setMobileMenuOpen,
  children,
}) {
  const [collapsed, setCollapsed] = useState(false)

  const navItems = [
    { path: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { path: '/my-learning', label: 'My Learning', icon: BookOpen },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/', label: 'Discover Catalog', icon: Compass },
  ]

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <button
        aria-label="Close navigation overlay"
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col border-r border-black/[0.07] bg-[#f5f7f4] px-3 py-6 transition-all duration-300 dark:border-white/[0.08] dark:bg-[#121815] md:static md:translate-x-0 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } ${collapsed ? 'w-20' : 'w-64'}`}
      >
        <div
          className={`flex items-center ${
            collapsed ? 'justify-center' : 'justify-between px-2'
          }`}
        >
          {!collapsed && <Brand onClick={() => navigate('/dashboard')} />}
          <AnimatedHamburger
            checked={collapsed}
            onChange={setCollapsed}
            label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          />
          <button
            aria-label="Close mobile sidebar"
            onClick={() => setMobileMenuOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-lg text-gray-500 hover:bg-black/5 md:hidden dark:text-gray-400"
          >
            <X size={19} />
          </button>
        </div>

        <nav className="mt-10 flex-1 space-y-1.5">
          {navItems.map(({ path, label, icon: Icon }) => {
            const isSelected =
              route.page ===
              (path === '/dashboard'
                ? 'dashboard'
                : path === '/my-learning'
                ? 'my-learning'
                : path === '/analytics'
                ? 'analytics'
                : 'discover')

            return (
              <button
                key={path}
                title={collapsed ? label : undefined}
                onClick={() => {
                  navigate(path)
                  setMobileMenuOpen(false)
                }}
                className={`side-link ${collapsed ? 'justify-center px-0' : ''} ${
                  isSelected ? 'selected' : ''
                }`}
              >
                <Icon size={18} className="shrink-0" />
                {!collapsed && <span>{label}</span>}
              </button>
            )
          })}
        </nav>

        {!collapsed && (
          <div className="mt-auto rounded-2xl border border-emerald-700/15 bg-[#e4ede6] p-4 dark:border-emerald-500/20 dark:bg-[#1a2b22]">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#356149] dark:text-[#9cd1b3]">
              Daily Rhythm
            </p>
            <p className="mt-1 flex items-center gap-2 text-xl font-extrabold text-[#193325] dark:text-white">
              3 Day Streak <Flame size={18} className="text-amber-500" />
            </p>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
              Keep it going by learning 15 min today.
            </p>
          </div>
        )}
      </aside>

      <div className="min-w-0 flex-1">
        <header className="flex h-[76px] items-center justify-between border-b border-black/[0.07] bg-[#fbfaf8]/90 px-5 backdrop-blur-md transition-colors dark:border-white/[0.08] dark:bg-[#0d1210]/90 lg:px-10">
          <div className="flex items-center gap-3">
            <AnimatedHamburger
              checked={mobileMenuOpen}
              onChange={setMobileMenuOpen}
              label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              className="md:hidden"
            />
            <div className="hidden text-xs font-semibold text-gray-500 dark:text-gray-400 sm:block">
              Thursday, September 24, 2026
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeButton dark={dark} setDark={setDark} />
            <button
              onClick={() => navigate('/my-learning')}
              className="flex items-center gap-2.5 rounded-full border border-black/10 bg-white/60 py-1.5 pl-1.5 pr-3.5 text-xs font-semibold shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/5"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#dbe7de] text-xs font-bold text-[#234232] dark:bg-[#20362b] dark:text-[#aee2c2]">
                JD
              </span>
              <span>Jordan Davis</span>
            </button>
          </div>
        </header>

        <main className="mx-auto max-w-[1240px] p-5 lg:p-10">{children}</main>
      </div>
    </div>
  )
}

/* ============================================================================
   8. PAGE VIEWS (Discover, Course Details, Learning, My Learning, Dashboard)
   ============================================================================ */

/**
 * 8.1 Discover View: Home & Course Discovery.
 */
function DiscoverView({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  courses,
  navigate,
  bookmarkedCourses,
  onToggleBookmark,
  getCourseProgress,
  onInitiateEnroll,
}) {
  return (
    <>
      {/* Hero Presentation Section */}
      <section className="grid items-center gap-10 pb-12 pt-10 md:grid-cols-[1.2fr_360px] md:pt-16">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-500/20 dark:bg-emerald-950/40 dark:text-emerald-300">
            <Sparkles size={13} />
            <span>Curated for calm & intentional mastery</span>
          </div>

          <h1 className="max-w-[700px] text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Make space to <span className="serif italic font-normal text-[#2b593f] dark:text-[#7ec29a]">grow.</span>
          </h1>

          <p className="mt-6 max-w-[520px] text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
            Immerse yourself in thoughtfully structured courses designed to respect your attention and spark genuine creative breakthroughs.
          </p>
        </div>

        {/* Streak & Quick Resume Widget Card */}
        <div className="card relative overflow-hidden p-6 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-400">Weekly Rhythm</p>
              <p className="mt-1 flex items-center gap-2 text-xl font-bold">
                3 day streak <Flame size={18} className="text-amber-500" />
              </p>
            </div>
            <div className="flex gap-1.5">
              {[1, 1, 1, 0, 0, 0, 0].map((active, idx) => (
                <span
                  key={idx}
                  title={`Day ${idx + 1}`}
                  className={`h-8 w-2 rounded-full transition-all ${
                    active
                      ? 'bg-[#43795b]'
                      : 'bg-gray-200 dark:bg-white/10'
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            Last active on <span className="font-semibold text-[#254f38] dark:text-[#99d3b0]">Designing for Calm</span>
          </p>

          <button
            onClick={() => navigate('/learn/1')}
            className="mt-5 flex w-full items-center justify-between rounded-xl bg-[#1a2e23] px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#254233] dark:bg-white dark:text-[#121c16] dark:hover:bg-gray-100"
          >
            <span>Resume your lesson</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Filter & Search Bar Toolbar */}
      <section className="mb-10 flex flex-col gap-4 border-y border-black/[0.07] py-5 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition ${
                  isSelected
                    ? 'bg-[#1e382b] text-white dark:bg-white dark:text-[#132219]'
                    : 'bg-black/[0.03] text-gray-600 hover:bg-black/[0.06] dark:bg-white/[0.04] dark:text-gray-300 dark:hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-64 sm:flex-initial">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses..."
              className="h-10 w-full rounded-full border border-black/10 bg-white/70 pl-9 pr-8 text-xs font-medium outline-none transition placeholder:text-gray-400 focus:border-[#43795b] focus:ring-2 focus:ring-[#43795b]/20 dark:border-white/10 dark:bg-white/5 dark:focus:border-[#7ec29a]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-10 rounded-full border border-black/10 bg-white/70 px-3.5 text-xs font-medium text-gray-700 outline-none dark:border-white/10 dark:bg-[#161f1a] dark:text-gray-300"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="duration">Shortest First</option>
          </select>
        </div>
      </section>

      {/* Courses Catalog Grid */}
      <section>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="eyebrow">Hand-Crafted Syllabus</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">Explore Courses</h2>
          </div>
          <span className="text-xs font-semibold text-gray-400">
            {courses.length} {courses.length === 1 ? 'course' : 'courses'} available
          </span>
        </div>

        {courses.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                navigate={navigate}
                isBookmarked={bookmarkedCourses.includes(course.id)}
                onToggleBookmark={onToggleBookmark}
                progress={getCourseProgress(course.id)}
                onInitiateEnroll={() => onInitiateEnroll(course)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-200 py-16 text-center dark:border-white/10">
            <BookOpen size={36} className="mx-auto text-gray-400" />
            <p className="mt-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
              No matching courses found
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Try adjusting your search keywords or switching category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All courses')
              }}
              className="mt-4 rounded-full bg-[#1e382b] px-4 py-2 text-xs font-semibold text-white dark:bg-white dark:text-[#121c16]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Editorial Quote & Philosophy Section */}
      <section className="mt-20 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-[#1b2b23] p-8 text-white shadow-xl sm:p-10 dark:bg-[#13201a]">
          <div className="mb-12 flex items-start justify-between">
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-200">
              ILEARN Journal
            </span>
            <BookOpen size={20} className="text-white/60" />
          </div>
          <p className="serif text-2xl leading-snug sm:text-3xl">
            "The quality of your life is the quality of your attention."
          </p>
          <p className="mt-6 text-xs font-medium text-emerald-300/80">— James Clear, Author of Atomic Habits</p>
        </div>

        <div className="rounded-3xl bg-[#ece4db] p-8 text-[#261f18] sm:p-10 dark:bg-[#212a23] dark:text-[#dce8e0]">
          <TrendingUp size={24} className="mb-12 text-[#8b5a3e] dark:text-[#84c39c]" />
          <p className="text-xs font-bold uppercase tracking-wider text-[#8b5a3e] dark:text-[#84c39c]">
            Learn Consistently
          </p>
          <h3 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
            Small daily steps make a lasting lifelong difference.
          </h3>
          <button
            onClick={() => navigate('/my-learning')}
            className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#633a21] hover:underline dark:text-[#a1e2ba]"
          >
            <span>See your progress</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </>
  )
}

/**
 * 8.2 Course Details View.
 */
function CourseDetailView({
  course,
  navigate,
  isEnrolled,
  isBookmarked,
  progress,
  onInitiateEnroll,
  onToggleBookmark,
}) {
  const [activeTab, setActiveTab] = useState('syllabus')

  return (
    <section className="pt-8">
      <button
        onClick={() => navigate('/')}
        className="mb-8 flex items-center gap-2 text-xs font-semibold text-gray-500 transition hover:text-[#1a1e1b] dark:text-gray-400 dark:hover:text-white"
      >
        <ChevronLeft size={16} /> Back to Catalog
      </button>

      {/* Main Course Header & Media Showcase */}
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className={`relative min-h-[380px] overflow-hidden rounded-3xl ${course.color} shadow-lg`}>
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover mix-blend-multiply opacity-85 dark:opacity-75"
          />
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <span className="glass-pill rounded-full px-3.5 py-1.5 text-xs font-bold text-gray-900 dark:text-white">
              {course.category}
            </span>
            <span className="glass-pill rounded-full px-3.5 py-1.5 text-xs font-bold text-gray-900 dark:text-white">
              {course.level}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <p className="eyebrow">{course.category} Specialization</p>
            <span className="flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400">
              <Star size={13} fill="currentColor" /> {course.rating} ({course.reviewsCount} ratings)
            </span>
          </div>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            {course.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            {course.description}
          </p>

          <div className="my-6 flex flex-wrap gap-5 border-y border-black/[0.08] py-4 text-xs font-medium text-gray-600 dark:border-white/[0.08] dark:text-gray-300">
            <span className="flex items-center gap-1.5">
              <UserRound size={15} className="text-[#39694e]" /> {course.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 size={15} className="text-[#39694e]" /> {course.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen size={15} className="text-[#39694e]" /> {course.lessons.length} lessons
            </span>
          </div>

          {/* Enrollment / Learning CTA */}
          <div className="flex flex-wrap items-center gap-4">
            {isEnrolled ? (
              <button
                onClick={() => navigate(`/learn/${course.id}`)}
                className="flex items-center gap-2 rounded-full bg-[#1b3426] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#254935] dark:bg-white dark:text-[#121c16] dark:hover:bg-gray-100"
              >
                <span>Continue Learning ({progress}%)</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={onInitiateEnroll}
                className="flex items-center gap-2 rounded-full bg-[#1b3426] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#254935] dark:bg-white dark:text-[#121c16] dark:hover:bg-gray-100"
              >
                <span>Enroll in Course</span>
                <ArrowRight size={16} />
              </button>
            )}

            <button
              onClick={(e) => onToggleBookmark(course.id, e)}
              className="flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-5 py-3.5 text-sm font-semibold transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              {isBookmarked ? (
                <>
                  <BookmarkCheck size={16} className="text-emerald-600 dark:text-emerald-400" />
                  <span>Bookmarked</span>
                </>
              ) : (
                <>
                  <Bookmark size={16} />
                  <span>Save for later</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Course Detail Tabs Section */}
      <div className="mt-14">
        <div className="flex gap-4 border-b border-black/[0.08] pb-3 dark:border-white/[0.08]">
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`pb-2 text-sm font-bold transition ${
              activeTab === 'syllabus'
                ? 'border-b-2 border-[#2b593f] text-[#2b593f] dark:border-[#7ec29a] dark:text-[#7ec29a]'
                : 'text-gray-500 hover:text-black dark:hover:text-white'
            }`}
          >
            Curriculum ({course.lessons.length} lessons)
          </button>
          <button
            onClick={() => setActiveTab('outcomes')}
            className={`pb-2 text-sm font-bold transition ${
              activeTab === 'outcomes'
                ? 'border-b-2 border-[#2b593f] text-[#2b593f] dark:border-[#7ec29a] dark:text-[#7ec29a]'
                : 'text-gray-500 hover:text-black dark:hover:text-white'
            }`}
          >
            What You'll Learn
          </button>
          <button
            onClick={() => setActiveTab('instructor')}
            className={`pb-2 text-sm font-bold transition ${
              activeTab === 'instructor'
                ? 'border-b-2 border-[#2b593f] text-[#2b593f] dark:border-[#7ec29a] dark:text-[#7ec29a]'
                : 'text-gray-500 hover:text-black dark:hover:text-white'
            }`}
          >
            Instructor Profile
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`pb-2 text-sm font-bold transition ${
              activeTab === 'resources'
                ? 'border-b-2 border-[#2b593f] text-[#2b593f] dark:border-[#7ec29a] dark:text-[#7ec29a]'
                : 'text-gray-500 hover:text-black dark:hover:text-white'
            }`}
          >
            Resources ({course.resources?.length || 0})
          </button>
        </div>

        {/* Tab 1: Syllabus Accordion */}
        {activeTab === 'syllabus' && (
          <div className="mt-8 space-y-3">
            {course.lessons.map((lesson, idx) => (
              <div
                key={lesson.id}
                className="card flex items-center justify-between p-5 transition hover:border-[#386b4e]"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#dbe7de] text-xs font-bold text-[#204430] dark:bg-[#1a3124] dark:text-[#9fd5b6]">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold">{lesson.title}</h4>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {lesson.preview}
                    </p>
                  </div>
                </div>
                <span className="ml-4 shrink-0 text-xs font-semibold text-gray-400">
                  {lesson.duration}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Outcomes */}
        {activeTab === 'outcomes' && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {course.outcomes.map((outcome, idx) => (
              <div key={idx} className="card flex items-start gap-3.5 p-5">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Instructor Profile */}
        {activeTab === 'instructor' && (
          <div className="card mt-8 flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
            <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-[#dbe7de] text-2xl font-bold text-[#234232] dark:bg-[#1e3427] dark:text-[#a0dbb9]">
              {course.author.split(' ').map((n) => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-lg font-bold">{course.author}</h3>
              <p className="text-xs font-semibold text-[#3b6d52] dark:text-[#88cb9f]">
                {course.authorRole}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                {course.authorBio}
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Resources */}
        {activeTab === 'resources' && (
          <div className="mt-8 space-y-3">
            {course.resources?.map((res, idx) => (
              <div key={idx} className="card flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-[#3b6d52]" />
                  <div>
                    <p className="text-xs font-bold">{res.name}</p>
                    <p className="text-[10px] text-gray-400">{res.size}</p>
                  </div>
                </div>
                <button
                  onClick={() => alert(`Downloading ${res.name}...`)}
                  className="flex items-center gap-1.5 rounded-full border border-black/10 px-3 py-1.5 text-xs font-semibold hover:bg-black/5 dark:border-white/10"
                >
                  <Download size={13} /> Download
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

/**
 * 8.3 Learning / Lesson Experience with Focus Mode, Quiz, Notes, and Curriculum.
 */
function LearningPlayerView({
  course,
  activeLessonIndex,
  setActiveLessonIndex,
  completedLessons,
  onToggleComplete,
  userNotes,
  onSaveNote,
  progress,
  navigate,
}) {
  // Player state simulation
  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState('1x')
  const [isMuted, setIsMuted] = useState(false)
  const [focusMode, setFocusMode] = useState(false)
  const [activeTab, setActiveTab] = useState('notes') // 'notes' | 'takeaways' | 'quiz'
  const [noteDraft, setNoteDraft] = useState(userNotes)

  // Quiz state
  const [selectedQuizOption, setSelectedQuizOption] = useState(null)
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  // Reset quiz state when switching lessons
  useEffect(() => {
    setSelectedQuizOption(null)
    setQuizSubmitted(false)
    setNoteDraft(userNotes)
  }, [userNotes, activeLessonIndex])

  const currentLesson = course.lessons[activeLessonIndex] || course.lessons[0]
  const isLessonComplete = completedLessons.includes(activeLessonIndex)

  const handlePrev = () => {
    if (activeLessonIndex > 0) {
      setActiveLessonIndex(activeLessonIndex - 1)
    }
  }

  const handleNext = () => {
    if (activeLessonIndex < course.lessons.length - 1) {
      setActiveLessonIndex(activeLessonIndex + 1)
    }
  }

  return (
    <section className={`pt-8 ${focusMode ? 'max-w-4xl mx-auto' : ''}`}>
      {/* Top Controls: Back button & Focus mode toggle */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => navigate(`/course/${course.id}`)}
          className="flex items-center gap-2 text-xs font-semibold text-gray-500 transition hover:text-[#1a1e1b] dark:text-gray-400 dark:hover:text-white"
        >
          <ChevronLeft size={16} /> Back to Course Overview
        </button>

        <button
          onClick={() => setFocusMode(!focusMode)}
          className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
            focusMode
              ? 'border-emerald-600 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
              : 'border-black/10 text-gray-600 hover:bg-black/5 dark:border-white/10 dark:text-gray-300'
          }`}
          title="Distraction-Free Focus Mode"
        >
          {focusMode ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          <span>{focusMode ? 'Exit Focus Mode' : 'Focus Mode'}</span>
        </button>
      </div>

      {/* Lesson Header Banner */}
      <div className="mb-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">{course.title}</p>
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-4xl">
            {currentLesson.title}
          </h1>
          <p className="mt-1 text-xs text-gray-500">
            Lesson {activeLessonIndex + 1} of {course.lessons.length} • {currentLesson.duration}
          </p>
        </div>

        <div className="w-full sm:w-60">
          <div className="mb-2 flex justify-between text-xs font-semibold">
            <span>Course Progress</span>
            <span className="text-[#2b593f] dark:text-[#88cb9f]">{progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
            <div
              className="h-full rounded-full bg-[#3b6d52] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Player & Workspace Grid */}
      <div className={`grid gap-8 ${focusMode ? 'grid-cols-1' : 'lg:grid-cols-[1fr_360px]'}`}>
        {/* Left / Center: Interactive Video Player */}
        <div>
          <div className={`relative aspect-video overflow-hidden rounded-3xl ${course.color} shadow-lg`}>
            <img
              src={course.image}
              alt=""
              className="h-full w-full object-cover opacity-75 mix-blend-multiply transition duration-500 dark:opacity-60"
            />

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-2xl transition hover:scale-110 dark:bg-[#121c16] dark:text-white"
            >
              {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
            </button>

            {/* Bottom Player Controls */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
              <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-white/30 cursor-pointer">
                <div className={`h-full rounded-full bg-emerald-400 ${isPlaying ? 'w-[45%]' : 'w-[20%]'}`} />
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-4">
                  <button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  <button onClick={() => setIsMuted(!isMuted)}>
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  <span>04:12 / {currentLesson.duration}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      setPlaybackSpeed((prev) => (prev === '1x' ? '1.25x' : prev === '1.25x' ? '1.5x' : '1x'))
                    }
                    className="rounded-md bg-white/20 px-2 py-0.5 font-bold hover:bg-white/30"
                  >
                    {playbackSpeed}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row: Prev/Next & Mark Completed */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.08] pb-6 dark:border-white/[0.08]">
            <div className="flex items-center gap-2">
              <button
                disabled={activeLessonIndex === 0}
                onClick={handlePrev}
                className="flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold disabled:opacity-40 dark:border-white/10"
              >
                <ChevronLeft size={15} /> Previous Lesson
              </button>
              <button
                disabled={activeLessonIndex === course.lessons.length - 1}
                onClick={handleNext}
                className="flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold disabled:opacity-40 dark:border-white/10"
              >
                Next Lesson <ChevronRight size={15} />
              </button>
            </div>

            <button
              onClick={() => onToggleComplete(activeLessonIndex)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition ${
                isLessonComplete
                  ? 'border border-emerald-600 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300'
                  : 'bg-[#1e382b] text-white hover:bg-[#2c4e3e] dark:bg-white dark:text-[#121c16]'
              }`}
            >
              {isLessonComplete ? (
                <>
                  <Check size={15} className="text-emerald-600 dark:text-emerald-300" />
                  <span>Lesson Completed</span>
                </>
              ) : (
                <span>Mark Lesson Complete</span>
              )}
            </button>
          </div>

          {/* Tabbed Interactive Lesson Content (Notes, Takeaways, Quiz) */}
          <div className="mt-8">
            <div className="flex gap-4 border-b border-black/[0.08] pb-2 dark:border-white/[0.08]">
              <button
                onClick={() => setActiveTab('notes')}
                className={`flex items-center gap-1.5 pb-2 text-xs font-bold transition ${
                  activeTab === 'notes'
                    ? 'border-b-2 border-[#2b593f] text-[#2b593f] dark:border-[#7ec29a] dark:text-[#7ec29a]'
                    : 'text-gray-500 hover:text-black dark:hover:text-white'
                }`}
              >
                <FileText size={14} /> My Lesson Notes
              </button>
              <button
                onClick={() => setActiveTab('takeaways')}
                className={`flex items-center gap-1.5 pb-2 text-xs font-bold transition ${
                  activeTab === 'takeaways'
                    ? 'border-b-2 border-[#2b593f] text-[#2b593f] dark:border-[#7ec29a] dark:text-[#7ec29a]'
                    : 'text-gray-500 hover:text-black dark:hover:text-white'
                }`}
              >
                <Sparkles size={14} /> Key Takeaways
              </button>
              {currentLesson.quiz && (
                <button
                  onClick={() => setActiveTab('quiz')}
                  className={`flex items-center gap-1.5 pb-2 text-xs font-bold transition ${
                    activeTab === 'quiz'
                      ? 'border-b-2 border-[#2b593f] text-[#2b593f] dark:border-[#7ec29a] dark:text-[#7ec29a]'
                      : 'text-gray-500 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <HelpCircle size={14} /> Practice Check
                </button>
              )}
            </div>

            {/* Tab: Notes Editor */}
            {activeTab === 'notes' && (
              <div className="mt-5">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Write reflections and thoughts for this lesson. Notes are automatically saved locally.
                </p>
                <textarea
                  value={noteDraft}
                  onChange={(e) => setNoteDraft(e.target.value)}
                  placeholder="Type your notes, ideas, or action items here..."
                  className="mt-3 h-32 w-full rounded-2xl border border-black/10 bg-white/70 p-4 text-xs font-medium leading-relaxed outline-none transition focus:border-[#43795b] focus:ring-2 focus:ring-[#43795b]/20 dark:border-white/10 dark:bg-white/5"
                />
                <button
                  onClick={() => onSaveNote(noteDraft)}
                  className="mt-2 rounded-xl bg-[#1e382b] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#284c3b] dark:bg-white dark:text-[#121c16]"
                >
                  Save Note
                </button>
              </div>
            )}

            {/* Tab: Key Takeaways */}
            {activeTab === 'takeaways' && (
              <div className="mt-5 space-y-3">
                {currentLesson.takeaways?.map((takeaway, idx) => (
                  <div key={idx} className="card p-4">
                    <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-200">
                      • {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Knowledge Check Quiz */}
            {activeTab === 'quiz' && currentLesson.quiz && (
              <div className="card mt-5 p-6">
                <h4 className="text-sm font-bold">{currentLesson.quiz.question}</h4>
                <div className="mt-4 space-y-2.5">
                  {currentLesson.quiz.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => !quizSubmitted && setSelectedQuizOption(idx)}
                      className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left text-xs font-semibold transition ${
                        selectedQuizOption === idx
                          ? 'border-[#3b6d52] bg-emerald-50 text-[#1e382b] dark:bg-emerald-950/40 dark:text-emerald-200'
                          : 'border-black/10 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5'
                      }`}
                    >
                      <span className="grid h-5 w-5 place-items-center rounded-full border text-[10px]">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </button>
                  ))}
                </div>

                {!quizSubmitted ? (
                  <button
                    disabled={selectedQuizOption === null}
                    onClick={() => setQuizSubmitted(true)}
                    className="mt-4 rounded-xl bg-[#1e382b] px-5 py-2 text-xs font-bold text-white disabled:opacity-40 dark:bg-white dark:text-[#121c16]"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <div className="mt-4 rounded-xl border border-emerald-600/20 bg-emerald-50 p-4 dark:border-emerald-500/20 dark:bg-emerald-950/40">
                    <p className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                      {selectedQuizOption === currentLesson.quiz.correct ? '🎉 Correct!' : '💡 Good Try!'}
                    </p>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                      {currentLesson.quiz.explanation}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar: Curriculum (hidden in Focus Mode) */}
        {!focusMode && (
          <aside className="card p-5">
            <div className="mb-4 flex items-center justify-between border-b border-black/[0.06] pb-3 dark:border-white/[0.08]">
              <h3 className="text-sm font-bold">Course Lessons</h3>
              <span className="text-xs font-bold text-gray-400">
                {completedLessons.length} of {course.lessons.length} complete
              </span>
            </div>

            <div className="space-y-1.5">
              {course.lessons.map((lesson, idx) => {
                const isSelected = activeLessonIndex === idx
                const isDone = completedLessons.includes(idx)

                return (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLessonIndex(idx)}
                    className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${
                      isSelected
                        ? 'bg-[#e4ede6] font-semibold text-[#1e3c2c] dark:bg-[#1b2d22] dark:text-[#9fe0bb]'
                        : 'hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                    }`}
                  >
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[10px] font-bold ${
                        isDone
                          ? 'bg-emerald-600 text-white dark:bg-emerald-500'
                          : isSelected
                          ? 'bg-[#29563d] text-white dark:bg-[#7ec29a] dark:text-black'
                          : 'bg-black/[0.06] text-gray-600 dark:bg-white/10 dark:text-gray-400'
                      }`}
                    >
                      {isDone ? <Check size={13} /> : idx + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs">{lesson.title}</p>
                      <p className="text-[10px] text-gray-400">{lesson.duration}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </aside>
        )}
      </div>
    </section>
  )
}

/**
 * 8.4 My Learning & Progress Tracking View.
 */
function MyLearningView({
  navigate,
  enrolledCourses,
  bookmarkedCourses,
  getCourseProgress,
  onToggleBookmark,
  onViewCertificate,
}) {
  const [filterTab, setFilterTab] = useState('in-progress')

  const displayedCourses = useMemo(() => {
    if (filterTab === 'saved') {
      return COURSES_DATA.filter((c) => bookmarkedCourses.includes(c.id))
    }
    if (filterTab === 'completed') {
      return COURSES_DATA.filter((c) => enrolledCourses.includes(c.id) && getCourseProgress(c.id) === 100)
    }
    return COURSES_DATA.filter((c) => enrolledCourses.includes(c.id) && getCourseProgress(c.id) < 100)
  }, [filterTab, enrolledCourses, bookmarkedCourses, getCourseProgress])

  return (
    <>
      <div className="mb-8 flex flex-col justify-between gap-5 pt-8 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Personal Dashboard</p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Keep your momentum.
          </h1>
          <p className="mt-1 text-xs text-gray-500">
            Track your ongoing courses, completed certifications, and saved reads.
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 rounded-full bg-[#1e382b] px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#2c4e3e] dark:bg-white dark:text-[#121c16]"
        >
          <Compass size={15} /> Explore New Courses
        </button>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <MetricCard
          label="Enrolled Courses"
          value={enrolledCourses.length}
          change={`${enrolledCourses.length} active`}
          icon={BookOpen}
        />
        <MetricCard
          label="Completed Certifications"
          value={COURSES_DATA.filter((c) => getCourseProgress(c.id) === 100).length}
          change="Lifetime verified"
          icon={Award}
        />
        <MetricCard
          label="Saved for Later"
          value={bookmarkedCourses.length}
          change="Curated list"
          icon={Bookmark}
        />
      </div>

      {/* Filter Tabs Bar */}
      <div className="mt-10 flex gap-4 border-b border-black/[0.08] pb-2 dark:border-white/[0.08]">
        <button
          onClick={() => setFilterTab('in-progress')}
          className={`pb-2 text-xs font-bold transition ${
            filterTab === 'in-progress'
              ? 'border-b-2 border-[#2b593f] text-[#2b593f] dark:border-[#7ec29a] dark:text-[#7ec29a]'
              : 'text-gray-500 hover:text-black dark:hover:text-white'
          }`}
        >
          In Progress ({COURSES_DATA.filter((c) => enrolledCourses.includes(c.id) && getCourseProgress(c.id) < 100).length})
        </button>
        <button
          onClick={() => setFilterTab('completed')}
          className={`pb-2 text-xs font-bold transition ${
            filterTab === 'completed'
              ? 'border-b-2 border-[#2b593f] text-[#2b593f] dark:border-[#7ec29a] dark:text-[#7ec29a]'
              : 'text-gray-500 hover:text-black dark:hover:text-white'
          }`}
        >
          Completed & Certificates ({COURSES_DATA.filter((c) => enrolledCourses.includes(c.id) && getCourseProgress(c.id) === 100).length})
        </button>
        <button
          onClick={() => setFilterTab('saved')}
          className={`pb-2 text-xs font-bold transition ${
            filterTab === 'saved'
              ? 'border-b-2 border-[#2b593f] text-[#2b593f] dark:border-[#7ec29a] dark:text-[#7ec29a]'
              : 'text-gray-500 hover:text-black dark:hover:text-white'
          }`}
        >
          Bookmarked ({bookmarkedCourses.length})
        </button>
      </div>

      {/* Course List / Grid */}
      <div className="mt-6">
        {displayedCourses.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedCourses.map((course) => {
              const progress = getCourseProgress(course.id)
              return (
                <div key={course.id} className="card p-5 flex flex-col justify-between">
                  <div>
                    <div className={`relative mb-4 aspect-[16/10] overflow-hidden rounded-xl ${course.color}`}>
                      <img src={course.image} alt="" className="h-full w-full object-cover mix-blend-multiply opacity-80" />
                      <span className="glass-pill absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold text-gray-800 dark:text-gray-200">
                        {course.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold">{course.title}</h3>
                    <p className="mt-1 text-xs text-gray-500">{course.author} • {course.duration}</p>

                    <div className="mt-4">
                      <div className="flex justify-between text-xs font-semibold">
                        <span>Progress</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="mt-1 h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                        <div className="h-full rounded-full bg-[#3b6d52]" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                    {progress === 100 ? (
                      <button
                        onClick={() => onViewCertificate(course)}
                        className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline"
                      >
                        <Award size={15} /> View Certificate
                      </button>
                    ) : (
                      <button
                        onClick={() => navigate(`/learn/${course.id}`)}
                        className="flex items-center gap-1.5 text-xs font-bold text-[#3b6d52] dark:text-[#88cb9f] hover:underline"
                      >
                        <span>Resume Lesson</span>
                        <ArrowRight size={13} />
                      </button>
                    )}

                    <button
                      onClick={(e) => onToggleBookmark(course.id, e)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {bookmarkedCourses.includes(course.id) ? (
                        <BookmarkCheck size={16} className="text-emerald-600" />
                      ) : (
                        <Bookmark size={16} />
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="card py-16 text-center">
            <BookOpen size={32} className="mx-auto text-gray-400" />
            <p className="mt-3 text-sm font-bold">No courses in this section yet</p>
            <p className="mt-1 text-xs text-gray-500">
              Browse our curated collection to start something new.
            </p>
            <button
              onClick={() => navigate('/')}
              className="mt-4 rounded-full bg-[#1e382b] px-5 py-2 text-xs font-bold text-white dark:bg-white dark:text-[#121c16]"
            >
              Browse Catalog
            </button>
          </div>
        )}
      </div>
    </>
  )
}

/**
 * 8.5 Dashboard Overview View.
 */
function DashboardView({ navigate, enrolledCourses, getCourseProgress }) {
  const activeCourse = COURSES_DATA[0]
  const progress = getCourseProgress(activeCourse.id)

  return (
    <>
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Overview</p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Welcome back, Jordan.
          </h1>
          <p className="mt-1 text-xs text-gray-500">
            Here is your current learning velocity and activity summary.
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 rounded-full bg-[#1e382b] px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#2c4e3e] dark:bg-white dark:text-[#121c16]"
        >
          <Compass size={15} /> Discover Courses
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Courses Enrolled" value={enrolledCourses.length} change="2 active" icon={BookOpen} />
        <MetricCard label="Study Hours" value="28.4h" change="+18% vs last month" icon={Clock3} />
        <MetricCard label="Current Streak" value="3 Days" change="Best: 14 days" icon={Flame} />
        <MetricCard label="Average Score" value="94%" change="Top 5% percentile" icon={Award} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="card p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold">Weekly Study Rhythm</h2>
              <p className="mt-0.5 text-xs text-gray-400">Hours spent learning over the last 7 days</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
              Goal Met
            </span>
          </div>

          <div className="flex h-48 items-end gap-3 pt-6">
            {[
              { day: 'Mon', h: 40, hrs: '1.2h' },
              { day: 'Tue', h: 65, hrs: '2.0h' },
              { day: 'Wed', h: 50, hrs: '1.5h' },
              { day: 'Thu', h: 85, hrs: '2.8h' },
              { day: 'Fri', h: 70, hrs: '2.2h' },
              { day: 'Sat', h: 95, hrs: '3.4h', current: true },
              { day: 'Sun', h: 45, hrs: '1.4h' },
            ].map((item, idx) => (
              <div key={idx} className="group relative flex flex-1 flex-col items-center gap-2">
                <div className="absolute -top-7 hidden rounded bg-black px-2 py-0.5 text-[10px] text-white group-hover:block dark:bg-white dark:text-black">
                  {item.hrs}
                </div>
                <div
                  className={`w-full rounded-t-lg transition-all duration-500 ${
                    item.current
                      ? 'bg-[#3b6d52]'
                      : 'bg-[#d8e6df] group-hover:bg-[#a8cdb6] dark:bg-[#1d3527] dark:group-hover:bg-[#2b4e3a]'
                  }`}
                  style={{ height: `${item.h}%` }}
                />
                <span className="text-[10px] font-semibold text-gray-400">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold">Continue Learning</h2>
            <button
              onClick={() => navigate('/learn/1')}
              className="text-xs font-bold text-[#3b6d52] hover:underline dark:text-[#80c89c]"
            >
              Resume <ArrowRight size={12} className="inline" />
            </button>
          </div>

          <div className={`mt-4 overflow-hidden rounded-2xl ${activeCourse.color}`}>
            <img
              src={activeCourse.image}
              alt=""
              className="h-28 w-full object-cover mix-blend-multiply opacity-80"
            />
          </div>

          <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
            {activeCourse.category} • Lesson 2 of {activeCourse.lessons.length}
          </p>

          <h3 className="mt-1 text-base font-bold">{activeCourse.title}</h3>

          <div className="mt-3">
            <div className="flex justify-between text-[11px] font-medium text-gray-500">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-[#3b6d52]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => navigate('/learn/1')}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e382b] py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#2a4e3c] dark:bg-white dark:text-[#121c16]"
          >
            <span>Resume Lesson</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </>
  )
}

/**
 * 8.6 Analytics View: Focus Metrics, Area Chart, & Achievements.
 */
function AnalyticsView() {
  return (
    <>
      <div className="mb-8">
        <p className="eyebrow">Insights & Telemetry</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Learning Analytics
        </h1>
        <p className="mt-1 text-xs text-gray-500">
          Gain clarity into your study routines, peak focus hours, and milestone achievements.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <MetricCard label="Focus Score" value="88 / 100" change="+12% from last week" icon={Headphones} />
        <MetricCard label="Course Completion" value="75%" change="Above 65% target" icon={CheckCircle2} />
        <MetricCard label="Peak Day" value="Saturday" change="4.2 hours average" icon={Calendar} />
      </div>

      <div className="card mt-6 p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold">Focus Hours Trend</h2>
            <p className="mt-0.5 text-xs text-gray-400">Daily focused study volume across this cycle</p>
          </div>
          <span className="rounded-full bg-[#e3ede5] px-3 py-1 text-xs font-bold text-[#2a543b] dark:bg-[#1a2d22] dark:text-[#9cd1b3]">
            +22% Growth
          </span>
        </div>

        <div className="relative h-60 w-full pt-4">
          <svg viewBox="0 0 700 220" className="h-full w-full overflow-visible">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b6d52" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b6d52" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            <path
              d="M0 160 C80 140, 120 70, 200 90 S320 180, 400 60 S520 80, 600 40 L700 50 L700 220 L0 220 Z"
              fill="url(#chartGradient)"
            />

            <path
              d="M0 160 C80 140, 120 70, 200 90 S320 180, 400 60 S520 80, 600 40 L700 50"
              fill="none"
              stroke="#3b6d52"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>

          <div className="mt-3 flex justify-between text-[11px] font-semibold text-gray-400">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-bold">Milestones & Badges</h3>
        <p className="text-xs text-gray-400">Badges earned through consistent practice</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((badge) => {
            const Icon = badge.icon
            return (
              <div key={badge.id} className="card flex items-start gap-3.5 p-4">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${badge.color}`}>
                  <Icon size={18} />
                </span>
                <div>
                  <h4 className="text-xs font-bold">{badge.title}</h4>
                  <p className="mt-1 text-[11px] leading-tight text-gray-500 dark:text-gray-400">
                    {badge.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

/**
 * 8.7 Transition Splash Screen for Analytics loading state.
 */
function AnalyticsSplash() {
  return (
    <section className="flex min-h-[500px] flex-col items-center justify-center text-center">
      <div className="splash-orbit">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#1e382b] text-white shadow-xl dark:bg-white dark:text-[#121c16]">
          <Podcast size={30} />
        </span>
      </div>
      <p className="eyebrow mt-8">ILEARN Telemetry</p>
      <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
        Preparing your insights
      </h1>
      <p className="mt-2 text-xs text-gray-500">
        Aggregating your weekly learning velocity and focus scores...
      </p>
      <div className="mt-6 h-1.5 w-44 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
        <div className="splash-progress h-full rounded-full bg-[#3b6d52]" />
      </div>
    </section>
  )
}

/* ============================================================================
   9. APPLICATION MOUNT
   ============================================================================ */
const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(<App />)
}
