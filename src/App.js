import React, { useState, useEffect, useMemo } from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Briefcase, 
  Palette, 
  Home,
  Star,
  Heart,
  ChevronRight,
  Terminal,
  PenTool,
  Code,
  Layout,
  Lightbulb,
  CheckCircle,
  Database,
  Globe,
  Server,
  Command,
  Cloud,
  Settings, 
  GraduationCap,
  Leaf,
  Atom,
  FileJson,
  FileCode,
  Triangle,
  CloudLightning,
  Moon,
  Sun,
  Trash2,
  Award,
  Presentation,
  Search,
  Frame,
  Rocket,
  Folder,
  CheckSquare,
  PieChart
} from 'lucide-react';

// --- Main App Component ---
const App = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.style.colorScheme = theme;
    document.body.style.backgroundColor = theme === 'dark' ? '#050505' : '#f2f2f2';
  }, [theme]);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300); 
  };

  const menuItems = [
    { name: 'Home', icon: <Home size={16} /> },
    { name: 'Work', icon: <GraduationCap size={16} /> },
    { name: 'Projects', icon: <Folder size={16} /> },
    { name: 'Skills', icon: <Code size={16} /> },       
    { name: 'Settings', icon: <Settings size={16} /> }, 
  ];

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden relative flex flex-col items-center transition-colors duration-500 ${theme}`}>
      
      {/* Global Styles & Theming */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        
        .dark {
          --bg-main: #050505;
          --bg-card: #0a0a0a;
          --bg-element: #111111;
          --border: #2a2a2a;
          --border-hover: #444444;
          --text-title: #ffffff;
          --text-main: #999999;
          --text-muted: #555555;
          --accent-glow: rgba(255,255,255,0.05);
          --grid-opacity: 0.15;
          --contrib-0: #161616;
          --contrib-1: #333333;
          --contrib-2: #666666;
          --contrib-3: #b3b3b3;
          --contrib-4: #ffffff;
          --timeline-line: rgba(255, 255, 255, 0.4);
          --timeline-head: rgba(255, 255, 255, 0.6);
          --selected-control: #6366f1;
        }

        .light {
          --bg-main: #f2f2f2;
          --bg-card: #ffffff;
          --bg-element: #f7f7f7;
          --border: #e5e5e5;
          --border-hover: #d4d4d4;
          --text-title: #171717;
          --text-main: #525252;
          --text-muted: #a3a3a3;
          --accent-glow: rgba(0,0,0,0.03);
          --grid-opacity: 0.08;
          --contrib-0: #ebedf0;
          --contrib-1: #d1d5da;
          --contrib-2: #959da5;
          --contrib-3: #6a737d;
          --contrib-4: #24292e;
          --timeline-line: rgba(0, 0, 0, 0.4);
          --timeline-head: rgba(0, 0, 0, 0.6);
          --selected-control: #4f46e5;
        }

        .app-container {
          background-color: var(--bg-main);
          color: var(--text-main);
        }

        .grid-bg {
          background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: var(--grid-opacity);
        }

        .snake-line {
            stroke-dasharray: 6;
            animation: dash 30s linear infinite;
        }
        @keyframes dash {
            to { stroke-dashoffset: -1000; }
        }

        .draw-line {
          stroke-dasharray: 200; 
          stroke-dashoffset: 200;
          animation: draw 3s linear forwards;
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        
        .page-transition {
          transition: opacity 0.3s ease, transform 0.3s ease, filter 0.3s ease;
        }
        .fade-out { 
          opacity: 0; 
          transform: translateY(15px) scale(0.98); 
          filter: blur(8px);
        }
        .fade-in { 
          opacity: 1; 
          transform: translateY(0) scale(1); 
          filter: blur(0);
        }
        
        *, *::before, *::after {
          transition-property: background-color, border-color, color, fill, stroke, left, top, opacity, box-shadow, transform, filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
      `}</style>

      {/* Main Wrapper */}
      <div className="app-container min-h-screen w-full flex flex-col items-center">

        {/* Background Elements */}
        <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
        <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--bg-main)] to-transparent z-20 pointer-events-none"></div>
        <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/80 to-transparent z-20 pointer-events-none"></div>

        {/* Main Content Area */}
        <main className={`w-full max-w-4xl px-4 md:px-6 pt-16 md:pt-24 pb-40 relative z-10 min-h-screen page-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          
          {activeTab === 'Home' && <HomeView />}
          {activeTab === 'Work' && <WorkView />}
          {activeTab === 'Skills' && <SkillsView />}
          {activeTab === 'Projects' && <ProjectsView />}
          {activeTab === 'Settings' && <SettingsView theme={theme} setTheme={setTheme} />}

          {/* Footer */}
          <footer className="mt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-[var(--text-main)] border-t border-[var(--border)] pt-8">
              <div className="flex items-center gap-2">
                <Heart size={14} className="text-[var(--text-muted)] fill-[var(--text-muted)]" />
                <p>Designed & Made with <span className="text-[var(--text-muted)]">💙</span></p>
              </div>
              <p>© 2026 Jawahar. All rights reserved.</p>
          </footer>

        </main>

        {/* Floating Dock Navigation */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-fit animate-in slide-in-from-bottom-10 duration-700">
          <div className="flex items-center justify-center gap-1 sm:gap-1 px-2 py-1.5 rounded-full bg-[var(--bg-card)]/80 backdrop-blur-md border border-[var(--border)] shadow-2xl ring-1 ring-[var(--border)]">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleTabChange(item.name)}
                className={`relative flex flex-col items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 group ${
                  activeTab === item.name 
                    ? 'text-[var(--text-title)]' 
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`}
              >
                <div className={`absolute inset-0 bg-[var(--bg-element)] rounded-full scale-0 transition-transform duration-300 ${activeTab === item.name ? 'scale-100' : 'group-hover:scale-90 opacity-40'}`}></div>
                <span className={`relative z-10 transition-transform duration-300 ${activeTab === item.name ? '-translate-y-1.5 scale-110' : 'group-hover:-translate-y-1'}`}>
                  {item.icon}
                </span>
                <span className={`absolute bottom-0.5 text-[7px] font-medium tracking-wide transition-colors duration-300 opacity-100 ${activeTab === item.name ? 'text-[var(--text-title)]' : 'text-[var(--text-muted)]'}`}>
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// =======================
// === PAGE VIEWS ===
// =======================

// --- 1. HOME PAGE ---
// Desktop diagram coordinates
const steps = [
  { x: 0, y: 20, label: "Canvas" },
  { x: 180, y: 20, label: "Research" },
  { x: 360, y: 20, label: "Concept" },
  { x: 540, y: 20, label: "Wireframe" },
  { x: 540, y: 120, label: "Drafting" },
  { x: 360, y: 120, label: "Styling" },
  { x: 180, y: 120, label: "Refine" },
  { x: 0, y: 120, label: "Deploy" },
];

// Mobile diagram coordinates (scaled to fit small screens)
const mobileSteps = [
  { x: 0, y: 20, label: "Canvas" },
  { x: 96, y: 20, label: "Research" },
  { x: 192, y: 20, label: "Concept" },
  { x: 288, y: 20, label: "Wireframe" },
  { x: 288, y: 120, label: "Drafting" },
  { x: 192, y: 120, label: "Styling" },
  { x: 96, y: 120, label: "Refine" },
  { x: 0, y: 120, label: "Deploy" },
];

const HomeView = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    let start;
    const duration = 12000; 
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = (elapsed % duration) / duration * 100;
      setTimelineProgress(progress);
      requestAnimationFrame(animate);
    };
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length); 
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const currentSegment = useMemo(() => {
    const current = steps[activeStep];
    const next = steps[(activeStep + 1) % steps.length];
    const x1 = current.x + 24;
    const y1 = current.y + 24;
    const x2 = next.x + 24;
    const y2 = next.y + 24;
    return `M ${x1} ${y1} L ${x2} ${y2}`;
  }, [activeStep]);

  const mobileSegment = useMemo(() => {
    const current = mobileSteps[activeStep];
    const next = mobileSteps[(activeStep + 1) % mobileSteps.length];
    const x1 = current.x + 24;
    const y1 = current.y + 24;
    const x2 = next.x + 24;
    const y2 = next.y + 24;
    return `M ${x1} ${y1} L ${x2} ${y2}`;
  }, [activeStep]);

  const contributionData = useMemo(() => {
    return Array.from({ length: 52 }).map((_, weekIndex) => {
      return Array.from({ length: 7 }).map((_, dayIndex) => {
        const isCluster = (weekIndex > 10 && weekIndex < 15) || (weekIndex > 25 && weekIndex < 35) || (weekIndex > 45);
        const baseProb = isCluster ? 0.8 : 0.3;
        const rand = Math.random();
        let level = 'var(--contrib-0)'; 
        if (rand < baseProb) {
            if (rand < 0.1) level = 'var(--contrib-4)';
            else if (rand < 0.3) level = 'var(--contrib-3)';
            else if (rand < 0.6) level = 'var(--contrib-2)';
            else level = 'var(--contrib-1)';
        }
        return level;
      });
    });
  }, []);

  const timelineItems = ['HSC', 'MCA', 'Internship', 'Work'];

  return (
    <div className="flex flex-col gap-16">
      
      {/* Hero & Process Section */}
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left: Bio */}
        <div className="flex-1 space-y-6 min-w-0 w-full">
            <div className="space-y-1">
                <h2 className="text-[var(--text-main)] text-xs font-mono mb-2 flex items-center gap-2">
                    Hey It's me <span className="animate-pulse">👋</span>
                </h2>
                <div className="flex flex-wrap items-baseline gap-3">
                    <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-title)] tracking-tight uppercase font-sans">
                        JAWAHAR
                    </h1>
                    <span className="text-[var(--text-main)] text-xs font-mono">/ @JawaharDev</span>
                </div>
            </div>

            <div className="space-y-4 text-sm leading-7 text-[var(--text-main)] max-w-full">
                <p>
                    Yup! I'm a <strong className="text-[var(--text-title)] font-medium">Full Stack Developer</strong>. Big deal, right? But wait — there's more! 
                    I'm not just any developer, I'm a <strong className="text-[var(--text-title)] font-medium">Master of Computer Applications</strong> student.
                </p>
                <p>
                    And if that wasn't enough, guess what? maybe <strong className="text-[var(--text-title)] font-medium">Freelancer</strong>? 
                    Oh yeah, I've got that badge too!🎖️
                </p>
                <p>
                    I love both <strong className="text-[var(--text-title)] font-medium">Design & Development</strong>. so, That means I can create beautiful 
                    and functional websites. I'm always looking for new opportunities to learn and grow.
                </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
                <SocialPill icon={<Twitter size={14} />} text="Twitter DM" href="https://x.com/Phnxio" />
                <span className="text-xs text-[var(--text-muted)] font-mono">OR</span>
                <SocialPill icon={<Mail size={14} />} text="Email Me" href="mailto:Postboxno184@gmail.com" />
                <SocialPill icon={<Briefcase size={14} />} text="Resume" onClick={handleResumeDownload} />
            </div>

            {/* Process Diagram - mobile (fits screen, separate layout) */}
            <div className="w-full flex justify-center relative pt-2 sm:hidden">
               <div className="relative w-[340px] h-[180px] select-none pointer-events-none">
                  <svg className="absolute inset-0 w-full h-full z-0 overflow-visible">
                      {/* Background Static Path (mobile) */}
                      <path 
                          d="M 24 44 L 312 44 L 312 144 L 24 144 L 24 44" 
                          fill="none" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="6 6"
                      />
                      
                      {/* Active Segment (The Traveling Line) */}
                      <path 
                          key={activeStep} 
                          d={mobileSegment}
                          fill="none" 
                          stroke="var(--text-title)" 
                          strokeWidth="2" 
                          strokeOpacity="0.5"
                          className="draw-line"
                      />
                  </svg>

                  {/* Nodes for mobile */}
                  {mobileSteps.map((step, index) => (
                      <ProcessNode 
                          key={index}
                          label={step.label} 
                          x={step.x} 
                          y={step.y} 
                          active={activeStep === index} 
                          highlight={activeStep === index}
                          icon={
                              index === 0 ? <Layout size={16} className="text-blue-400" /> :
                              index === 1 ? <Search size={16} className="text-pink-400" /> :
                              index === 2 ? <Lightbulb size={16} className="text-yellow-300" /> :
                              index === 3 ? <Frame size={16} className="text-indigo-400" /> :
                              index === 4 ? <PenTool size={16} className="text-purple-400" /> :
                              index === 5 ? <Palette size={16} className="text-orange-400" /> :
                              index === 6 ? <Terminal size={16} className="text-green-400" /> :
                              <Rocket size={16} className="text-red-500" />
                          } 
                      />
                  ))}
               </div>
            </div>

            {/* Process Diagram - desktop / tablet (original layout) */}
            <div className="w-full flex justify-center relative pt-2 hidden sm:flex">
               <div className="relative w-full max-w-[600px] h-[200px] select-none pointer-events-none sm:scale-100 scale-90 origin-top">
                  <svg className="absolute inset-0 w-full h-full z-0 overflow-visible">
                      {/* Background Static Path */}
                      <path 
                          d="M 24 44 L 564 44 L 564 144 L 24 144 L 24 44" 
                          fill="none" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="6 6"
                      />
                      
                      {/* Active Segment (The Traveling Line) */}
                      <path 
                          key={activeStep} 
                          d={currentSegment}
                          fill="none" 
                          stroke="var(--text-title)" 
                          strokeWidth="2" 
                          strokeOpacity="0.5"
                          className="draw-line"
                      />
                  </svg>

                  {/* Nodes with Dark Green Internal Dots */}
                  {steps.map((step, index) => (
                      <ProcessNode 
                          key={index}
                          label={step.label} 
                          x={step.x} 
                          y={step.y} 
                          active={activeStep === index} 
                          highlight={activeStep === index}
                          icon={
                              index === 0 ? <Layout size={16} className="text-blue-400" /> :
                              index === 1 ? <Search size={16} className="text-pink-400" /> :
                              index === 2 ? <Lightbulb size={16} className="text-yellow-300" /> :
                              index === 3 ? <Frame size={16} className="text-indigo-400" /> :
                              index === 4 ? <PenTool size={16} className="text-purple-400" /> :
                              index === 5 ? <Palette size={16} className="text-orange-400" /> :
                              index === 6 ? <Terminal size={16} className="text-green-400" /> :
                              <Rocket size={16} className="text-red-500" />
                          } 
                      />
                  ))}
               </div>
            </div>
        </div>
      </div>

      {/* Contribution Graph */}
      <div className="border border-[var(--border)] bg-[var(--bg-card)] p-5 rounded-2xl">
         <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-2">
                 <Github size={16} className="text-[var(--text-title)]" />
                 <h3 className="text-sm font-medium text-[var(--text-title)]">Contributions</h3>
             </div>
             <span className="text-xs text-[var(--text-muted)] font-mono">Jan - Dec 2025</span>
         </div>
         
         <div className="flex justify-between text-[10px] text-[var(--text-muted)] font-mono uppercase mb-2 px-1">
             <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
         </div>
         
         <div className="w-full overflow-hidden">
            <div className="flex gap-[3px]">
                {contributionData.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[3px]">
                        {week.map((level, dayIndex) => (
                            <div 
                                key={dayIndex} 
                                className="w-3 h-3 rounded-[2px] transition-colors duration-500 hover:scale-110"
                                style={{ backgroundColor: level }}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
         </div>
         
         <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)] pt-3 mt-1 border-t border-[var(--border)]">
             <div className="flex items-center gap-1">
                 <span>Less</span>
                 <div className="flex gap-[2px]">
                     <div className="w-2.5 h-2.5 rounded-[1px]" style={{backgroundColor: 'var(--contrib-0)'}}></div>
                     <div className="w-2.5 h-2.5 rounded-[1px]" style={{backgroundColor: 'var(--contrib-1)'}}></div>
                     <div className="w-2.5 h-2.5 rounded-[1px]" style={{backgroundColor: 'var(--contrib-2)'}}></div>
                     <div className="w-2.5 h-2.5 rounded-[1px]" style={{backgroundColor: 'var(--contrib-3)'}}></div>
                     <div className="w-2.5 h-2.5 rounded-[1px]" style={{backgroundColor: 'var(--contrib-4)'}}></div>
                 </div>
                 <span>More</span>
             </div>
             <span>Total <strong className="text-[var(--text-title)]">3,047</strong> contributions</span>
         </div>
      </div>

      {/* Mini Timeline */}
      <div className="space-y-6">
          <div className="flex justify-between items-center relative py-6">
              {/* Static Background Line */}
              <div className="absolute left-0 right-0 top-1/2 h-px bg-[var(--border)] z-0"></div>
              
              {/* Animated Passing Line */}
              <div 
                className="absolute left-0 top-1/2 h-px bg-[var(--timeline-line)] z-0 transition-all duration-75 ease-linear"
                style={{ width: `${timelineProgress}%` }}
              >
                {/* Moving Head */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-2 bg-[var(--timeline-head)] blur-[2px]"></div>
              </div>

              {timelineItems.map((item, i) => {
                  const triggerPoint = (i / (timelineItems.length - 1)) * 100;
                  const isActive = (timelineProgress >= triggerPoint - 2) && (timelineProgress < triggerPoint + 8);
                  
                  return (
                    <div key={i} className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer">
                        <div 
                            className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                                isActive 
                                    ? 'bg-blue-400 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,1)] scale-125' 
                                    : 'bg-[var(--bg-card)] border-[var(--border)] scale-100'
                            }`}
                        ></div>
                        <span className={`text-[10px] transition-colors duration-500 bg-[var(--bg-main)] px-1 ${
                            isActive ? 'text-blue-300 font-bold' : 'text-[var(--text-muted)]'
                        }`}>
                            {item}
                        </span>
                    </div>
                  );
              })}
              
              <div className="absolute right-0 -top-2 flex items-center gap-1 text-[10px] text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-title)] transition-colors">
                  ALL <ChevronRight size={10} />
              </div>
          </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-6">
         <h3 className="text-sm text-[var(--text-main)]">still not sure? Check out my <span className="text-[var(--text-title)] font-medium">Projects</span></h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ProjectCard 
                title="Urban Waste Overflow" 
                stars="IoT" 
                desc="IoT-Based Garbage Monitoring System using Arduino & Ultrasonic sensors to improve waste management."
                tags={['Arduino', 'Sensors', 'GSM']}
                preview={
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--bg-card)] gap-3">
                        <div className="flex items-center gap-2 text-xl font-bold text-[var(--text-title)]">
                            <Trash2 className="text-green-500" /> Smart Bin
                        </div>
                        <div className="flex gap-2">
                            <span className="h-1.5 w-12 bg-green-500 rounded-full"></span>
                            <span className="h-1.5 w-8 bg-[var(--bg-element)] rounded-full"></span>
                        </div>
                    </div>
                }
            />
            <ProjectCard 
                title="Portfolio" 
                stars="Web" 
                desc="Designed and developed a fully responsive personal portfolio website using React.js."
                tags={['React', 'Tailwind', 'Router']}
                preview={
                    <div className="w-full h-full flex items-end justify-center gap-1 p-8 bg-[var(--bg-card)] opacity-60">
                         {[40, 70, 45, 90, 60, 80].map((h, i) => (
                             <div key={i} className="flex-1 bg-gradient-to-t from-[var(--border)] to-[var(--text-muted)] rounded-t-sm" style={{height: `${h}%`}}></div>
                         ))}
                    </div>
                }
            />
         </div>
      </div>

      {/* Bottom Links */}
      <div className="space-y-4">
         <h3 className="text-sm text-[var(--text-main)]">You can check these <span className="text-[var(--text-title)] font-medium">links</span> if you wish to</h3>
         <div className="flex flex-wrap gap-2">
            <SocialPill icon={<Linkedin size={14}/>} text="LinkedIn" href="https://www.linkedin.com/in/jawahar184/" />
            <SocialPill icon={<Github size={14}/>} text="Github" />
            <SocialPill icon={<Mail size={14}/>} text="Email" href="mailto:Postboxno184@gmail.com" />
         </div>
      </div>
    </div>
  );
};

