'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import {
  GraduationCap, Search, Bell, Globe, Filter, Clock, Calendar,
  ExternalLink, MessageCircle, Send, Sparkles,
  BookOpen, TrendingUp, AlertTriangle, CheckCircle2, XCircle,
  Shirt, Layers, Palette, Cpu, Leaf, Factory, Settings,
  MapPin, DollarSign, Award, ArrowRight, Bot, User,
  BellRing, Eye, RefreshCw, Droplets, Flame, Beaker, FlaskConical,
  Printer, Shield, Atom, Microscope, Recycle, Waves, Zap, Loader2
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'

interface Scholarship {
  id: string; title: string; description: string; university: string
  country: string; subject: string; degree: string; amount: string
  applicationUrl: string; openDate: string; deadlineDate: string
  status: string; isTextile: boolean; requirements: string; benefits: string
}

interface Notification {
  id: string; scholarshipId: string; type: string; message: string
  isRead: boolean; createdAt: string; scholarship: Scholarship
}

interface Stats {
  total: number; open: number; closingSoon: number; closed: number
  textile: number; countries: string[]; subjects: string[]; degrees: string[]
}

interface ChatMessage { role: 'user' | 'assistant'; content: string }

// Wet Process Engineering related subjects
const wetProcessSubjects = [
  'Wet Process Engineering', 'Dyeing & Finishing Engineering', 'Textile Chemistry',
  'Color Chemistry', 'Textile Wet Processing', 'Textile Chemical Processing',
  'Polymer Science & Engineering', 'Fiber Science & Technology', 'Textile Printing Technology',
  'Sustainable Textile Processing', 'Textile Finishing Technology', 'Environmental Textile Engineering',
  'Textile Auxiliaries & Chemicals', 'Nanotechnology in Textiles', 'Smart Textile Finishing',
  'Water Treatment in Textile Industry', 'Green Chemistry in Textiles', 'Denim Processing Technology',
  'Textile Process Engineering', 'Coloration Technology', 'Advanced Materials in Textiles',
  'Textile Biotechnology'
]

const subjectIcons: Record<string, React.ReactNode> = {
  'Wet Process Engineering': <Droplets className="h-4 w-4" />,
  'Dyeing & Finishing Engineering': <Flame className="h-4 w-4" />,
  'Textile Chemistry': <Beaker className="h-4 w-4" />,
  'Color Chemistry': <Palette className="h-4 w-4" />,
  'Textile Wet Processing': <Waves className="h-4 w-4" />,
  'Textile Chemical Processing': <FlaskConical className="h-4 w-4" />,
  'Polymer Science & Engineering': <Atom className="h-4 w-4" />,
  'Fiber Science & Technology': <Microscope className="h-4 w-4" />,
  'Textile Printing Technology': <Printer className="h-4 w-4" />,
  'Sustainable Textile Processing': <Recycle className="h-4 w-4" />,
  'Textile Finishing Technology': <Shield className="h-4 w-4" />,
  'Environmental Textile Engineering': <Leaf className="h-4 w-4" />,
  'Textile Auxiliaries & Chemicals': <FlaskConical className="h-4 w-4" />,
  'Nanotechnology in Textiles': <Cpu className="h-4 w-4" />,
  'Smart Textile Finishing': <Sparkles className="h-4 w-4" />,
  'Water Treatment in Textile Industry': <Droplets className="h-4 w-4" />,
  'Green Chemistry in Textiles': <Leaf className="h-4 w-4" />,
  'Denim Processing Technology': <Factory className="h-4 w-4" />,
  'Textile Process Engineering': <Settings className="h-4 w-4" />,
  'Coloration Technology': <Palette className="h-4 w-4" />,
  'Advanced Materials in Textiles': <Layers className="h-4 w-4" />,
  'Textile Engineering': <Factory className="h-4 w-4" />,
  'Textile Design': <Palette className="h-4 w-4" />,
  'Smart Textiles': <Cpu className="h-4 w-4" />,
  'Textile Sustainability': <Leaf className="h-4 w-4" />,
  'Textile Technology': <Shirt className="h-4 w-4" />,
  'Textile Manufacturing': <Factory className="h-4 w-4" />,
  'Fashion & Textile Business': <TrendingUp className="h-4 w-4" />,
  'Textile Innovation': <Sparkles className="h-4 w-4" />,
  'Digital Textile Printing': <Printer className="h-4 w-4" />,
  'Apparel Industry': <Shirt className="h-4 w-4" />,
  'Sustainable Fashion Engineering': <Leaf className="h-4 w-4" />,
  'Textile Materials Science': <BookOpen className="h-4 w-4" />,
  'Textile Management': <TrendingUp className="h-4 w-4" />,
  'Textile Science': <BookOpen className="h-4 w-4" />,
  'Textile Biotechnology': <FlaskConical className="h-4 w-4" />,
}

