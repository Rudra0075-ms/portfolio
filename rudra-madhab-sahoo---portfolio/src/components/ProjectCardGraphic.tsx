import React from 'react';

interface ProjectCardGraphicProps {
  id: string;
}

export const ProjectCardGraphic: React.FC<ProjectCardGraphicProps> = ({ id }) => {
  switch (id) {
    case 'student-management-system':
      return <div className="h-32 w-full bg-[#080d18] p-3 font-mono text-[10px] border-b border-white/10">
        <div className="flex justify-between text-slate-300"><span>● STUDENT PORTAL</span><span className="text-emerald-400">Django · SQLite</span></div>
        <div className="mt-3 grid grid-cols-[1fr_1.4fr] gap-2">
          <div className="rounded-lg border border-indigo-400/20 bg-indigo-500/10 p-2 space-y-2"><div className="h-1.5 w-3/4 rounded bg-indigo-300/60"/><div className="h-1.5 w-full rounded bg-white/10"/><div className="h-1.5 w-4/5 rounded bg-white/10"/><div className="rounded bg-indigo-400/20 px-2 py-1 text-center text-indigo-200">Dashboard</div></div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2"><div className="mb-1 text-slate-400">Student records</div>{['Aarav · CSE','Diya · AIML','Kabir · ECE'].map((x,i)=><div key={x} className="border-t border-white/5 py-1 text-slate-300"><span className={i===1?'text-violet-400':'text-cyan-400'}>● </span>{x}</div>)}</div>
        </div><div className="mt-2 h-px w-1/3 bg-indigo-400 transition-all duration-700 group-hover:translate-x-full"/>
      </div>;

    case 'face-recognition-attendance':
      return <div className="h-32 w-full bg-[#070d14] p-3 font-mono text-[10px] border-b border-white/10">
        <div className="flex justify-between text-slate-300"><span>◉ WEBCAM INPUT</span><span className="text-emerald-400">OpenCV</span></div>
        <div className="relative mx-auto mt-2 flex h-[68px] w-28 items-center justify-center rounded-lg border border-cyan-400/30 bg-gradient-to-br from-cyan-950 to-slate-900"><div className="h-11 w-9 rounded-[45%] border border-cyan-300/70 bg-cyan-300/10"/><div className="absolute left-9 top-3 h-9 w-9 border border-emerald-400/80 transition-all group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(52,211,153,0.5)]"><span className="absolute -top-2 text-[8px] text-emerald-300">FACE_01</span></div><div className="absolute inset-x-2 top-0 h-px bg-cyan-300 shadow-[0_0_8px_2px_rgba(34,211,238,0.5)] animate-pulse"/></div>
        <div className="mt-1 flex justify-between text-[9px] text-slate-400"><span>Recognition preview</span><span className="text-emerald-400">Attendance → SQLite</span></div>
      </div>;

    case 'email-extractor':
      return <div className="h-32 w-full bg-[#0b0c16] p-3 font-mono text-[10px] border-b border-white/10">
        <div className="flex justify-between text-slate-300"><span>✉ EMAIL EXTRACTOR</span><span className="text-violet-300">Python · Regex</span></div>
        <div className="mt-2 rounded-md border border-white/10 bg-black/30 p-2 leading-5"><div className="text-slate-500">input.txt</div><div className="text-slate-300">Contact <span className="text-cyan-300">hello@example.com</span></div><div className="text-slate-300">Support <span className="text-cyan-300">help@demo.in</span></div><div className="text-slate-500">Duplicate removed ✓</div></div>
        <div className="mt-2 flex gap-2"><span className="text-violet-300">OUTPUT</span><span className="rounded bg-emerald-400/10 px-2 text-emerald-300 group-hover:bg-emerald-400/20">2 unique emails saved</span></div>
      </div>;

    case 'hangman-game':
      return <div className="h-32 w-full bg-[#100d1b] p-3 font-mono text-[10px] border-b border-white/10">
        <div className="flex justify-between text-slate-300"><span>⌁ WORD GUESS CHALLENGE</span><span className="text-amber-300">PYTHON GAME</span></div>
        <div className="mt-2 flex h-[70px] items-center justify-center gap-4"><svg viewBox="0 0 76 70" className="h-16 w-16 text-violet-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 64h58M20 64V7h35v9M55 16v7"/><circle cx="55" cy="29" r="7" className="transition-colors group-hover:stroke-amber-300"/><path d="M55 36v17m0-11-10 8m10-8 9 8m-9 3-8 11m8-11 8 11" className="opacity-70 group-hover:opacity-100"/></svg>
          <div className="space-y-2"><div className="flex gap-1 text-base font-bold text-white">{['P','Y','_','H','_','N'].map((x,i)=><span key={i} className="border-b-2 border-violet-400 px-1">{x}</span>)}</div><div className="text-slate-400">Wrong attempts: <span className="text-amber-300">2 / 6</span></div><div className="text-emerald-300">P · Y · ?</div></div></div>
      </div>;

    case 'python-mini-projects':
      return <div className="h-32 w-full bg-[#0a1018] p-3 font-mono text-[10px] border-b border-white/10">
        <div className="flex justify-between text-slate-300"><span>PYTHON LAB</span><span className="text-cyan-300">PROJECT COLLECTION</span></div>
        <div className="mt-3 grid grid-cols-3 gap-2">{[{icon:'♟',label:'Chess',color:'violet'},{icon:'▤',label:'Image → PDF',color:'cyan'},{icon:'◎',label:'OpenCV',color:'emerald'}].map(x=><div key={x.label} className={`rounded-lg border border-${x.color}-400/20 bg-${x.color}-500/10 p-2 text-center transition-transform duration-300 group-hover:-translate-y-1`}><div className="text-xl text-slate-200">{x.icon}</div><div className="mt-1 text-slate-300">{x.label}</div></div>)}</div>
        <div className="mt-2 text-center text-slate-500">Small builds · Practical Python</div>
      </div>;

    case 'python-daily':
      return <div className="h-32 w-full bg-[#0b101b] p-3 font-mono text-[10px] border-b border-white/10">
        <div className="flex justify-between text-slate-300"><span>PYTHON DAILY TRACKER</span><span className="text-emerald-300">PRACTICE MODE</span></div>
        <div className="mt-3 grid grid-cols-7 gap-1">{Array.from({length:21},(_,i)=><div key={i} className={`h-5 rounded-sm border border-white/5 transition-all duration-300 group-hover:scale-105 ${[1,2,4,5,8,9,10,12,14,15,18].includes(i)?'bg-emerald-400/70':'bg-white/5'}`}/>)}</div>
        <div className="mt-2 flex justify-between text-slate-400"><span>Loops · OOP · Files · CSV</span><span className="text-emerald-300">Keep building ↗</span></div>
      </div>;

    case 'real-world-ai-agent':
      return (
        <div className="h-32 w-full bg-slate-900 dark:bg-[#070a0f] p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-200 dark:border-white/10 font-mono text-[11px]">
          <div className="flex items-center justify-between text-indigo-400">
            <span className="flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              LangGraph State Graph
            </span>
            <span className="text-[10px] text-slate-500">Autonomous Cycle</span>
          </div>
          <div className="flex items-center justify-between gap-1 text-[10px]">
            <div className="p-1.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300">
              User Goal
            </div>
            <span className="text-slate-600">→</span>
            <div className="p-1.5 rounded bg-violet-950/60 border border-violet-500/30 text-violet-300">
              Agent Loop
            </div>
            <span className="text-slate-600">→</span>
            <div className="p-1.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
              Vector / Tools
            </div>
          </div>
          <div className="text-[10px] text-slate-400 truncate">
            status: <span className="text-emerald-400">exploring retrieval & tool execution</span>
          </div>
        </div>
      );

    case 'portfolio-website':
      return (
        <div className="h-32 w-full bg-slate-900 dark:bg-[#070a0f] p-3 flex flex-col justify-between border-b border-slate-200 dark:border-white/10 font-mono">
          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <span className="text-[10px] text-indigo-400">rudra0075-ms.github.io/portfolio</span>
          </div>
          <div className="space-y-1 text-[10px] text-slate-400">
            <div className="h-2 w-3/4 bg-indigo-500/20 rounded" />
            <div className="h-2 w-1/2 bg-slate-700/40 rounded" />
            <div className="grid grid-cols-3 gap-1 pt-1">
              <div className="h-5 bg-white/5 rounded border border-white/10" />
              <div className="h-5 bg-white/5 rounded border border-white/10" />
              <div className="h-5 bg-white/5 rounded border border-white/10" />
            </div>
          </div>
          <div className="text-[10px] text-emerald-400 flex items-center justify-between">
            <span>Dark / Light Theme</span>
            <span>CNAME Active</span>
          </div>
        </div>
      );

    case 'fitness-guide':
      return (
        <div className="h-32 w-full bg-slate-900 dark:bg-[#070a0f] p-3 flex flex-col justify-between border-b border-slate-200 dark:border-white/10 font-mono">
          <div className="flex items-center justify-between text-[11px] text-emerald-400 font-semibold">
            <span>Lifestyle & Nutrition Guide</span>
            <span className="text-[10px] text-slate-500">HTML · CSS · JS</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="p-1.5 rounded bg-emerald-950/40 border border-emerald-500/20 text-emerald-300">
              <div className="font-bold">Diet</div>
              <div className="text-[9px] text-slate-400">Balanced</div>
            </div>
            <div className="p-1.5 rounded bg-sky-950/40 border border-sky-500/20 text-sky-300">
              <div className="font-bold">Routine</div>
              <div className="text-[9px] text-slate-400">Daily Plan</div>
            </div>
            <div className="p-1.5 rounded bg-amber-950/40 border border-amber-500/20 text-amber-300">
              <div className="font-bold">Hydrate</div>
              <div className="text-[9px] text-slate-400">Track Water</div>
            </div>
          </div>
          <div className="text-[10px] text-slate-400 flex justify-between">
            <span>Healthy Lifestyle Habit Guide</span>
            <span className="text-indigo-400">Interactive</span>
          </div>
        </div>
      );

    case 'currency-converter':
      return (
        <div className="h-32 w-full bg-slate-900 dark:bg-[#070a0f] p-3 flex flex-col justify-between border-b border-slate-200 dark:border-white/10 font-mono text-[11px]">
          <div className="flex items-center justify-between text-emerald-400">
            <span className="font-semibold">CurrencyAPI Integration</span>
            <span className="text-[10px] text-slate-500">Python 3</span>
          </div>
          <div className="flex items-center justify-center gap-3 py-1">
            <span className="px-2 py-1 rounded bg-slate-800 border border-white/10 text-white font-bold text-xs">
              USD
            </span>
            <span className="text-emerald-400 font-bold">⇄</span>
            <span className="px-2 py-1 rounded bg-slate-800 border border-white/10 text-white font-bold text-xs">
              INR
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-[10px] text-slate-300">Real-Time Rate</span>
          </div>
          <div className="text-[10px] text-slate-400 flex justify-between">
            <span>Dynamic Exchange Computation</span>
            <span className="text-emerald-400">API Connected</span>
          </div>
        </div>
      );

    case 'all-in-one-calculator':
      return (
        <div className="h-32 w-full bg-slate-900 dark:bg-[#070a0f] p-3 flex flex-col justify-between border-b border-slate-200 dark:border-white/10 font-mono">
          <div className="flex items-center justify-between text-[11px] text-slate-300">
            <span className="text-indigo-400 font-semibold">Scientific & Standard</span>
            <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">Eval Logic</span>
          </div>
          <div className="bg-slate-950 p-1.5 rounded border border-white/5 text-right text-xs font-mono text-emerald-400">
            sin(45°) + 25.4 × 8 = 203.907
          </div>
          <div className="grid grid-cols-4 gap-1 text-center text-[10px] text-slate-400">
            <div className="p-0.5 bg-white/5 rounded">sin</div>
            <div className="p-0.5 bg-white/5 rounded">cos</div>
            <div className="p-0.5 bg-white/5 rounded">√x</div>
            <div className="p-0.5 bg-indigo-500/20 text-indigo-300 rounded font-bold">=</div>
          </div>
        </div>
      );

    case 'age-calculator':
      return (
        <div className="h-32 w-full bg-slate-900 dark:bg-[#070a0f] p-3 flex flex-col justify-between border-b border-slate-200 dark:border-white/10 font-mono text-[11px]">
          <div className="flex items-center justify-between text-amber-400">
            <span className="font-semibold">Exact Chronological Delta</span>
            <span className="text-[10px] text-slate-500">Python</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
            <div className="p-1.5 rounded bg-slate-800 border border-white/10">
              <div className="text-slate-400 text-[9px]">Years</div>
              <div className="font-bold text-white">YY</div>
            </div>
            <div className="p-1.5 rounded bg-slate-800 border border-white/10">
              <div className="text-slate-400 text-[9px]">Months</div>
              <div className="font-bold text-white">MM</div>
            </div>
            <div className="p-1.5 rounded bg-slate-800 border border-white/10">
              <div className="text-slate-400 text-[9px]">Days</div>
              <div className="font-bold text-white">DD</div>
            </div>
          </div>
          <div className="text-[10px] text-slate-400">
            Accounts for leap years & varying month lengths
          </div>
        </div>
      );

    case 'analog-watch':
      return (
        <div className="h-32 w-full bg-slate-900 dark:bg-[#070a0f] p-3 flex items-center justify-between border-b border-slate-200 dark:border-white/10 font-mono">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full border-2 border-indigo-500/40 bg-slate-950 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 z-10" />
              {/* Hour hand */}
              <div className="absolute w-0.5 h-4 bg-white -top-1 origin-bottom rotate-45 rounded" />
              {/* Minute hand */}
              <div className="absolute w-0.5 h-6 bg-indigo-400 -top-3 origin-bottom rotate-120 rounded" />
              {/* Second hand */}
              <div className="absolute w-px h-7 bg-rose-500 -top-3.5 origin-bottom rotate-[220deg]" />
            </div>
            <div className="text-xs space-y-1">
              <div className="text-white font-semibold">IST Live Sync</div>
              <div className="text-[10px] text-slate-400">CSS Rotations</div>
              <div className="text-[10px] text-emerald-400">Continuous Ticks</div>
            </div>
          </div>
          <div className="text-right text-[10px] text-slate-500">
            <div>360° Math</div>
            <div>Pure JS/CSS</div>
          </div>
        </div>
      );

    case 'memory-card-game':
      return (
        <div className="h-32 w-full bg-slate-900 dark:bg-[#070a0f] p-3 flex flex-col justify-between border-b border-slate-200 dark:border-white/10 font-mono">
          <div className="flex items-center justify-between text-[11px] text-violet-400 font-semibold">
            <span>Card Match Logic</span>
            <span className="text-[10px] text-slate-500">Moves & Timer</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            <div className="h-8 rounded bg-indigo-900/60 border border-indigo-400/40 flex items-center justify-center text-xs font-bold text-white">
              ★
            </div>
            <div className="h-8 rounded bg-slate-800 border border-white/10 flex items-center justify-center text-xs text-slate-500">
              ?
            </div>
            <div className="h-8 rounded bg-indigo-900/60 border border-indigo-400/40 flex items-center justify-center text-xs font-bold text-white">
              ★
            </div>
            <div className="h-8 rounded bg-slate-800 border border-white/10 flex items-center justify-center text-xs text-slate-500">
              ?
            </div>
          </div>
          <div className="text-[10px] text-emerald-400 flex justify-between">
            <span>Pair Matched!</span>
            <span className="text-slate-400">Fisher-Yates Shuffle</span>
          </div>
        </div>
      );

    case 'to-do-list':
      return (
        <div className="h-32 w-full bg-slate-900 dark:bg-[#070a0f] p-3 flex flex-col justify-between border-b border-slate-200 dark:border-white/10 font-mono text-[11px]">
          <div className="flex items-center justify-between text-indigo-400 font-semibold">
            <span>Task State Manager</span>
            <span className="text-[10px] text-slate-500">Filter: Active / Done</span>
          </div>
          <div className="space-y-1.5 text-[10px]">
            <div className="flex items-center gap-2 line-through text-slate-500">
              <span className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 text-[8px]">✓</span>
              <span>Complete Python project logic</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <span className="w-3 h-3 rounded border border-slate-500" />
              <span>Explore LangGraph memory graphs</span>
            </div>
          </div>
          <div className="text-[10px] text-slate-400 flex justify-between">
            <span>Vanilla JS DOM Ops</span>
            <span className="text-emerald-400">Fast & Zero Bloat</span>
          </div>
        </div>
      );

    case 'pounds-to-kg':
      return (
        <div className="h-32 w-full bg-slate-900 dark:bg-[#070a0f] p-3 flex flex-col justify-between border-b border-slate-200 dark:border-white/10 font-mono text-[11px]">
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-indigo-400 font-semibold">Weight Metric Converter</span>
            <span className="text-[10px] text-slate-500">Python Script</span>
          </div>
          <div className="p-2 rounded bg-slate-950 border border-white/5 text-center text-xs">
            <span className="text-amber-300 font-bold">100 lbs</span>
            <span className="text-slate-500 mx-2">→</span>
            <span className="text-emerald-400 font-bold">45.3592 kg</span>
          </div>
          <div className="text-[10px] text-slate-400">
            Formula: kg = lbs × 0.45359237
          </div>
        </div>
      );

    default:
      return <div className="h-32 w-full relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-900 p-3 font-mono text-[10px] border-b border-white/10">
        <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full border border-indigo-400/20 transition-transform duration-700 group-hover:scale-150"/><div className="absolute -bottom-12 -left-6 h-28 w-28 rounded-full border border-cyan-400/20 transition-transform duration-700 group-hover:scale-125"/>
        <div className="relative flex h-full flex-col justify-between"><div className="flex justify-between text-slate-300"><span>● PROJECT PREVIEW</span><span className="text-indigo-300">BUILD · TEST · LEARN</span></div>
          <div className="flex items-center justify-center gap-2 text-xs">{['IDEA','CODE','RESULT'].map((x,i)=><React.Fragment key={x}>{i>0&&<span className="text-slate-500">→</span>}<span className={`rounded-md border px-3 py-2 transition-transform duration-300 group-hover:-translate-y-1 ${i===0?'border-indigo-400/30 bg-indigo-400/10 text-indigo-200':i===1?'border-cyan-400/30 bg-cyan-400/10 text-cyan-200':'border-emerald-400/30 bg-emerald-400/10 text-emerald-200'}`}>{x}</span></React.Fragment>)}</div>
          <div className="flex justify-between text-slate-400"><span>Explore the workflow</span><span className="text-emerald-300">Ready to explore ↗</span></div></div>
      </div>;
  }
};