// --- 2. WORK PAGE ---
const WorkView = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-baseline gap-4 border-b border-[var(--border)] pb-6">
        <h1 className="text-3xl font-mono font-bold text-[var(--text-title)] tracking-tight">Experience</h1>
        <p className="text-sm text-[var(--text-main)] font-mono">My academic & achievement timeline.</p>
      </div>
      <div className="relative space-y-12 pl-0 md:pl-2"> 
        <div className="absolute left-[20px] top-2 bottom-2 w-[1px] bg-[var(--border)] -translate-x-1/2"></div>
        <WorkItem 
           logo={<Briefcase size={20} className="text-cyan-400"/>}
           company="Nutmeg Software Solutions"
           role="BI Analytics Intern"
           type="Internship"
           date="2026"
           location="Remote"
           bullets={[
             "Worked on BI Analytics project",
             "Gained experience in data analysis and visualization"
           ]}
        />
        <WorkItem 
           logo={<div className="font-bold text-lg text-[var(--text-title)]">M</div>}
           company="Adhiyamaan College of Engineering"
           role="Master of Computer Applications"
           type="Pursuing"
           date="2026"
           location="Anna University"
           bullets={["Focusing on advanced programming and software development"]}
        />
        <WorkItem 
           logo={<div className="font-bold text-lg text-blue-400">B</div>}
           company="M.G.R. College of Arts and Science"
           role="Bachelor of Computer Applications"
           type="6.43 CGPA"
           date="2024"
           location="Periyar University"
           bullets={["Gained strong foundation in computer science principles"]}
        />
        <WorkItem 
           logo={<Award size={20} className="text-yellow-400"/>}
           company="Hackathons"
           role="Active Participant"
           type="Various"
           date="2024 - 2025"
           location="Multiple Locations"
           bullets={[
             "Participated in EXPLOIT-X KPR CTF (Apr 2025)",
             "Participated in OPENHACK 2025 at IISc Bangalore (Feb 2025)",
             "Participated in RASCADE Contest at VIT Chennai (Nov 2024)",
             "Participated in IDEA HACKATHON at Park College (Oct 2024)"
           ]}
        />
        <WorkItem 
           logo={<Presentation size={20} className="text-purple-400"/>}
           company="Conference"
           role="Paper Presenter"
           type="ICGTAE 2024"
           date="Oct 2024"
           location="Theni, Tamil Nadu"
           bullets={["Presented paper on 'Enhancing Learning Environments With AI-Driven Classroom'", "International Conference on Generative Technologies in Analytical Era"]}
        />
      </div>
    </div>
  );
};

