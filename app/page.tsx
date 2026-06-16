/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import Lenis from "lenis";
import {
  ArrowUpRight,
  Sparkles,
  Waves,
  Terminal,
  Disc,
  Radio
} from "lucide-react";
import { useEffect, useRef } from "react";

const navItems = ["Features", "Specs", "Modules", "Commands"];

const skillClusters = [
  {
    title: "Persistent Music Systems",
    items: ["/music setup", "Idle Customization", "HQ Audio"],
    copy: "Deploy clean, permanent, button-driven control dashboards directly into your server music lounges cleanly."
  },
  {
    title: "Rich Interface Utility",
    items: ["/embed create", "Reaction Panels", "JSON Engine"],
    copy: "Design gorgeous customized announcements and self-assignable role systems without configuring external bots."
  },
  {
    title: "Infrastructure Quality",
    items: ["Lavalink v4", "Active Dev Core", "Zero Buffering"],
    copy: "Built over highly performant modern web frameworks to guarantee instant processing loop execution states."
  }
];

const projects = [
  {
    title: "Persistent Music Panels",
    description: "Generate persistent interactive dashboards with full button layout control architectures that stay pinned in your channel slots dynamically.",
    stack: ["Control Interfaces", "Live Contexts", "State Logic"],
    accent: "from-cyan-500/20 via-purple-500/10 to-transparent"
  },
  {
    title: "Advanced Embed Forge",
    description: "Open powerful modular visual structures to deploy highly premium, stylized rich messages directly onto your community boards.",
    stack: ["Interactive Builder", "Custom Hooks", "Clean UX"],
    accent: "from-purple-500/20 via-indigo-500/10 to-transparent"
  },
  {
    title: "Self-Assign Role Interfaces",
    description: "Keep server configuration clear and fully autonomous with lightning-fast reaction configuration utility structures.",
    stack: ["Role Automation", "Menu Matrices", "Instant Feedback"],
    accent: "from-blue-500/20 via-cyan-500/10 to-transparent"
  }
];

interface ProjectType {
  title: string;
  description: string;
  stack: string[];
  accent: string;
}

function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
}

function CursorLight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 26 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 26 });

  useEffect(() => {
    const update = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener("pointermove", update);
    return () => window.removeEventListener("pointermove", update);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-10 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/[0.03] via-purple-500/[0.04] to-transparent blur-[130px] md:block"
      style={{ x: springX, y: springY }}
    />
  );
}