function getStatusColor(status: string) {
  switch (status) {
    case 'open': return 'bg-emerald-100 text-emerald-800 border-emerald-300'
    case 'closing_soon': return 'bg-amber-100 text-amber-800 border-amber-300'
    case 'closed': return 'bg-red-100 text-red-800 border-red-300'
    default: return 'bg-gray-100 text-gray-800 border-gray-300'
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case 'open': return <CheckCircle2 className="h-3.5 w-3.5" />
    case 'closing_soon': return <AlertTriangle className="h-3.5 w-3.5" />
    case 'closed': return <XCircle className="h-3.5 w-3.5" />
    default: return <Clock className="h-3.5 w-3.5" />
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

function getDaysRemaining(deadlineDate: string) {
  return Math.ceil((new Date(deadlineDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
}

function isWetProcessSubject(subject: string) {
  return wetProcessSubjects.some(s => subject.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(subject.toLowerCase()))
}

export default function Home() {
  const [scholarships, setScholarships] = useState<Scholarship[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCountry, setFilterCountry] = useState('')
  const [filterDegree, setFilterDegree] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [filterTextile, setFilterTextile] = useState(false)
  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hello! I am your Scholarship AI Assistant. Ask me about scholarships, wet process engineering programs, textile subjects, or application tips!' }
  ])
  const [chatInput, setChatInput] = useState('')
  const [chatLoading, setChatLoading] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [discovering, setDiscovering] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)
  const [autoUpdateEnabled, setAutoUpdateEnabled] = useState(true)
  const autoUpdateRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-update: run every 5 minutes
  useEffect(() => {
    if (!autoUpdateEnabled) return
    const runAutoUpdate = async () => {
      try {
        const res = await fetch('/api/auto-update', { method: 'POST' })
        const data = await res.json()
        if (data.success) {
          setLastUpdated(data.lastUpdated)
          fetchScholarships()
          fetchNotifications()
        }
      } catch (err) { console.error('Auto-update failed:', err) }
    }
    // Run immediately on first load
    runAutoUpdate()
    // Then every 5 minutes
    autoUpdateRef.current = setInterval(runAutoUpdate, 5 * 60 * 1000)
    return () => { if (autoUpdateRef.current) clearInterval(autoUpdateRef.current) }
  }, [autoUpdateEnabled])

  const handleManualUpdate = async () => {
    setUpdating(true)
    try {
      const res = await fetch('/api/auto-update', { method: 'POST' })
      const data = await res.json()
      if (data.success) {
        setLastUpdated(data.lastUpdated)
        await fetchScholarships()
        await fetchNotifications()
      }
    } catch (err) { console.error(err) }
    finally { setUpdating(false) }
  }

  const handleDiscover = async () => {
    setDiscovering(true)
    try {
      const res = await fetch('/api/discover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: 'international scholarship wet process engineering textile dyeing finishing 2026 2027 masters PhD' }),
      })
      const data = await res.json()
      if (data.success && data.discovered > 0) {
        await fetchScholarships()
        await fetchNotifications()
      }
    } catch (err) { console.error(err) }
    finally { setDiscovering(false) }
  }

  const fetchScholarships = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (searchTerm) params.set('search', searchTerm)
      if (filterCountry) params.set('country', filterCountry)
      if (filterDegree) params.set('degree', filterDegree)
      if (filterStatus) params.set('status', filterStatus)
      if (filterTextile) params.set('isTextile', 'true')
      const res = await fetch(`/api/scholarships?${params.toString()}`)
      const data = await res.json()
      setScholarships(data.scholarships || [])
      if (data.stats) setStats(data.stats)
    } catch (err) { console.error(err) }
    finally { setLoading(false) }
  }, [searchTerm, filterCountry, filterDegree, filterStatus, filterTextile])

  const fetchNotifications = useCallback(async () => {
    try {
      const res = await fetch('/api/notifications')
      const data = await res.json()
      setNotifications(data.notifications || [])
      setUnreadCount(data.unreadCount || 0)
    } catch (err) { console.error(err) }
  }, [])

  useEffect(() => { fetchScholarships(); fetchNotifications() }, [fetchScholarships, fetchNotifications])

  const markNotificationRead = async (id: string) => {
    await fetch('/api/notifications', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    fetchNotifications()
  }

  const markAllRead = async () => {
    await fetch('/api/notifications', { method: 'DELETE' })
    fetchNotifications()
  }

  const sendChatMessage = async () => {
    if (!chatInput.trim() || chatLoading) return
    const userMessage = chatInput.trim()
    setChatInput('')
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setChatLoading(true)
    try {
      // Send ALL scholarships in condensed format (title, country, subject, status, deadline)
      const context = scholarships.map(s => `${s.title} | ${s.country} | ${s.subject} | ${s.degree} | ${s.status} | Deadline: ${formatDate(s.deadlineDate)}`).join('\n')
      // Send last 10 chat messages as history for multi-turn conversation
      const chatHistory = chatMessages.slice(-10).map(m => ({ role: m.role, content: m.content }))
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: userMessage, scholarshipContext: context, chatHistory }) })
      const data = await res.json()
      setChatMessages(prev => [...prev, { role: 'assistant', content: data.response || 'Sorry, I could not process your request.' }])
    } catch { setChatMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, there was an error. Please try again.' }]) }
    finally { setChatLoading(false) }
  }

  const openScholarships = scholarships.filter(s => s.status === 'open')
  const closingSoonScholarships = scholarships.filter(s => s.status === 'closing_soon')
  const wetProcessScholarships = scholarships.filter(s => isWetProcessSubject(s.subject))
  const wetProcessOpen = wetProcessScholarships.filter(s => s.status === 'open')

  // Group wet process scholarships by subject
  const wetProcessBySubject = wetProcessScholarships.reduce((acc, s) => {
    if (!acc[s.subject]) acc[s.subject] = []
    acc[s.subject].push(s)
    return acc
  }, {} as Record<string, Scholarship[]>)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">ScholarAI</h1>
              <p className="text-xs text-muted-foreground">Scholarship & Wet Process Engineering AI</p>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Auto-Update Status */}
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-lg bg-emerald-50 border border-emerald-200">
              <div className={`h-2 w-2 rounded-full ${autoUpdateEnabled ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`} />
              <span className="text-xs text-emerald-700">{autoUpdateEnabled ? 'Live' : 'Off'}</span>
            </div>
            {/* Manual Update Button */}
            <Button variant="ghost" size="icon" onClick={handleManualUpdate} disabled={updating} title="Update statuses">
              {updating ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            </Button>
            {/* Discover New Scholarships */}
            <Button variant="ghost" size="icon" onClick={handleDiscover} disabled={discovering} title="Discover new scholarships from web" className="text-amber-600 hover:text-amber-700">
              {discovering ? <Loader2 className="h-4 w-4 animate-spin" /> : <Zap className="h-4 w-4" />}
            </Button>
            {/* Auto-update toggle */}
            <Button variant="ghost" size="sm" onClick={() => setAutoUpdateEnabled(!autoUpdateEnabled)} className={`gap-1 text-xs ${autoUpdateEnabled ? 'text-emerald-600' : 'text-gray-400'}`}>
              <div className={`h-2 w-2 rounded-full ${autoUpdateEnabled ? 'bg-emerald-500' : 'bg-gray-400'}`} />
              <span className="hidden sm:inline">Auto</span>
            </Button>
            <Sheet open={notificationOpen} onOpenChange={setNotificationOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">{unreadCount}</span>}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:w-[400px]">
                <SheetHeader>
                  <div className="flex items-center justify-between">
                    <SheetTitle className="flex items-center gap-2"><BellRing className="h-5 w-5 text-emerald-600" /> Notifications</SheetTitle>
                    {unreadCount > 0 && <Button variant="ghost" size="sm" onClick={markAllRead}><Eye className="h-4 w-4 mr-1" /> Mark all read</Button>}
                  </div>
                </SheetHeader>
                <div className="mt-4 space-y-3 max-h-[70vh] overflow-y-auto">
                  {notifications.length === 0 ? <p className="text-center py-8 text-muted-foreground">No notifications yet</p> :
                    notifications.map((n) => (
                      <div key={n.id} className={`p-3 rounded-xl border cursor-pointer hover:bg-emerald-50/50 hover:border-emerald-300 transition-colors ${n.isRead ? 'bg-white' : 'bg-emerald-50 border-emerald-200'}`} onClick={async () => {
                        // Mark as read
                        if (!n.isRead) await markNotificationRead(n.id)
                        // Close notification sheet
                        setNotificationOpen(false)
                        // Find and open the scholarship detail
                        const found = scholarships.find(s => s.id === n.scholarshipId)
                        if (found) setSelectedScholarship(found)
                      }}>
                        <div className="flex items-start gap-2">
                          <div className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 ${n.type === 'deadline_approaching' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>
                            {n.type === 'deadline_approaching' ? <AlertTriangle className="h-3.5 w-3.5" /> : <BellRing className="h-3.5 w-3.5" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium">{n.message}</p>
                            <p className="text-xs text-muted-foreground mt-1">{new Date(n.createdAt).toLocaleDateString()}</p>
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            <span className="text-xs text-emerald-600 font-medium hover:underline">View</span>
                            {!n.isRead && <Button variant="ghost" size="icon" className="h-7 w-7" onClick={(e) => { e.stopPropagation(); markNotificationRead(n.id) }}><Eye className="h-3 w-3" /></Button>}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </SheetContent>
            </Sheet>
            <Button onClick={() => setChatOpen(!chatOpen)} className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg gap-2">
              <Bot className="h-4 w-4" /><span className="hidden sm:inline">AI Assistant</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-5 lg:w-[600px] bg-white shadow-sm border">
              <TabsTrigger value="dashboard" className="gap-1 text-xs sm:text-sm"><TrendingUp className="h-4 w-4" /> Dashboard</TabsTrigger>
              <TabsTrigger value="wet-process" className="gap-1 text-xs sm:text-sm"><Droplets className="h-4 w-4" /> Wet Process</TabsTrigger>
              <TabsTrigger value="scholarships" className="gap-1 text-xs sm:text-sm"><GraduationCap className="h-4 w-4" /> All</TabsTrigger>
              <TabsTrigger value="textile" className="gap-1 text-xs sm:text-sm"><Shirt className="h-4 w-4" /> Textile</TabsTrigger>
              <TabsTrigger value="deadlines" className="gap-1 text-xs sm:text-sm"><Clock className="h-4 w-4" /> Deadlines</TabsTrigger>
            </TabsList>
          </div>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { label: 'Total', value: stats?.total || 0, icon: GraduationCap, color: 'from-slate-500 to-slate-600', bg: 'bg-slate-50' },
                { label: 'Open', value: stats?.open || 0, icon: CheckCircle2, color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50' },
                { label: 'Closing Soon', value: stats?.closingSoon || 0, icon: AlertTriangle, color: 'from-amber-500 to-amber-600', bg: 'bg-amber-50' },
                { label: 'Wet Process', value: wetProcessScholarships.length, icon: Droplets, color: 'from-teal-500 to-teal-600', bg: 'bg-teal-50' },
                { label: 'Countries', value: stats?.countries?.length || 0, icon: Globe, color: 'from-indigo-500 to-indigo-600', bg: 'bg-indigo-50' },
              ].map((stat) => (
                <Card key={stat.label} className={`${stat.bg} border-0 shadow-sm`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div><p className="text-xs text-muted-foreground font-medium">{stat.label}</p><p className="text-2xl font-bold mt-1">{stat.value}</p></div>
                      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}><stat.icon className="h-5 w-5 text-white" /></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {closingSoonScholarships.length > 0 && (
              <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-amber-800"><AlertTriangle className="h-5 w-5" /> Closing Soon!</CardTitle>
                  <CardDescription className="text-amber-700">Deadlines approaching - apply now!</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {closingSoonScholarships.map((s) => (
                      <Card key={s.id} className="bg-white/80 border-amber-200 cursor-pointer" onClick={() => setSelectedScholarship(s)}>
                        <CardContent className="p-4">
                          <p className="text-sm font-semibold">{s.title}</p>
                          <p className="text-xs text-muted-foreground">{s.university}</p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="destructive" className="text-xs">{getDaysRemaining(s.deadlineDate)} days left</Badge>
                            <Badge variant="outline" className="text-xs">{s.degree}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2"><Sparkles className="h-5 w-5 text-emerald-600" /> Open Scholarships</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {openScholarships.slice(0, 6).map((s) => (
                  <Card key={s.id} className="hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-sm bg-white" onClick={() => setSelectedScholarship(s)}>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={`${getStatusColor(s.status)} gap-1`}>{getStatusIcon(s.status)} Open</Badge>
                        {isWetProcessSubject(s.subject) && <Badge className="bg-teal-100 text-teal-800 gap-1"><Droplets className="h-3 w-3" /> WPE</Badge>}
                      </div>
                      <h3 className="font-semibold text-sm mb-1 line-clamp-2">{s.title}</h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1"><MapPin className="h-3 w-3" /> {s.university}, {s.country}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3"><DollarSign className="h-3 w-3" /> {s.amount}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-emerald-600 flex items-center gap-1"><Calendar className="h-3 w-3" /> {formatDate(s.deadlineDate)}</p>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Wet Process Engineering Tab */}
          <TabsContent value="wet-process" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-4">
                <Card className="shadow-sm border-0 bg-gradient-to-br from-teal-500 to-emerald-600 text-white">
                  <CardContent className="p-6">
                    <Droplets className="h-10 w-10 mb-3 opacity-80" />
                    <h2 className="text-xl font-bold mb-1">Wet Process Engineering</h2>
                    <p className="text-sm text-white/80 mb-4">All subjects & scholarships for WPE</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/20 rounded-xl p-3"><p className="text-2xl font-bold">{wetProcessScholarships.length}</p><p className="text-xs text-white/70">Total</p></div>
                      <div className="bg-white/20 rounded-xl p-3"><p className="text-2xl font-bold">{wetProcessOpen.length}</p><p className="text-xs text-white/70">Open</p></div>
                      <div className="bg-white/20 rounded-xl p-3"><p className="text-2xl font-bold">{Object.keys(wetProcessBySubject).length}</p><p className="text-xs text-white/70">Subjects</p></div>
                      <div className="bg-white/20 rounded-xl p-3"><p className="text-2xl font-bold">{new Set(wetProcessScholarships.map(s => s.country)).size}</p><p className="text-xs text-white/70">Countries</p></div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-sm border-0 bg-white">
                  <CardHeader className="pb-3"><CardTitle className="text-base flex items-center gap-2"><BookOpen className="h-4 w-4 text-teal-600" /> WPE Related Subjects ({Object.keys(wetProcessBySubject).length})</CardTitle></CardHeader>
                  <CardContent className="space-y-1 max-h-96 overflow-y-auto">
                    {Object.entries(wetProcessBySubject).sort((a, b) => b[1].length - a[1].length).map(([subject, items]) => (
                      <button key={subject} onClick={() => { setActiveTab('scholarships'); setSearchTerm(subject); }} className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-teal-50 transition-colors text-left">
                        <div className="h-7 w-7 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">{subjectIcons[subject] || <BookOpen className="h-4 w-4" />}</div>
                        <div className="min-w-0 flex-1"><p className="text-xs font-medium truncate">{subject}</p><p className="text-xs text-muted-foreground">{items.length} scholarship{items.length > 1 ? 's' : ''} | {items.filter(s => s.status === 'open').length} open</p></div>
                      </button>
                    ))}
                  </CardContent>
                </Card>
              </div>
              <div className="lg:col-span-2 space-y-3">
                <h2 className="text-lg font-semibold flex items-center gap-2"><GraduationCap className="h-5 w-5 text-teal-600" /> All Wet Process Engineering Scholarships ({wetProcessScholarships.length})</h2>
                <div className="space-y-3 max-h-[70vh] overflow-y-auto">
                  {wetProcessScholarships.map((s) => (
                    <Card key={s.id} className="shadow-sm border-0 bg-white hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedScholarship(s)}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center shrink-0">{subjectIcons[s.subject] || <Droplets className="h-5 w-5 text-teal-600" />}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h3 className="font-semibold text-sm line-clamp-1">{s.title}</h3>
                              <Badge className={`${getStatusColor(s.status)} gap-1 shrink-0`}>{getStatusIcon(s.status)} {s.status === 'closing_soon' ? 'Closing' : s.status.charAt(0).toUpperCase() + s.status.slice(1)}</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mb-1">{s.university} - {s.country}</p>
                            <div className="flex flex-wrap gap-1.5">
                              <Badge variant="outline" className="text-xs gap-1"><BookOpen className="h-3 w-3" /> {s.subject}</Badge>
                              <Badge variant="outline" className="text-xs gap-1"><Award className="h-3 w-3" /> {s.degree}</Badge>
                              <Badge variant="outline" className="text-xs gap-1"><DollarSign className="h-3 w-3" /> {s.amount}</Badge>
                              <Badge variant="outline" className="text-xs gap-1"><Calendar className="h-3 w-3" /> {formatDate(s.deadlineDate)}</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Scholarships */}
          <TabsContent value="scholarships" className="space-y-6">
            <Card className="shadow-sm border-0 bg-white">
              <CardContent className="p-4">
                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search scholarships, subjects, universities..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Select value={filterCountry} onValueChange={setFilterCountry}>
                      <SelectTrigger className="w-[150px]"><Globe className="h-4 w-4 mr-1" /><SelectValue placeholder="Country" /></SelectTrigger>
                      <SelectContent><SelectItem value="all">All</SelectItem>{stats?.countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                    </Select>
                    <Select value={filterDegree} onValueChange={setFilterDegree}>
                      <SelectTrigger className="w-[120px]"><Award className="h-4 w-4 mr-1" /><SelectValue placeholder="Degree" /></SelectTrigger>
                      <SelectContent><SelectItem value="all">All</SelectItem>{stats?.degrees.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent>
                    </Select>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-[120px]"><Filter className="h-4 w-4 mr-1" /><SelectValue placeholder="Status" /></SelectTrigger>
                      <SelectContent><SelectItem value="all">All</SelectItem><SelectItem value="open">Open</SelectItem><SelectItem value="closing_soon">Closing Soon</SelectItem><SelectItem value="closed">Closed</SelectItem></SelectContent>
                    </Select>
                    <Button variant={filterTextile ? 'default' : 'outline'} className={filterTextile ? 'bg-teal-600' : ''} onClick={() => setFilterTextile(!filterTextile)}><Shirt className="h-4 w-4 mr-1" /> Textile</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{loading ? 'Loading...' : `${scholarships.length} found`}</p>
              <Button variant="ghost" size="sm" onClick={fetchScholarships}><RefreshCw className="h-4 w-4 mr-1" /> Refresh</Button>
            </div>
            {loading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{[1,2,3,4,5,6].map(i => <Card key={i} className="border-0 shadow-sm"><CardContent className="p-5"><Skeleton className="h-4 w-20 mb-3" /><Skeleton className="h-5 w-full mb-2" /><Skeleton className="h-4 w-3/4 mb-2" /><Skeleton className="h-4 w-1/2" /></CardContent></Card>)}</div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {scholarships.map((s) => (
                  <Card key={s.id} className="hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-sm bg-white" onClick={() => setSelectedScholarship(s)}>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={`${getStatusColor(s.status)} gap-1`}>{getStatusIcon(s.status)} {s.status === 'closing_soon' ? 'Closing' : s.status.charAt(0).toUpperCase() + s.status.slice(1)}</Badge>
                        {isWetProcessSubject(s.subject) && <Badge className="bg-teal-100 text-teal-800 gap-1"><Droplets className="h-3 w-3" /> WPE</Badge>}
                      </div>
                      <h3 className="font-semibold text-sm mb-1 line-clamp-2">{s.title}</h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1"><MapPin className="h-3 w-3" /> {s.university}, {s.country}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1"><BookOpen className="h-3 w-3" /> {s.subject}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3"><DollarSign className="h-3 w-3" /> {s.amount}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-emerald-600 flex items-center gap-1"><Calendar className="h-3 w-3" /> {formatDate(s.deadlineDate)}</p>
                        <Badge variant="outline" className="text-xs">{s.degree}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Textile */}
          <TabsContent value="textile" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-4">
                <Card className="shadow-sm border-0 bg-gradient-to-br from-teal-500 to-emerald-600 text-white">
                  <CardContent className="p-6">
                    <Shirt className="h-10 w-10 mb-3 opacity-80" />
                    <h2 className="text-xl font-bold mb-1">Textile Scholarships</h2>
                    <p className="text-sm text-white/80 mb-4">All textile programs worldwide</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/20 rounded-xl p-3"><p className="text-2xl font-bold">{stats?.textile || 0}</p><p className="text-xs text-white/70">Total</p></div>
                      <div className="bg-white/20 rounded-xl p-3"><p className="text-2xl font-bold">{scholarships.filter(s => s.isTextile && s.status === 'open').length}</p><p className="text-xs text-white/70">Open</p></div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-sm border-0 bg-white">
                  <CardHeader className="pb-3"><CardTitle className="text-base">All Subjects ({stats?.subjects?.length || 0})</CardTitle></CardHeader>
                  <CardContent className="space-y-1 max-h-96 overflow-y-auto">
                    {stats?.subjects.sort().map(subject => (
                      <button key={subject} onClick={() => { setFilterStatus('open'); setActiveTab('scholarships'); setFilterTextile(true); setSearchTerm(subject) }} className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-teal-50 transition-colors text-left">
                        <div className="h-7 w-7 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">{subjectIcons[subject] || <BookOpen className="h-4 w-4" />}</div>
                        <div className="min-w-0"><p className="text-xs font-medium">{subject}</p><p className="text-xs text-muted-foreground">{scholarships.filter(s => s.subject === subject).length} scholarships</p></div>
                      </button>
                    ))}
                  </CardContent>
                </Card>
              </div>
              <div className="lg:col-span-2 space-y-3">
                <h2 className="text-lg font-semibold flex items-center gap-2"><GraduationCap className="h-5 w-5 text-teal-600" /> All Textile Scholarships</h2>
                <div className="space-y-3 max-h-[70vh] overflow-y-auto">
                  {scholarships.filter(s => s.isTextile).map((s) => (
                    <Card key={s.id} className="shadow-sm border-0 bg-white hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedScholarship(s)}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center shrink-0">{subjectIcons[s.subject] || <Shirt className="h-5 w-5 text-teal-600" />}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h3 className="font-semibold text-sm">{s.title}</h3>
                              <Badge className={`${getStatusColor(s.status)} gap-1 shrink-0`}>{getStatusIcon(s.status)} {s.status === 'closing_soon' ? 'Closing' : s.status.charAt(0).toUpperCase() + s.status.slice(1)}</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mb-1">{s.university} - {s.country}</p>
                            <div className="flex flex-wrap gap-1.5">
                              <Badge variant="outline" className="text-xs gap-1"><BookOpen className="h-3 w-3" /> {s.subject}</Badge>
                              <Badge variant="outline" className="text-xs gap-1"><Award className="h-3 w-3" /> {s.degree}</Badge>
                              <Badge variant="outline" className="text-xs gap-1"><DollarSign className="h-3 w-3" /> {s.amount}</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Deadlines */}
          <TabsContent value="deadlines" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-4">
                <Card className="shadow-sm border-0 bg-gradient-to-br from-red-500 to-orange-500 text-white">
                  <CardContent className="p-6">
                    <Clock className="h-10 w-10 mb-3 opacity-80" />
                    <h2 className="text-xl font-bold mb-1">Deadline Tracker</h2>
                    <p className="text-sm text-white/80 mb-4">Never miss a deadline</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/20 rounded-xl p-3"><p className="text-2xl font-bold">{stats?.closingSoon || 0}</p><p className="text-xs text-white/70">Closing</p></div>
                      <div className="bg-white/20 rounded-xl p-3"><p className="text-2xl font-bold">{stats?.open || 0}</p><p className="text-xs text-white/70">Open</p></div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-sm border-0 bg-white">
                  <CardHeader className="pb-3"><CardTitle className="text-base">Quick Filter</CardTitle></CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant={filterStatus === 'closing_soon' ? 'default' : 'ghost'} className={`w-full justify-start gap-2 ${filterStatus === 'closing_soon' ? 'bg-amber-500' : ''}`} onClick={() => setFilterStatus(filterStatus === 'closing_soon' ? '' : 'closing_soon')}><AlertTriangle className="h-4 w-4" /> Closing Soon ({stats?.closingSoon || 0})</Button>
                    <Button variant={filterStatus === 'open' ? 'default' : 'ghost'} className={`w-full justify-start gap-2 ${filterStatus === 'open' ? 'bg-emerald-500' : ''}`} onClick={() => setFilterStatus(filterStatus === 'open' ? '' : 'open')}><CheckCircle2 className="h-4 w-4" /> Open ({stats?.open || 0})</Button>
                    <Button variant={filterStatus === 'closed' ? 'default' : 'ghost'} className={`w-full justify-start gap-2 ${filterStatus === 'closed' ? 'bg-red-500' : ''}`} onClick={() => setFilterStatus(filterStatus === 'closed' ? '' : 'closed')}><XCircle className="h-4 w-4" /> Closed ({stats?.closed || 0})</Button>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2"><Calendar className="h-5 w-5 text-red-500" /> Timeline</h2>
                <div className="relative pl-8 space-y-4 max-h-[70vh] overflow-y-auto">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-emerald-400 to-red-400" />
                  {scholarships.map((s) => (
                    <div key={s.id} className="relative cursor-pointer" onClick={() => setSelectedScholarship(s)}>
                      <div className={`absolute -left-5 top-3 h-3 w-3 rounded-full border-2 border-white shadow ${s.status === 'closing_soon' ? 'bg-amber-400' : s.status === 'open' ? 'bg-emerald-400' : 'bg-red-400'}`} />
                      <Card className={`shadow-sm border-0 ${s.status === 'closed' ? 'bg-gray-50 opacity-60' : 'bg-white'} hover:shadow-md transition-shadow`}>
                        <CardContent className="p-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-sm">{s.title}</h3>
                              <p className="text-xs text-muted-foreground">{s.university}, {s.country}</p>
                              <div className="flex gap-1.5 mt-1.5">
                                <Badge className={`${getStatusColor(s.status)} gap-1 text-xs`}>{getStatusIcon(s.status)} {s.status === 'closing_soon' ? 'Closing' : s.status.charAt(0).toUpperCase() + s.status.slice(1)}</Badge>
                                {isWetProcessSubject(s.subject) && <Badge className="bg-teal-100 text-teal-800 gap-1 text-xs"><Droplets className="h-3 w-3" /> WPE</Badge>}
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-muted-foreground">{s.status === 'closed' ? 'Closed' : 'Deadline'}</p>
                              <p className={`text-sm font-bold ${s.status === 'closing_soon' ? 'text-amber-600' : s.status === 'open' ? 'text-emerald-600' : 'text-red-600'}`}>{formatDate(s.deadlineDate)}</p>
                              {s.status === 'closing_soon' && <p className="text-xs text-red-500 font-medium">{getDaysRemaining(s.deadlineDate)} days!</p>}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Scholarship Detail */}
      <Dialog open={!!selectedScholarship} onOpenChange={() => setSelectedScholarship(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedScholarship && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <DialogTitle className="text-lg">{selectedScholarship.title}</DialogTitle>
                    <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {selectedScholarship.university}, {selectedScholarship.country}</p>
                  </div>
                  <Badge className={`${getStatusColor(selectedScholarship.status)} gap-1`}>{getStatusIcon(selectedScholarship.status)} {selectedScholarship.status === 'closing_soon' ? 'Closing Soon' : selectedScholarship.status.charAt(0).toUpperCase() + selectedScholarship.status.slice(1)}</Badge>
                </div>
              </DialogHeader>
              <div className="space-y-4 mt-2">
                <p className="text-sm text-muted-foreground">{selectedScholarship.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-teal-50"><p className="text-xs text-teal-600 font-medium">Subject</p><p className="text-sm font-semibold flex items-center gap-1">{subjectIcons[selectedScholarship.subject] || <BookOpen className="h-4 w-4" />} {selectedScholarship.subject}</p></div>
                  <div className="p-3 rounded-xl bg-emerald-50"><p className="text-xs text-emerald-600 font-medium">Degree</p><p className="text-sm font-semibold">{selectedScholarship.degree}</p></div>
                  <div className="p-3 rounded-xl bg-amber-50"><p className="text-xs text-amber-600 font-medium">Amount</p><p className="text-sm font-semibold">{selectedScholarship.amount}</p></div>
                  <div className="p-3 rounded-xl bg-blue-50"><p className="text-xs text-blue-600 font-medium">Deadline</p><p className="text-sm font-semibold">{formatDate(selectedScholarship.deadlineDate)}</p></div>
                </div>
                {selectedScholarship.requirements && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-1"><Settings className="h-4 w-4 text-muted-foreground" /> Requirements</h4>
                    <div className="p-3 rounded-xl bg-gray-50 text-sm text-muted-foreground">
                      {selectedScholarship.requirements.split(',').map((req, i) => <div key={i} className="flex items-start gap-2 py-0.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" /><span>{req.trim()}</span></div>)}
                    </div>
                  </div>
                )}
                {selectedScholarship.benefits && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-1"><Award className="h-4 w-4 text-emerald-600" /> Benefits</h4>
                    <div className="p-3 rounded-xl bg-emerald-50 text-sm text-muted-foreground">
                      {selectedScholarship.benefits.split(',').map((ben, i) => <div key={i} className="flex items-start gap-2 py-0.5"><Sparkles className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" /><span>{ben.trim()}</span></div>)}
                    </div>
                  </div>
                )}
                <div className="flex gap-3">
                  {selectedScholarship.status !== 'closed' && (
                    <Button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white" asChild>
                      <a href={selectedScholarship.applicationUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4 mr-2" /> Apply Now</a>
                    </Button>
                  )}
                  <Button variant="outline" onClick={() => { setSelectedScholarship(null); setChatOpen(true); setChatInput(`Tell me about ${selectedScholarship.title}`) }}><MessageCircle className="h-4 w-4 mr-2" /> Ask AI</Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* AI Chat */}
      <Sheet open={chatOpen} onOpenChange={setChatOpen}>
        <SheetContent className="w-full sm:w-[420px] p-0 flex flex-col">
          <SheetHeader className="p-4 border-b bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
            <SheetTitle className="flex items-center gap-2 text-white"><Bot className="h-5 w-5" /> ScholarAI Assistant</SheetTitle>
            <p className="text-sm text-white/80">Ask about scholarships, wet process, textile programs!</p>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'assistant' && <div className="h-7 w-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0"><Bot className="h-4 w-4 text-white" /></div>}
                <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${msg.role === 'user' ? 'bg-emerald-600 text-white rounded-br-sm' : 'bg-gray-100 rounded-bl-sm'}`}>{msg.content}</div>
                {msg.role === 'user' && <div className="h-7 w-7 rounded-full bg-emerald-100 flex items-center justify-center shrink-0"><User className="h-4 w-4 text-emerald-600" /></div>}
              </div>
            ))}
            {chatLoading && <div className="flex gap-2"><div className="h-7 w-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0"><Bot className="h-4 w-4 text-white" /></div><div className="bg-gray-100 rounded-2xl px-3 py-2"><div className="flex gap-1"><div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" /><div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} /><div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} /></div></div></div>}
          </div>
          <div className="px-4 pb-2"><div className="flex gap-1.5 flex-wrap">
            {['Best WPE scholarships?', 'DAAD textile scholarship?', 'MEXT dyeing program?', 'Tips for application'].map(p => <button key={p} onClick={() => setChatInput(p)} className="text-xs px-2.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100">{p}</button>)}
          </div></div>
          <div className="p-4 border-t bg-white"><div className="flex gap-2">
            <Input placeholder="Ask about scholarships..." value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendChatMessage()} className="flex-1" />
            <Button onClick={sendChatMessage} disabled={chatLoading || !chatInput.trim()} className="bg-emerald-600 hover:bg-emerald-700"><Send className="h-4 w-4" /></Button>
          </div></div>
        </SheetContent>
      </Sheet>

      {/* Footer */}
      <footer className="mt-auto border-t bg-white/80 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">ScholarAI - Wet Process Engineering & Scholarship AI Assistant</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1"><div className={`h-2 w-2 rounded-full ${autoUpdateEnabled ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`} /> {autoUpdateEnabled ? 'Auto-update: ON (5 min)' : 'Auto-update: OFF'}</div>
            {lastUpdated && <span>Last updated: {new Date(lastUpdated).toLocaleTimeString()}</span>}
            <div className="flex items-center gap-1"><Sparkles className="h-3 w-3 text-emerald-500" /> AI + Web Discovery</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