// --- 3. SKILLS PAGE ---
const SkillsView = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="space-y-4">
         <h1 className="text-3xl font-mono font-bold text-[var(--text-title)]">Skills <span className="text-sm text-[var(--text-main)] font-normal ml-2">My technical expertise</span></h1>
         <div className="text-sm leading-8 text-[var(--text-main)] border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)]">
            My main Tech stack is <TechPill icon={<Atom size={14}/>} name="React.js" color="cyan" /> framework with <TechPill icon={<Cloud size={14}/>} name="Tailwind CSS" color="blue" /> as a styling library.
            For the database I use <TechPill icon={<Database size={14}/>} name="Postgres" color="blue" /> deployed on <TechPill icon={<Database size={14}/>} name="MongoDB" color="green" /> with <TechPill icon={<CloudLightning size={14}/>} name="Drizzle ORM" color="yellow" />.
            For database management I use <TechPill icon={<Database size={14}/>} name="DataGrip" color="purple" />.
            <br />
            At last, but not least, I use <TechPill icon={<Code size={14}/>} name="VS Code" color="white" /> IDE for creating awesome projects.
         </div>
       </div>
       <SkillCategory title="<CORE/>">
          <SkillPill name="JavaScript" color="yellow" icon={<FileJson size={14} />} />
          <SkillPill name="TypeScript" color="blue" icon={<FileCode size={14} />} />
          <SkillPill name="HTML" color="orange" icon={<Code size={14} />} />
          <SkillPill name="CSS" color="blue" icon={<Layout size={14} />} />
          <SkillPill name="SQL" color="yellow" icon={<Database size={14} />} />
          <SkillPill name="Postgres" color="blue" icon={<Database size={14} />} />
          <SkillPill name="MongoDB" color="green" icon={<Leaf size={14} />} />
          <SkillPill name="SVG Animation" color="purple" icon={<Code size={14} />} />
       </SkillCategory>
       <SkillCategory title="<FRAMEWORKS/>">
          <SkillPill name="React.js" color="cyan" icon={<Atom size={14} />} />
          <SkillPill name="Next.js" color="white" icon={<Atom size={14} />} />
          <SkillPill name="LiquidJS" color="green" icon={<Code size={14} />} />
          <SkillPill name="Express.js" color="green" icon={<Server size={14} />} />
          <SkillPill name="Tailwind CSS" color="cyan" icon={<Cloud size={14} />} />
          <SkillPill name="TankStack Query" color="orange" icon={<Code size={14} />} />
          <SkillPill name="Motion.dev" color="purple" icon={<Rocket size={14} />} />
          <SkillPill name="GSAP" color="green" icon={<Rocket size={14} />} />
          <SkillPill name="React Email" color="blue" icon={<Mail size={14} />} />
          <SkillPill name="BetterAuth" color="red" icon={<Code size={14} />} />
       </SkillCategory>
       <SkillCategory title="<TOOLS/>">
          <SkillPill name="Drizzle" color="green" icon={<CloudLightning size={14} />} />
          <SkillPill name="Prisma" color="purple" icon={<Database size={14} />} />
          <SkillPill name="NeonDB" color="cyan" icon={<Database size={14} />} />
          <SkillPill name="MySQL" color="blue" icon={<Database size={14} />} />
          <SkillPill name="MongoDB" color="green" icon={<Leaf size={14} />} />
       </SkillCategory>
       <SkillCategory title="<PLATFORMS/>">
          <SkillPill name="GitHub" color="white" icon={<Github size={14} />} />
          <SkillPill name="Vercel" color="white" icon={<Triangle size={14} />} />
          <SkillPill name="Ubuntu" color="orange" icon={<Server size={14} />} />
          <SkillPill name="Cloudflare" color="orange" icon={<Cloud size={14} />} />
       </SkillCategory>
       <SkillCategory title="<SOFTWARES/>">
          <SkillPill name="Cursor" color="white" icon={<Command size={14} />} />
          <SkillPill name="DataGrip" color="green" icon={<Database size={14} />} />
          <SkillPill name="Postman" color="orange" icon={<Mail size={14} />} />
          <SkillPill name="Figma" color="purple" icon={<Layout size={14} />} />
          <SkillPill name="Photoshop" color="blue" icon={<Palette size={14} />} />
       </SkillCategory>
       <SkillCategory title="<DEV OPS/>">
          <SkillPill name="Gitlab" color="cyan" icon={<Code size={14} />} />
          <SkillPill name="GitHub Actions (CI/CD)" color="yellow" icon={<Github size={14} />} />
       </SkillCategory>
    </div>
  );
};