export default function Home() {
  useSmoothScroll();

  useEffect(() => {
    gsap.fromTo(
      ".gsap-soft",
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, ease: "power3.out", stagger: 0.08, delay: 0.08 }
    );
  }, []);

  return (
    <main className="relative overflow-x-hidden min-h-screen bg-[#020304]">
      <CursorLight />
      <div className="noise" />
      
      {/* PREMIUM TECH MATRIX GRID BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_46%,#000_70%,transparent_100%)] pointer-events-none z-0 mix-blend-screen" />

      {/* LIVING ORBITAL AURORAS */}
      <motion.div 
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.9, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-15%] w-[800px] h-[700px] rounded-full bg-gradient-to-br from-cyan-500/[0.14] via-blue-600/0 to-transparent blur-[160px] pointer-events-none z-0 mix-blend-screen"
      />
      
      <motion.div 
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] right-[-15%] w-[850px] h-[850px] rounded-full bg-gradient-to-bl from-purple-500/[0.16] via-indigo-600/0 to-transparent blur-[180px] pointer-events-none z-0 mix-blend-screen"
      />

      <div className="absolute bottom-[-10%] left-[15%] w-[600px] h-[600px] rounded-full bg-purple-600/[0.03] blur-[140px] pointer-events-none z-0" />

      <div className="absolute top-[25%] left-[8%] text-purple-500/20 text-3xl font-mono pointer-events-none select-none animate-bounce">♫</div>
      <div className="absolute top-[40%] right-[12%] text-cyan-500/15 text-4xl font-mono pointer-events-none select-none animate-pulse delay-75">♪</div>
      <div className="absolute bottom-[30%] left-[15%] text-blue-500/10 text-2xl font-mono pointer-events-none select-none animate-bounce delay-150">𝅘𝅥𝅯</div>

      <div className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[#020304]/60 backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 w-[min(1120px,calc(100%-40px))] items-center justify-between">
          <a href="#hero" className="font-mono text-sm tracking-widest uppercase text-white flex items-center gap-2.5 font-bold">
            <img 
              src="/logo.png" 
              alt="Lyrifall" 
              className="w-6 h-6 rounded-full border border-white/10 object-cover shrink-0 aspect-square shadow-[0_0_15px_rgba(125,227,255,0.2)]" 
            />
            LYRIFALL
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/[0.02] p-1 md:flex">
            {navItems.map((item) => (
              <a
                className="rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-neutral-400 transition hover:bg-white/5 hover:text-white"
                href={`#${item.toLowerCase()}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 z-10">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_45%,rgba(168,85,247,0.14),transparent_35rem)] pointer-events-none" />
        
        <div className="section-shell z-10 w-full flex items-center justify-center pt-12 lg:pt-20">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.12fr_0.88fr]">
            
            <div className="relative z-10 text-center lg:text-left">
              <motion.div className="gsap-soft eyebrow mb-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/10 shadow-[0_0_15px_rgba(125,227,255,0.05)]">
                <Sparkles className="h-3.5 w-3.5 text-[#7de3ff]" />
                Your 24/7 Discord Music Bot
              </motion.div>
              
              <h1 className="gsap-soft text-balance max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                Next-generation synchronized <span className="bg-gradient-to-r from-[#7de3ff] via-purple-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(125,227,255,0.25)]">soundscapes.</span>
              </h1>
              
              <p className="gsap-soft mt-6 max-w-xl text-md leading-relaxed text-neutral-400 md:text-lg font-light mx-auto lg:mx-0">
                Lyrifall delivers high-fidelity audio feeds paired with real-time lyric scrolling modules, crafted specifically for modern high-performance Discord communities.
              </p>
              
              <div className="gsap-soft mt-9 flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1208042394813997066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-cyan-500/10 transition-all duration-300"
                >
                  Invite to Discord <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#commands"
                  className="magnetic inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] hover:bg-white/[0.06] px-7 py-3.5 text-sm font-medium text-neutral-300 transition-all duration-300"
                >
                  View App Commands
                </a>
              </div>
            </div>

            <div className="relative z-10 flex justify-center items-center">
              <motion.div 
                className="glass w-full max-w-[400px] rounded-2xl p-6 relative overflow-hidden bg-[#07090e]/80 backdrop-blur-2xl border-white/[0.08] shadow-[0_35px_80px_rgba(0,0,0,0.8)]"
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex gap-1.5 mb-5 border-b border-white/5 pb-3 items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                  <span className="text-[10px] font-mono text-neutral-500 ml-2 uppercase tracking-widest flex items-center gap-1.5">
                    <Radio className="w-3 h-3 text-cyan-400 animate-pulse" /> Active Node Session
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <img src="/logo.png" alt="Lyrifall Player" className="w-14 h-14 rounded-xl border border-purple-500/30 shadow-md object-cover shadow-purple-500/10" />
                  <div className="text-left">
                    <div className="text-[10px] text-cyan-400 font-mono tracking-widest font-bold">/MUSIC SETUP</div>
                    <h4 className="text-sm font-bold text-white tracking-wide mt-0.5">Persistent Music System</h4>
                    <p className="text-xs text-neutral-400 flex items-center gap-1"><Disc className="w-3 h-3 text-purple-400 animate-spin" /> Audio Stream: Lossless</p>
                  </div>
                </div>

                <div className="space-y-2.5 font-sans my-5 border-l-2 border-purple-500/40 pl-4 py-0.5 text-left bg-white/[0.01] p-3 rounded-r-xl border-y border-r border-white/[0.02]">
                  <p className="text-xs text-neutral-300 flex items-center gap-2 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc]" /> Embedded system array active via <code className="text-[11px] font-mono text-[#7de3ff]">/embed create</code>
                  </p>
                  <p className="text-xs text-neutral-300 flex items-center gap-2 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc]" /> Reaction tracking panels online via <code className="text-[11px] font-mono text-[#7de3ff]">/rolepanel</code>
                  </p>
                </div>

                <div className="mt-5 space-y-1.5">
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500" 
                      initial={{ width: "20%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-neutral-500 tracking-wider">
                  <span className="flex items-center gap-1"><Terminal className="w-3 h-3 text-purple-400" /> INTERACTION: NATIVE</span>
                  <span className="flex items-center gap-1"><Waves className="w-3 h-3 text-cyan-400" /> VERIFIED APPS</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <section id="features" className="relative scroll-mt-16 z-20">
        <div className="section-shell">
          <div className="text-center lg:text-left mb-12">
            <p className="eyebrow">{"// INTEGRATED CAPABILITIES"}</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              A comprehensive suite tailored with structural restraint.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Persistent Streaming Deck", "Keep playback centralized via fixed layouts requiring zero messaging clutter to update structural states."],
              ["Visual Embed Architecture", "Author rich, detailed native message components utilizing intuitive field execution matrices."],
              ["Role Interaction Arrays", "Simplify assignment flows using instantaneous layout generation protocols directly matching target indices."]
            ].map(([title, copy]) => (
              <motion.article
                className="glass rounded-xl p-6 bg-[#07090e]/50 border-white/[0.06] backdrop-blur-xl shadow-2xl"
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-md font-bold text-white flex items-center gap-2 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(125,227,255,0.6)]" /> {title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-400 font-light text-xs">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="relative scroll-mt-16 z-20">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="text-center lg:text-left">
              <p className="eyebrow">{"// OPERATIONAL SPECS"}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                Configured strictly around modern API frameworks.
              </h2>
            </div>
            <div className="relative grid gap-4 sm:grid-cols-2">
              {skillClusters.map((cluster, index) => (
                <motion.article
                  className={`glass rounded-xl p-5 bg-[#07090e]/50 border-white/[0.06] backdrop-blur-xl shadow-2xl ${index === 2 ? "sm:col-span-2" : ""}`}
                  key={cluster.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -3 }}
                >
                  <h3 className="text-sm font-bold text-white tracking-wide">{cluster.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-400 font-light">{cluster.copy}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cluster.items.map((item) => (
                      <span
                        className="rounded-full border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[10px] text-neutral-400 font-mono"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="relative scroll-mt-16 z-20">
        <div className="section-shell">
          <div className="mb-12 flex flex-col justify-between gap-4 lg:flex-row lg:items-end text-center lg:text-left">
            <div>
              <p className="eyebrow">{"// GRAPHICAL DESIGN PILLARS"}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                System Modules
              </h2>
            </div>
            <p className="max-w-xs leading-relaxed text-neutral-400 font-light text-xs mx-auto lg:mx-0">
              Curated system profiles engineered explicitly around clean layout interactions, fluid rendering logic, and functional automation presets.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <TiltProject project={project} index={index} key={project.title} />
            ))}
          </div>
        </div>
      </section>

      <section id="commands" className="relative scroll-mt-16 z-20">
        <div className="section-shell pb-32">
          <div className="mb-12 text-center lg:text-left">
            <p className="eyebrow">{"// NATIVE DISCORD COMMAND PROTOCOLS"}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Slash Application Registry
            </h2>
          </div>

          <div className="glass rounded-xl overflow-hidden shadow-2xl bg-[#07090e]/40 border-white/[0.06] backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-white/[0.01] border-b border-white/5 font-mono text-[11px] text-neutral-400 tracking-wider">
                    <th className="p-5 pl-6 uppercase font-normal">Command URI</th>
                    <th className="p-5 uppercase font-normal">Parameter Function Scope</th>
                    <th className="p-5 pr-6 uppercase font-normal text-right">Native Invocation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.02] text-neutral-300 font-light">
                  {[
                    ["/music setup", "Create or update the persistent media interaction panel wrapper cleanly inside a dedicated lounge text node.", "/music setup"],
                    ["/music-set-idle-image", "Set or completely clear the persistent player panel background placeholder asset when tracking loops rest.", "/music-set-idle-image"],
                    ["/embed create", "Initializes the standalone generation dialogue wizard to configure and publish micro-custom rich structured system embeds.", "/embed create"],
                    ["/rolepanel", "Instantiates standard, interactive self-assignable option layouts triggered cleanly using interactive user reactions.", "/rolepanel"],
                    ["/stop", "Terminates active Lavalink output loops completely, purges target channel assignments, and leaves voice allocations cleanly.", "/stop"],
                    ["/active-dev-badge", "Executes a lightning-fast validation handshake responder sequence to systematically secure the official Discord Active Developer tier credential.", "/active-dev-badge"]
                  ].map(([uri, scope, invocation]) => (
                    <tr className="hover:bg-white/[0.01] transition-colors" key={uri}>
                      <td className="p-5 pl-6 font-mono text-cyan-400 font-semibold text-xs">{uri}</td>
                      <td className="p-5 text-neutral-400 leading-relaxed text-xs max-w-sm">{scope}</td>
                      <td className="p-5 pr-6 font-mono text-neutral-500 text-xs text-right select-all">{invocation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 text-center text-[10px] text-neutral-600 tracking-widest uppercase font-mono z-20 relative">
        <p>&copy; {new Date().getFullYear()} Lyrifall Ecosystem // All Rights Reserved.</p>
      </footer>
    </main>
  );
}

function TiltProject({ project, index }: { project: ProjectType; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [4, -4]);
  const rotateY = useTransform(x, [-80, 80], [-4, 4]);

  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    x.set(event.clientX - bounds.left - bounds.width / 2);
    y.set(event.clientY - bounds.top - bounds.height / 2);
  };

  return (
    <motion.article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY }}
      className="glass group rounded-xl p-4 [transform-style:preserve-3d] bg-[#07090e]/50 border-white/[0.06] backdrop-blur-xl shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <div className={`relative h-44 overflow-hidden rounded-lg bg-gradient-to-br ${project.accent}`}>
        <div className="absolute inset-4 rounded-md border border-white/5 bg-[#020304]/80 backdrop-blur-xl" />
        <div className="absolute left-6 top-6 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-cyan-400/60" />
          <span className="h-2 w-2 rounded-full bg-purple-400/40" />
        </div>
        <div className="absolute bottom-6 left-6 right-6 h-16 rounded-md border border-white/5 bg-white/[0.02] p-3 flex flex-col justify-between">
          <div className="h-2.5 w-20 rounded-full bg-white/20" />
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-400/40 w-1/2" />
          </div>
        </div>
        <Waves className="absolute right-6 top-6 h-8 w-8 text-neutral-700 transition duration-300 group-hover:scale-110 group-hover:text-cyan-400/40" />
      </div>
      <div className="p-1 pt-4 text-left">
        <h3 className="text-md font-bold text-white tracking-wide">{project.title}</h3>
        <p className="mt-2 min-h-[64px] text-xs leading-relaxed text-neutral-400 font-light">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((item: string) => (
            <span className="rounded-full bg-white/[0.03] border border-white/5 px-2 py-0.5 text-[10px] text-neutral-400 font-mono" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}