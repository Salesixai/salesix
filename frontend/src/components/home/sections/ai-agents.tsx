'use client';

import { motion } from 'motion/react';
import { Phone, Headphones, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface AgentCard {
    type: string;
    description: string;
    preview: React.ReactNode;
    layout: 'text-right' | 'text-left';
}

const agentCards: AgentCard[] = [
    {
        type: 'Sales Automation',
        description: 'Transform your sales process with AI-powered automation that works around the clock. This intelligent agent identifies high-potential prospects, qualifies leads based on your criteria, and executes personalized outreach campaigns across email, SMS, and phone. It analyzes buyer intent signals, nurtures opportunities through strategic follow-ups, and ensures no lead slips through the cracks—accelerating your sales pipeline and closing more deals with less manual effort.',
        layout: 'text-right',
        preview: (
            <div className="w-full h-full flex items-center justify-center p-6 lg:p-8">
                <div className="w-full max-w-lg space-y-4">
                    {/* Sales outreach dashboard */}
                    <div className="bg-background border border-border rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <svg className="size-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold">Outreach Campaigns</h4>
                                    <p className="text-xs text-muted-foreground">Last 7 days</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                                <svg className="size-3 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 14l5-5 5 5z" />
                                </svg>
                                <span className="text-xs font-medium text-green-600 dark:text-green-500">+34%</span>
                            </div>
                        </div>

                        {/* Outreach channels */}
                        <div className="space-y-3">
                            <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="size-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-sm font-medium">Email Outreach</span>
                                    </div>
                                    <span className="text-xs font-medium text-primary">3.8K sent</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs">
                                    <span className="text-muted-foreground">Response: <span className="font-medium text-foreground">42%</span></span>
                                    <span className="text-muted-foreground">Meetings: <span className="font-medium text-foreground">86</span></span>
                                </div>
                            </div>

                            <div className="bg-muted/30 border border-border rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                        <span className="text-sm font-medium">SMS Outreach</span>
                                    </div>
                                    <span className="text-xs font-medium text-muted-foreground">1.2K sent</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs">
                                    <span className="text-muted-foreground">Delivered: <span className="font-medium text-foreground">99%</span></span>
                                    <span className="text-muted-foreground">Replies: <span className="font-medium text-foreground">28%</span></span>
                                </div>
                            </div>

                            <div className="bg-muted/30 border border-border rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-sm font-medium">Schedule Follow-ups</span>
                                    </div>
                                    <span className="text-xs font-medium text-muted-foreground">12 scheduled</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs">
                                    <span className="text-muted-foreground">Pending: <span className="font-medium text-foreground">Today</span></span>
                                </div>
                            </div>
                        </div>

                        {/* Conversion indicator */}
                        <div className="mt-6 pt-4 border-t border-border">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Conversion Rate</span>
                                <span className="text-lg font-semibold text-green-600 dark:text-green-500">18.4%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        type: 'Customer Support',
        description: 'Deliver exceptional customer service with an AI agent that leverages your complete knowledge base to handle support inquiries with precision. This intelligent assistant answers questions accurately, resolves tickets efficiently, and provides personalized assistance across voice, chat, and email channels. It seeks customer feedback proactively, learns from every interaction, and minimizes unnecessary transfers—ensuring your customers receive instant, human-like support that builds loyalty and satisfaction while reducing your support team\'s workload.',
        layout: 'text-left',
        preview: (
            <div className="w-full h-full flex items-center justify-center p-6 lg:p-8">
                <div className="w-full max-w-sm space-y-3">
                    {/* Call interface mockup */}
                    <div className="bg-background border border-border rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <Phone className="size-4 text-primary" />
                                <span className="text-sm font-medium">Phone Call • John Polenski</span>
                            </div>
                            <button className="p-1">
                                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                        <div className="text-xs text-muted-foreground mb-2">Call duration: 02:43</div>

                        <div className="bg-muted/30 rounded-lg p-3 mb-3">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                                    <Phone className="size-3" />
                                </div>
                                <span className="text-xs font-medium">Acme's Contact Center</span>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <button className="p-1 rounded bg-background">
                                        <svg className="size-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                    <div className="flex-1 h-1 bg-gradient-to-r from-primary to-muted-foreground/30 rounded-full" />
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    <span className="font-medium">00:01</span> Acme's Contact Center
                                </p>
                                <p className="text-xs">
                                    Hello, you've called Acme's Contact Center, my name is Lindy, how can I help you today?
                                </p>
                            </div>
                        </div>

                        <div className="bg-muted/30 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-xs font-medium">JP</span>
                                </div>
                                <span className="text-xs font-medium">John Polenski</span>
                            </div>
                            <p className="text-xs text-muted-foreground">00:05 John Polenski</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        type: 'Receptionist',
        description: 'Never miss an important call with an AI receptionist that manages your front desk operations seamlessly. This professional virtual assistant greets callers warmly, screens incoming calls intelligently, schedules appointments directly into your calendar, and answers frequently asked questions with accuracy. It handles multiple calls simultaneously, routes urgent matters to the right team members, and provides after-hours support—ensuring every caller receives prompt, courteous service while freeing your team to focus on high-value work that drives your business forward.',
        layout: 'text-right',
        preview: (
            <div className="w-full h-full flex items-center justify-center p-6 lg:p-8">
                <div className="w-full max-w-lg space-y-4">
                    {/* Receptionist tasks dashboard */}
                    <div className="bg-background border border-border rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Phone className="size-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold">AI Receptionist</h4>
                                    <p className="text-xs text-muted-foreground">Today's activities</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-medium text-green-600 dark:text-green-500">Available</span>
                            </div>
                        </div>

                        {/* Receptionist tasks */}
                        <div className="space-y-3">
                            <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                        <svg className="size-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">Greeting Callers</p>
                                        <p className="text-xs text-muted-foreground">32 calls greeted</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted/30 border border-border rounded-lg p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                                        <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">Scheduling Appointments</p>
                                        <p className="text-xs text-muted-foreground">18 appointments booked</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted/30 border border-border rounded-lg p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                                        <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">Answering FAQs</p>
                                        <p className="text-xs text-muted-foreground">24 questions answered</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted/30 border border-border rounded-lg p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                                        <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">Routing Calls</p>
                                        <p className="text-xs text-muted-foreground">14 calls transferred</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        type: 'Marketing Expert',
        description: 'Elevate your marketing strategy with an AI expert that thinks like a seasoned marketing director. This strategic agent develops comprehensive marketing plans, analyzes market trends and competitor activities, and creates data-driven content strategies optimized for your target audience. It manages social media campaigns across multiple platforms, tracks performance metrics in real-time, and continuously refines your approach based on engagement data—delivering consistent brand messaging that maximizes awareness, drives engagement, and generates measurable ROI for your marketing investments.',
        layout: 'text-left',
        preview: (
            <div className="w-full h-full flex items-center justify-center p-6 lg:p-8">
                <div className="w-full max-w-lg space-y-4">
                    {/* Marketing strategy dashboard */}
                    <div className="bg-background border border-border rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <svg className="size-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold">Marketing Strategy</h4>
                                    <p className="text-xs text-muted-foreground">Q4 2024 Plan</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                                <svg className="size-3 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-xs font-medium text-green-600 dark:text-green-500">On track</span>
                            </div>
                        </div>

                        {/* Strategy components */}
                        <div className="space-y-3">
                            <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="size-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        <span className="text-sm font-medium">Market Analysis</span>
                                    </div>
                                    <span className="text-xs font-medium text-primary">Updated</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs">
                                    <span className="text-muted-foreground">Trends: <span className="font-medium text-foreground">12 identified</span></span>
                                    <span className="text-muted-foreground">Insights: <span className="font-medium text-foreground">8 new</span></span>
                                </div>
                            </div>

                            <div className="bg-muted/30 border border-border rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        <span className="text-sm font-medium">Content Strategy</span>
                                    </div>
                                    <span className="text-xs font-medium text-muted-foreground">36 posts</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs">
                                    <span className="text-muted-foreground">Planned: <span className="font-medium text-foreground">Q4</span></span>
                                    <span className="text-muted-foreground">Topics: <span className="font-medium text-foreground">18</span></span>
                                </div>
                            </div>

                            <div className="bg-muted/30 border border-border rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                        </svg>
                                        <span className="text-sm font-medium">Social Media Plan</span>
                                    </div>
                                    <span className="text-xs font-medium text-muted-foreground">5 platforms</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs">
                                    <span className="text-muted-foreground">Reach: <span className="font-medium text-foreground">128K</span></span>
                                    <span className="text-muted-foreground">Growth: <span className="font-medium text-foreground">+24%</span></span>
                                </div>
                            </div>
                        </div>

                        {/* Performance indicator */}
                        <div className="mt-6 pt-4 border-t border-border">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Brand Awareness</span>
                                <span className="text-lg font-semibold text-green-600 dark:text-green-500">+46%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        type: 'Lead Generation',
        description: 'Supercharge your growth pipeline with an AI agent that continuously discovers and qualifies high-quality leads. This intelligent prospector uses advanced data intelligence to identify ideal customers, validates contact information for accuracy, and enriches profiles with comprehensive company and decision-maker insights. It scores and prioritizes leads based on conversion potential, segments prospects by industry and behavior patterns, and delivers actionable intelligence to your sales team—ensuring your pipeline stays filled with qualified opportunities that match your ideal customer profile and drive consistent revenue growth.',
        layout: 'text-right',
        preview: (
            <div className="w-full h-full flex items-center justify-center p-6 lg:p-8">
                <div className="w-full max-w-lg space-y-4">
                    {/* Lead pipeline header */}
                    <div className="bg-background border border-border rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <svg className="size-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold">Lead Pipeline</h4>
                                    <p className="text-xs text-muted-foreground">High-value prospects</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                                <span className="text-xs font-medium text-primary">142 new</span>
                            </div>
                        </div>

                        {/* Lead cards */}
                        <div className="space-y-3">
                            <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-4">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                            <span className="text-sm font-medium text-primary">AC</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">Acme Corporation</p>
                                            <p className="text-xs text-muted-foreground">Enterprise Software</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20">
                                        <svg className="size-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-xs font-medium text-primary">95</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <span>500+ employees</span>
                                    <span>•</span>
                                    <span>$50M revenue</span>
                                </div>
                            </div>

                            <div className="bg-muted/30 border border-border rounded-lg p-4">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                            <span className="text-sm font-medium">TI</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">TechInnovate Inc</p>
                                            <p className="text-xs text-muted-foreground">SaaS Platform</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted">
                                        <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-xs font-medium">88</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <span>200+ employees</span>
                                    <span>•</span>
                                    <span>$25M revenue</span>
                                </div>
                            </div>

                            <div className="bg-muted/30 border border-border rounded-lg p-4">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                            <span className="text-sm font-medium">GS</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">Global Systems</p>
                                            <p className="text-xs text-muted-foreground">IT Consulting</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted">
                                        <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-xs font-medium">72</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <span>150+ employees</span>
                                    <span>•</span>
                                    <span>$15M revenue</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats footer */}
                        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Leads Generated Today</span>
                            <span className="font-semibold text-primary">+89 leads</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];

export function AIAgentsSection() {
    const router = useRouter();

    const handleTryIt = () => {
        router.push('/auth');
    };

    return (
        <section
            id="ai-agents"
            className="flex flex-col items-center justify-center w-full relative"
        >
            <div className="relative w-full px-6">
                <div className="max-w-6xl mx-auto border-l border-r border-border">
                    {/* Section Header */}
                    <div className="flex flex-col items-center justify-center gap-6 py-16 md:py-20 lg:py-24 px-6">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
                            Specialized AI Agents for Every Workflow
                        </h2>
                        <p className="text-muted-foreground text-center text-balance font-medium">
                            Salesix lets you create autonomous AI agents that automate tasks, execute goals, and deliver real business impact.
                        </p>
                    </div>

                    {/* Agent Cards - Alternating Layout */}
                    <div className="flex flex-col">
                        {agentCards.map((agent, index) => (
                            <motion.div
                                key={agent.type}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="border-t border-border py-12 md:py-16 lg:py-20"
                            >
                                <div className="max-w-6xl mx-auto px-6 md:px-12">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                                        {/* Text Content */}
                                        <div
                                            className={`flex flex-col items-start justify-center gap-2 ${
                                                agent.layout === 'text-right'
                                                    ? 'lg:order-2'
                                                    : 'lg:order-1'
                                            }`}
                                        >
                                            <motion.h3
                                                className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance"
                                                initial={{ opacity: 0, x: agent.layout === 'text-right' ? 20 : -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                <span className="text-foreground block md:inline">AI Agents for </span>
                                                <span className="text-primary">{agent.type}</span>
                                            </motion.h3>
                                            <motion.p
                                                className="text-muted-foreground text-balance font-medium mb-6 md:mb-8 leading-relaxed"
                                                initial={{ opacity: 0, x: agent.layout === 'text-right' ? 20 : -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                            >
                                                {agent.description}
                                            </motion.p>

                                            <motion.button
                                                className="group inline-flex h-10 md:h-12 items-center justify-center gap-2 text-sm md:text-base font-medium tracking-wide rounded-full text-primary-foreground dark:text-black px-6 md:px-8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] bg-primary dark:bg-white hover:bg-primary/90 dark:hover:bg-white/90 transition-all duration-200 w-fit"
                                                initial={{ opacity: 0, x: agent.layout === 'text-right' ? 20 : -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.4 }}
                                            >
                                                <span>Try it</span>
                                                <span className="inline-flex items-center justify-center size-5 md:size-6 rounded-full bg-white/20 dark:bg-black/10 group-hover:bg-white/30 dark:group-hover:bg-black/20 transition-colors duration-200">
                                                    <svg
                                                        width="12"
                                                        height="12"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-primary-foreground dark:text-black md:w-[14px] md:h-[14px]"
                                                    >
                                                        <path
                                                            d="M7 17L17 7M17 7H8M17 7V16"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </motion.button>
                                        </div>

                                        {/* Preview */}
                                        <motion.div
                                            className={`flex flex-col items-center justify-center h-[300px] md:h-[400px] lg:h-[500px] ${
                                                agent.layout === 'text-right'
                                                    ? 'lg:order-1'
                                                    : 'lg:order-2'
                                            }`}
                                            initial={{ opacity: 0, x: agent.layout === 'text-right' ? -20 : 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            <div className="w-full h-full rounded-2xl border border-border bg-muted/20 overflow-hidden">
                                                {agent.preview}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