// --- 4. PROJECTS PAGE ---
const ProjectsView = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="flex items-baseline gap-4 border-b border-[var(--border)] pb-6">
        <h1 className="text-3xl font-mono font-bold text-[var(--text-title)] tracking-tight">Projects</h1>
        <p className="text-sm text-[var(--text-main)] font-mono">Academic & personal projects.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
         <ProjectCard 
            title="Urban Waste Overflow" 
            stars="IoT" 
            desc="IoT-Based Garbage Monitoring System using Arduino & Ultrasonic sensors to improve waste management."
            tags={['Arduino', 'Sensors', 'GSM']}
            preview={
                <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--bg-card)] gap-3">
                    <div className="flex items-center gap-2 text-xl font-bold text-[var(--text-title)]">
                        <Trash2 className="text-green-500" /> Smart Bin
                    </div>
                    <div className="flex gap-2">
                        <span className="h-1.5 w-12 bg-green-500 rounded-full"></span>
                        <span className="h-1.5 w-8 bg-[var(--bg-element)] rounded-full"></span>
                    </div>
                </div>
            }
        />
        <ProjectCard 
            title="Portfolio" 
            stars="Web" 
            desc="Designed and developed a fully responsive personal portfolio website using React.js."
            tags={['React', 'Tailwind', 'Router']}
            preview={
                <div className="w-full h-full flex items-end justify-center gap-1 p-8 bg-[var(--bg-card)] opacity-60">
                     {[40, 70, 45, 90, 60, 80].map((h, i) => (
                         <div key={i} className="flex-1 bg-gradient-to-t from-[var(--border)] to-[var(--text-muted)] rounded-t-sm" style={{height: `${h}%`}}></div>
                     ))}
                </div>
            }
        />
        <ProjectCard
            title="Task Management"
            stars="ACE"
            desc="A comprehensive task management system for ACE College to streamline administrative and student tasks."
            tags={['React', 'Node.js', 'MySQL']}
            preview={
                <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--bg-card)] gap-2 relative overflow-hidden">
                    <div className="w-3/4 h-2 rounded bg-[var(--text-muted)] opacity-20"></div>
                    <div className="w-3/4 h-2 rounded bg-[var(--text-muted)] opacity-20"></div>
                    <div className="w-1/2 h-2 rounded bg-blue-500/50"></div>
                    <CheckSquare className="text-blue-500 absolute bottom-4 right-4" size={24} />
                    {/* Decorative Element */}
                    <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-blue-500/20"></div>
                </div>
            }
        />
        <ProjectCard
            title="Nutmeg BI Tool"
            stars="Intern"
            desc="Business Intelligence tool developed for Nutmeg Software Solutions to visualize complex data analytics."
            tags={['React', 'D3.js', 'Analytics']}
            preview={
                <div className="w-full h-full flex items-end justify-center gap-1 p-6 bg-[var(--bg-card)] opacity-90 relative">
                     <div className="w-3 bg-cyan-500/40 h-6 rounded-t-sm"></div>
                     <div className="w-3 bg-cyan-500/60 h-10 rounded-t-sm"></div>
                     <div className="w-3 bg-cyan-500 h-14 rounded-t-sm"></div>
                     <div className="w-3 bg-cyan-500/50 h-8 rounded-t-sm"></div>
                     <PieChart className="text-cyan-400 absolute top-3 right-3" size={20} />
                </div>
            }
        />
      </div>
    </div>
  );
};

// --- 5. SETTINGS PAGE ---
const SettingsView = ({ theme, setTheme }) => {
  const [density, setDensity] = useState('comfortable');
  const [reduceMotion, setReduceMotion] = useState(false);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 border-b border-[var(--border)] pb-6">
        <h1 className="text-3xl font-mono font-bold text-[var(--text-title)] tracking-tight">Settings</h1>
        <p className="text-sm text-[var(--text-main)] font-mono">Tune the interface to match your workflow.</p>
      </div>
      <div className="space-y-8">
        {/* Appearance */}
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-bold text-[var(--text-title)] uppercase tracking-wider">Appearance</h2>
            <span className="text-[11px] font-mono text-[var(--text-muted)]">Current theme: {theme === 'dark' ? 'Dark' : 'Light'}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button 
              onClick={() => setTheme('light')}
              className={`group relative p-4 rounded-xl border-2 transition-all duration-300 text-left flex items-center gap-4 ${theme === 'light' ? 'border-[var(--selected-control)] bg-[var(--bg-card)]' : 'border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)]'}`}
            >
              <div className="w-12 h-12 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[#e2e8f0]">
                <Sun size={20} className="text-orange-500" />
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-title)]">Light Mode</h3>
                <p className="text-xs text-[var(--text-main)]">Clean and bright</p>
              </div>
              {theme === 'light' && (
                <div className="absolute top-4 right-4">
                  <CheckCircle size={18} fill="currentColor" className="text-[var(--selected-control)]" />
                </div>
              )}
            </button>
            <button 
              onClick={() => setTheme('dark')}
              className={`group relative p-4 rounded-xl border-2 transition-all duration-300 text-left flex items-center gap-4 ${theme === 'dark' ? 'border-[var(--selected-control)] bg-[var(--bg-card)]' : 'border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)]'}`}
            >
              <div className="w-12 h-12 rounded-full bg-[#111827] flex items-center justify-center border border-[#374151]">
                <Moon size={20} className="text-indigo-400" />
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-title)]">Dark Mode</h3>
                <p className="text-xs text-[var(--text-main)]">Sleek and easy on the eyes</p>
              </div>
              {theme === 'dark' && (
                <div className="absolute top-4 right-4">
                  <CheckCircle size={18} fill="currentColor" className="text-[var(--selected-control)]" />
                </div>
              )}
            </button>
          </div>
        </section>
        {/* Layout & UX */}
        <section className="pt-6 border-t border-[var(--border)] space-y-4">
           <h2 className="text-sm font-bold text-[var(--text-title)] uppercase tracking-wider">Layout & UX</h2>
           <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl divide-y divide-[var(--border)]">
              <div className="p-4 flex items-center justify-between">
                 <div className="flex flex-col gap-1">
                    <span className="text-sm text-[var(--text-title)]">Content density</span>
                    <span className="text-[11px] text-[var(--text-muted)]">Adjust padding and spacing.</span>
                 </div>
                 <div className="inline-flex items-center gap-1 rounded-full bg-[var(--bg-element)] border border-[var(--border)] p-1 text-[11px]">
                   <button
                     type="button"
                     onClick={() => setDensity('comfortable')}
                     className={`px-2 py-0.5 rounded-full transition-colors ${
                       density === 'comfortable'
                         ? 'bg-[var(--bg-card)] text-[var(--text-title)]'
                         : 'text-[var(--text-muted)] hover:text-[var(--text-title)] hover:bg-[var(--bg-card)]'
                     }`}
                   >
                     Comfortable
                   </button>
                   <button
                     type="button"
                     onClick={() => setDensity('compact')}
                     className={`px-2 py-0.5 rounded-full transition-colors ${
                       density === 'compact'
                         ? 'bg-[var(--bg-card)] text-[var(--text-title)]'
                         : 'text-[var(--text-muted)] hover:text-[var(--text-title)] hover:bg-[var(--bg-card)]'
                     }`}
                   >
                     Compact
                   </button>
                 </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                 <div className="flex flex-col gap-1">
                    <span className="text-sm text-[var(--text-title)]">Reduce motion</span>
                    <span className="text-[11px] text-[var(--text-muted)]">Limit animations and transitions.</span>
                 </div>
                 <button
                   type="button"
                   onClick={() => setReduceMotion(prev => !prev)}
                   className={`w-9 h-5 rounded-full border relative transition-colors ${
                     reduceMotion
                       ? 'bg-green-600/40 border-green-500'
                       : 'bg-[var(--bg-element)] border-[var(--border)]'
                   }`}
                 >
                    <div
                      className={`absolute top-0.5 w-3 h-3 rounded-full transition-transform ${
                        reduceMotion ? 'translate-x-4 bg-green-400' : 'translate-x-0.5 bg-[var(--text-muted)]'
                      }`}
                    ></div>
                 </button>
              </div>
           </div>
        </section>
        {/* General */}
        <section className="pt-6 border-t border-[var(--border)] space-y-4">
           <h2 className="text-sm font-bold text-[var(--text-title)] uppercase tracking-wider">General</h2>
           <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl divide-y divide-[var(--border)]">
              <div className="p-4 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <Globe size={18} className="text-[var(--text-main)]" />
                    <span className="text-sm text-[var(--text-title)]">Language</span>
                 </div>
                 <span className="text-xs text-[var(--text-muted)]">English (US)</span>
              </div>
              <div className="p-4 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <VolumeIcon />
                    <span className="text-sm text-[var(--text-title)]">Sound Effects</span>
                 </div>
                 <div className="w-8 h-4 bg-[var(--bg-element)] rounded-full border border-[var(--border)] relative">
                    <div className="absolute left-0.5 top-0.5 w-2.5 h-2.5 bg-[var(--text-muted)] rounded-full"></div>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

const VolumeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-main)]"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
);

// =======================
// === HELPER COMPONENTS ===
// =======================

const SocialPill = ({ icon, text, href, onClick }) => {
  const classes = "flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-card)] hover:bg-[var(--bg-element)] border border-[var(--border)] rounded-lg text-[11px] text-[var(--text-main)] hover:text-[var(--text-title)] transition-all hover:scale-105 active:scale-95";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {icon}
        <span className="font-medium">{text}</span>
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {icon}
      <span className="font-medium">{text}</span>
    </button>
  );
};
// Resume download handler
function handleResumeDownload() {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const ProcessNode = ({ label, x, y, active, highlight, icon }) => (
    <div 
        className="absolute flex flex-col"
        style={{ left: x, top: y }}
    >
        <div className="absolute -top-6 left-0 right-0 text-center">
            <span className={`text-[9px] uppercase tracking-[0.15em] font-mono transition-colors duration-300 ${active ? 'text-[var(--text-title)]' : 'text-[var(--text-muted)]'}`}>{label}</span>
        </div>
        
        <div 
            className={`
                w-12 h-12 rounded-[14px] flex items-center justify-center relative backdrop-blur-sm transition-colors duration-300 border
                ${active ? 'bg-[var(--bg-card)] border-[var(--text-title)]' : 'bg-[var(--bg-main)] border-[var(--border)]'} 
            `}
        >
            <div className={`transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-40'}`}>
                {icon}
            </div>
            <div 
              className={`
                absolute top-2 right-2 w-1.5 h-1.5 rounded-full transition-all duration-300
                ${active ? 'bg-green-600 shadow-[0_0_8px_rgba(22,163,74,0.8)] opacity-100 scale-100' : 'bg-[var(--text-muted)] opacity-50'}
              `}
            ></div>
        </div>
    </div>
);

const WorkItem = ({ logo, company, role, type, date, location, bullets }) => (
    <div className="relative pl-12 group">
        <div className="absolute left-[20px] top-3 w-4 h-4 bg-[var(--bg-main)] border-2 border-[var(--border)] rounded-full z-10 group-hover:border-[var(--text-title)] transition-colors -translate-x-1/2"></div>
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center">
                    {logo}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-[var(--text-title)] leading-none">{company}</h3>
                    <span className="text-xs text-[var(--text-main)] bg-[var(--bg-card)] px-1.5 py-0.5 rounded ml-2 align-middle border border-[var(--border)]">{type}</span>
                </div>
            </div>
            <div className="text-right">
                <div className="text-xs text-[var(--text-title)] font-mono">{date}</div>
                <div className="text-[10px] text-[var(--text-muted)] font-mono">{location}</div>
            </div>
        </div>
        <div className="text-sm font-medium text-[var(--text-main)] mb-3">{role}</div>
        <ul className="space-y-2">
            {bullets.map((bullet, i) => (
                <li key={i} className="text-xs text-[var(--text-muted)] leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--text-main)]">
                    {bullet}
                </li>
            ))}
        </ul>
    </div>
);

const ProjectCard = ({ title, stars, desc, tags, preview }) => (
    <div className="group border border-[var(--border)] bg-[var(--bg-card)] p-1 rounded-xl hover:border-[var(--border-hover)] transition-colors">
        <div className="h-40 w-full bg-[var(--bg-main)] rounded-lg overflow-hidden mb-3 relative border border-[var(--border)]">
            <div className="absolute inset-0 flex items-center justify-center">
                {preview}
            </div>
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[var(--border)]"></div>
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[var(--border)]"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[var(--border)]"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[var(--border)]"></div>
        </div>
        <div className="px-2 pb-2">
            <div className="flex justify-between items-center mb-1">
                <h3 className="text-sm font-bold text-[var(--text-title)]">{title}</h3>
                <div className="flex items-center gap-1 text-[10px] text-yellow-600">
                    <Star size={10} fill="currentColor" />
                    <span>{stars}</span>
                </div>
            </div>
            <p className="text-[11px] text-[var(--text-main)] leading-relaxed line-clamp-2 mb-3">{desc}</p>
        </div>
    </div>
);

const TechPill = ({ icon, name, color }) => {
    const colors = {
        white: "text-[var(--text-title)]",
        cyan: "text-cyan-500",
        blue: "text-blue-500",
        green: "text-green-500",
        yellow: "text-yellow-500",
        orange: "text-orange-500",
        purple: "text-purple-500",
        red: "text-red-500",
    };
    return (
        <span className="inline-flex items-center gap-2 px-3 py-1.5 mx-1 bg-[var(--bg-element)] rounded-lg border border-[var(--border)] align-middle transform -translate-y-0.5 hover:border-[var(--border-hover)] transition-colors">
            <span className={colors[color] || "text-[var(--text-title)]"}>{icon}</span>
            <span className="text-xs text-[var(--text-main)] font-medium">{name}</span>
        </span>
    );
}

const SkillCategory = ({ title, children }) => (
    <div className="space-y-3">
        <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">{title}</h4>
        <div className="flex flex-wrap gap-2">
            {children}
        </div>
    </div>
);

const SkillPill = ({ name, color, icon }) => {
     const dotColors = {
        yellow: "text-yellow-500",
        blue: "text-blue-500",
        orange: "text-orange-500",
        green: "text-green-500",
        cyan: "text-cyan-500",
        white: "text-[var(--text-title)]",
        purple: "text-purple-500",
        red: "text-red-500",
    };
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg hover:border-[var(--border-hover)] transition-colors cursor-default">
            <span className={`w-3.5 h-3.5 ${dotColors[color] || 'text-[var(--text-muted)]'}`}>{icon}</span>
            <span className="text-xs text-[var(--text-main)] font-medium">{name}</span>
        </div>
    );
};

export default App;
