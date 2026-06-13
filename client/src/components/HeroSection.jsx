// import { ArrowDown, MousePointerClick, Sparkles } from "lucide-react";
// import { motion } from "framer-motion";
// import { useRef } from "react";
// import { useInView } from "framer-motion";

// export const HeroSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.16, 1, 0.3, 1]
//       }
//     }
//   };

//   const floatingVariants = {
//     float: {
//       y: [0, -15, 0],
//       transition: {
//         duration: 6,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-background via-background/80 to-primary/5"
//       ref={ref}
//     >
//       {/* Floating particles background */}
//       <div className="absolute inset-0 overflow-hidden -z-10">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-primary/10"
//             style={{
//               width: Math.random() * 10 + 2 + 'px',
//               height: Math.random() * 10 + 2 + 'px',
//               left: Math.random() * 100 + '%',
//               top: Math.random() * 100 + '%',
//             }}
//             animate={{
//               y: [0, (Math.random() - 0.5) * 100],
//               x: [0, (Math.random() - 0.5) * 50],
//               opacity: [0.2, 0.8, 0.2],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               repeatType: 'reverse',
//               ease: 'linear'
//             }}
//           />
//         ))}
//       </div>

//       <div className="container max-w-5xl mx-auto text-center z-10">
//         <motion.div
//           className="space-y-6 sm:space-y-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <motion.div variants={itemVariants}>
//             <motion.div 
//               className="text-lg md:text-xl font-mono text-primary mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               <Sparkles className="h-4 w-4" />
//               Full Stack Developer
//             </motion.div>
//           </motion.div>

//           <motion.h1 
//             className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
//             variants={itemVariants}
//           >
//             <span className="inline-block">I'm</span>
//             <motion.span 
//               className="text-primary inline-block ml-3 relative"
//               variants={itemVariants}
//             >
//               Satyam
//               <motion.span 
//                 className="absolute -bottom-2 left-0 h-1 bg-primary w-full"
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ delay: 0.8, duration: 0.6 }}
//               />
//             </motion.span>

//           </motion.h1>

//           <motion.p 
//             className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
//             variants={itemVariants}
//           >
//             Crafting <span className="text-primary font-medium">digital experiences</span> that blend beautiful design with <span className="text-secondary font-medium">cutting-edge technology</span> to solve real-world problems.
//           </motion.p>

//           <motion.div 
//             className="flex flex-col justify-center gap-4 pt-6 sm:flex-row sm:gap-6 sm:pt-8"
//             variants={itemVariants}
//           >
//             <motion.a 
//               href="#projects" 
//               className="relative cosmic-button group overflow-hidden px-8 py-4 rounded-full font-medium text-lg"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ boxShadow: "0 0 0 0px rgba(99, 102, 241, 0.5)" }}
//               animate={{ boxShadow: "0 0 0 10px rgba(99, 102, 241, 0)" }}
//               transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
//             >
//               <span className="relative z-10">Explore My Work</span>
//               <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-100 group-hover:opacity-90 transition-opacity duration-300"></span>
//             </motion.a>
            
//             <motion.a 
//               href="#contact" 
//               className="relative outline-button group overflow-hidden px-8 py-4 rounded-full font-medium text-lg border-2 border-primary/50 hover:border-primary transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 Let's Connect 
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
//                   <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
//                 </svg>
//               </span>
//               <span className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></span>
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Tech stack floating badges */}
//       <motion.div 
//         className="absolute left-8 bottom-1/3 hidden lg:flex flex-col gap-4 items-start"
//         variants={floatingVariants}
//         animate="float"
//       >
//         {['React', 'Node.js', 'TypeScript', 'Java', 'MongoDB'].map((tech, i) => (
//           <motion.div 
//             key={tech}
//             className="px-4 py-2 bg-background/80 backdrop-blur-sm border rounded-full text-sm shadow-sm"
//             initial={{ x: -20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 1 + i * 0.1 }}
//           >
//             {tech}
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div 
//         className="absolute right-8 top-1/3 hidden lg:flex flex-col gap-4 items-end"
//         variants={floatingVariants}
//         animate="float"
//       >
//         {['Express', 'Next.js', 'PostgreSQL', 'Tailwind', 'Docker'].map((tech, i) => (
//           <motion.div 
//             key={tech}
//             className="px-4 py-2 bg-background/80 backdrop-blur-sm border rounded-full text-sm shadow-sm"
//             initial={{ x: 20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 1.2 + i * 0.1 }}
//           >
//             {tech}
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div 
//         className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 transform flex-col items-center sm:flex"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ 
//           opacity: [0, 1, 1, 0],
//           y: [0, 10, 0, -10],
//         }}
//         transition={{
//           duration: 2.5,
//           repeat: Infinity,
//           repeatDelay: 0.5,
//           ease: "easeInOut"
//         }}
//       >
//         <span className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
//           <MousePointerClick className="h-3 w-3" /> Scroll to explore
//         </span>
//         <ArrowDown className="h-6 w-6 text-primary" />
//       </motion.div>

//       {/* Animated gradient background elements */}
//       <motion.div 
//         className="absolute inset-0 -z-10 overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.15 }}
//         transition={{ delay: 1, duration: 1.5 }}
//       >
//         <motion.div 
//           className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary to-purple-500 blur-[100px] opacity-30"
//           animate={{
//             x: [0, 20, 0],
//             y: [0, -30, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             repeatType: 'reverse',
//             ease: 'easeInOut'
//           }}
//         />
//         <motion.div 
//           className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-secondary to-pink-500 blur-[120px] opacity-30"
//           animate={{
//             x: [0, -30, 0],
//             y: [0, 40, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             repeatType: 'reverse',
//             ease: 'easeInOut'
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-1/4 left-1/2 w-60 h-60 rounded-full bg-gradient-to-r from-accent to-blue-500 blur-[90px] opacity-30"
//           animate={{
//             x: [0, 25, 0],
//             y: [0, -20, 0],
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             repeatType: 'reverse',
//             ease: 'easeInOut'
//           }}
//         />
//       </motion.div>
//     </section>
//   );
// };

// import { ArrowDown, MousePointerClick, Sparkles, Github, Linkedin, Youtube, Volume2, VolumeX, Sun, Moon } from "lucide-react";
// import { motion } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { useInView } from "framer-motion";

// export const HeroSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   // --- Theme Toggle ---
//   const [theme, setTheme] = useState("light");
//   useEffect(() => {
//     const stored = localStorage.getItem("theme");
//     if (stored === "dark") {
//       document.documentElement.classList.add("dark");
//       setTheme("dark");
//     }
//   }, []);
//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     document.documentElement.classList.toggle("dark");
//     localStorage.setItem("theme", newTheme);
//     setTheme(newTheme);
//   };

//   // --- Music Toggle ---
//   const [isMusicPlaying, setIsMusicPlaying] = useState(false);
//   const [isAudioReady, setIsAudioReady] = useState(false);
//   const audioRef = useRef(null);
//   const musicUrl = "/music.mp3";
//   useEffect(() => {
//     audioRef.current = new Audio(musicUrl);
//     audioRef.current.loop = true;
//     audioRef.current.volume = 0.5;
//     audioRef.current.preload = "auto";
//     const handleCanPlay = () => setIsAudioReady(true);
//     audioRef.current.addEventListener("canplaythrough", handleCanPlay);
//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
//         audioRef.current = null;
//       }
//     };
//   }, []);
//   const toggleMusic = () => {
//     if (!audioRef.current || !isAudioReady) return;
//     if (isMusicPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play().catch(console.error);
//     }
//     setIsMusicPlaying(!isMusicPlaying);
//   };

//   // --- Animations ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
//   };
//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
//   };

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-background via-background/80 to-primary/5"
//       ref={ref}
//     >
//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden -z-10">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-primary/10"
//             style={{
//               width: Math.random() * 10 + 2 + "px",
//               height: Math.random() * 10 + 2 + "px",
//               left: Math.random() * 100 + "%",
//               top: Math.random() * 100 + "%",
//             }}
//             animate={{
//               y: [0, (Math.random() - 0.5) * 100],
//               x: [0, (Math.random() - 0.5) * 50],
//               opacity: [0.2, 0.8, 0.2],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Main hero content */}
//       <div className="container max-w-5xl mx-auto text-center z-10">
//         <motion.div
//           className="space-y-6 sm:space-y-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {/* Tagline */}
//           <motion.div variants={itemVariants}>
//             <motion.div
//               className="text-sm md:text-base font-mono text-primary mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               <Sparkles className="h-3 w-3" />
//               <span className="text-secondary">const</span> <span className="text-primary">developer</span> = {"{"} fullstack: true {"}"}
//             </motion.div>
//           </motion.div>

//           {/* Code-styled Name */}
//           <motion.h1
//             className="text-3xl font-bold tracking-tight font-mono sm:text-5xl md:text-6xl lg:text-7xl"
//             variants={itemVariants}
//           >
//             <span className="text-muted-foreground">{"<h1>"}</span>{" "}
//             <span className="text-primary">Satyam Gupta</span>{" "}
//             <span className="text-muted-foreground">{"</h1>"}</span>
//           </motion.h1>

//           {/* Subtitle in terminal style */}
//           <motion.p
//             className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground font-mono sm:text-base md:text-lg lg:text-xl"
//             variants={itemVariants}
//           >
//             <span className="text-green-500">$</span> npm run <span className="text-primary">build</span> → <span className="text-secondary">"Crafting scalable apps & solving real-world problems"</span>
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             className="flex flex-col justify-center gap-4 pt-6 sm:flex-row sm:gap-6 sm:pt-8"
//             variants={itemVariants}
//           >
//             <motion.a
//               href="#projects"
//               className="relative cosmic-button group overflow-hidden rounded-md px-4 py-3 text-sm font-mono sm:px-6 md:text-base"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">{"<Explore My Work />"}</span>
//               <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-100 group-hover:opacity-90 transition-opacity duration-300"></span>
//             </motion.a>

//             <motion.a
//               href="#contact"
//               className="relative outline-button group overflow-hidden px-6 py-3 rounded-md font-mono text-sm md:text-base border-2 border-primary/50 hover:border-primary transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">&lt;Let’s Connect /&gt;</span>
//               <span className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></span>
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Sidebar */}
//       <motion.div
//         className="fixed left-6 bottom-0 top-0 flex flex-col items-center justify-end gap-5 z-50"
//         initial={{ x: -50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <a href="https://github.com/sahilmd01" target="_blank" rel="noopener noreferrer"
//           className="text-gray-400 hover:text-primary transition-colors">
//           <Github className="w-5 h-5" />
//         </a>
//         <a href="https://linkedin.com/in/codewithkinu" target="_blank" rel="noopener noreferrer"
//           className="text-gray-400 hover:text-primary transition-colors">
//           <Linkedin className="w-5 h-5" />
//         </a>
//         <a href="https://www.youtube.com/@codewithkinu" target="_blank" rel="noopener noreferrer"
//           className="text-gray-400 hover:text-primary transition-colors">
//           <Youtube className="w-5 h-5" />
//         </a>

//         <button onClick={toggleMusic} disabled={!isAudioReady}
//           className="text-gray-400 hover:text-primary transition-colors disabled:opacity-40">
//           {isMusicPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
//         </button>
//         <button onClick={toggleTheme}
//           className="text-gray-400 hover:text-primary transition-colors">
//           {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//         </button>

//         <div className="w-px h-24 bg-gray-400/50 mt-4" />
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 transform flex-col items-center sm:flex"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: [0, 1, 1, 0], y: [0, 10, 0, -10] }}
//         transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
//       >
//         <span className="text-xs md:text-sm text-muted-foreground mb-2 flex items-center gap-1 font-mono">
//           <MousePointerClick className="h-3 w-3" /> Scroll to explore
//         </span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </motion.div>
      
      
      
      
//     </section>
//   );
// };
// import { ArrowDown, MousePointerClick, Sparkles, Github, Linkedin, Youtube, Volume2, VolumeX, Sun, Moon, Zap, Code2, Coffee } from "lucide-react";
// import { motion } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { useInView } from "framer-motion";

// export const HeroSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   // --- Theme Toggle ---
//   const [theme, setTheme] = useState("light");
//   useEffect(() => {
//     const stored = localStorage.getItem("theme");
//     if (stored === "dark") {
//       document.documentElement.classList.add("dark");
//       setTheme("dark");
//     }
//   }, []);
//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     document.documentElement.classList.toggle("dark");
//     localStorage.setItem("theme", newTheme);
//     setTheme(newTheme);
//   };

//   // --- Music Toggle ---
//   const [isMusicPlaying, setIsMusicPlaying] = useState(false);
//   const [isAudioReady, setIsAudioReady] = useState(false);
//   const audioRef = useRef(null);
//   const musicUrl = "/music.mp3";
//   useEffect(() => {
//     audioRef.current = new Audio(musicUrl);
//     audioRef.current.loop = true;
//     audioRef.current.volume = 0.5;
//     audioRef.current.preload = "auto";
//     const handleCanPlay = () => setIsAudioReady(true);
//     audioRef.current.addEventListener("canplaythrough", handleCanPlay);
//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
//         audioRef.current = null;
//       }
//     };
//   }, []);
//   const toggleMusic = () => {
//     if (!audioRef.current || !isAudioReady) return;
//     if (isMusicPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play().catch(console.error);
//     }
//     setIsMusicPlaying(!isMusicPlaying);
//   };

//   // --- Floating Button State ---
//   const [isHovered, setIsHovered] = useState(false);

//   // --- Animations ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
//   };
//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
//   };

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-background via-background/80 to-primary/5"
//       ref={ref}
//     >
//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden -z-10">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-primary/10"
//             style={{
//               width: Math.random() * 10 + 2 + "px",
//               height: Math.random() * 10 + 2 + "px",
//               left: Math.random() * 100 + "%",
//               top: Math.random() * 100 + "%",
//             }}
//             animate={{
//               y: [0, (Math.random() - 0.5) * 100],
//               x: [0, (Math.random() - 0.5) * 50],
//               opacity: [0.2, 0.8, 0.2],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Main hero content */}
//       <div className="container max-w-5xl mx-auto text-center z-10">
//         <motion.div
//           className="space-y-6 sm:space-y-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {/* Tagline */}
//           <motion.div variants={itemVariants}>
//             <motion.div
//               className="text-sm md:text-base font-mono text-primary mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               <Sparkles className="h-3 w-3" />
//               <span className="text-secondary">const</span> <span className="text-primary">developer</span> = {"{"} fullstack: true {"}"}
//             </motion.div>
//           </motion.div>

//           {/* Code-styled Name */}
//           <motion.h1
//             className="text-3xl font-bold tracking-tight font-mono sm:text-5xl md:text-6xl lg:text-7xl"
//             variants={itemVariants}
//           >
//             <span className="text-muted-foreground">{"<h1>"}</span>{" "}
//             <span className="text-primary">Satyam Gupta</span>{" "}
//             <span className="text-muted-foreground">{"</h1>"}</span>
//           </motion.h1>

//           {/* Subtitle in terminal style */}
//           <motion.p
//             className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground font-mono sm:text-base md:text-lg lg:text-xl"
//             variants={itemVariants}
//           >
//             <span className="text-green-500">$</span> npm run <span className="text-primary">build</span> → <span className="text-secondary">"Crafting scalable apps & solving real-world problems"</span>
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             className="flex flex-col justify-center gap-4 pt-6 sm:flex-row sm:gap-6 sm:pt-8"
//             variants={itemVariants}
//           >
//             <motion.a
//               href="#projects"
//               className="relative cosmic-button group overflow-hidden rounded-md px-4 py-3 text-sm font-mono sm:px-6 md:text-base"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">{"<Explore My Work />"}</span>
//               <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-100 group-hover:opacity-90 transition-opacity duration-300"></span>
//             </motion.a>

//             <motion.a
//               href="#contact"
//               className="relative outline-button group overflow-hidden px-6 py-3 rounded-md font-mono text-sm md:text-base border-2 border-primary/50 hover:border-primary transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">&lt;Let's Connect /&gt;</span>
//               <span className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></span>
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Sidebar */}
//       <motion.div
//         className="fixed left-6 bottom-0 top-0 flex flex-col items-center justify-end gap-5 z-50"
//         initial={{ x: -50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <a href="https://github.com/sahilmd01" target="_blank" rel="noopener noreferrer"
//           className="text-gray-400 hover:text-primary transition-colors">
//           <Github className="w-5 h-5" />
//         </a>
//         <a href="https://linkedin.com/in/codewithkinu" target="_blank" rel="noopener noreferrer"
//           className="text-gray-400 hover:text-primary transition-colors">
//           <Linkedin className="w-5 h-5" />
//         </a>
//         <a href="https://www.youtube.com/@codewithkinu" target="_blank" rel="noopener noreferrer"
//           className="text-gray-400 hover:text-primary transition-colors">
//           <Youtube className="w-5 h-5" />
//         </a>

//         <button onClick={toggleMusic} disabled={!isAudioReady}
//           className="text-gray-400 hover:text-primary transition-colors disabled:opacity-40">
//           {isMusicPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
//         </button>
//         <button onClick={toggleTheme}
//           className="text-gray-400 hover:text-primary transition-colors">
//           {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//         </button>

//         <div className="w-px h-24 bg-gray-400/50 mt-4" />
//       </motion.div>

//       {/* Interesting Floating Button - Bottom Right */}
//       <motion.div
//         className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
//         initial={{ scale: 0, rotate: -180 }}
//         animate={{ scale: 1, rotate: 0 }}
//         transition={{ delay: 1, duration: 0.8, type: "spring", bounce: 0.4 }}
//       >
//         <motion.button
//           className="relative group"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => {
//             // Add your custom action here
//             window.open('mailto:satyamgupta9302@gmail.com', '_blank');
//           }}
//         >
//           {/* Main button circle */}
//           <motion.div
//             className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25 flex items-center justify-center relative overflow-hidden"
//             animate={{
//               boxShadow: isHovered 
//                 ? "0 20px 40px rgba(var(--primary-rgb, 59, 130, 246), 0.4)" 
//                 : "0 10px 20px rgba(var(--primary-rgb, 59, 130, 246), 0.25)"
//             }}
//           >
//             {/* Rotating background effect */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//               animate={{ rotate: isHovered ? 360 : 0 }}
//               transition={{ duration: 0.8, ease: "linear" }}
//             />
            
//             {/* Main icon */}
//             <motion.div
//               animate={{ rotate: isHovered ? 12 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Zap className="w-6 h-6 text-white drop-shadow-sm" />
//             </motion.div>
//           </motion.div>

//           {/* Orbiting particles */}
//           {[...Array(3)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-primary rounded-full"
//               style={{
//                 left: "50%",
//                 top: "50%",
//               }}
//               animate={{
//                 x: isHovered 
//                   ? [0, Math.cos(i * 120 * Math.PI / 180) * 35]
//                   : [0, Math.cos(i * 120 * Math.PI / 180) * 25],
//                 y: isHovered 
//                   ? [0, Math.sin(i * 120 * Math.PI / 180) * 35]
//                   : [0, Math.sin(i * 120 * Math.PI / 180) * 25],
//                 scale: isHovered ? [1, 0.8, 1] : [1, 0.6, 1],
//                 opacity: [0.6, 1, 0.6],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 delay: i * 0.3,
//                 ease: "linear"
//               }}
//             />
//           ))}

//           {/* Tooltip */}
//           <motion.div
//             className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg shadow-lg"
//             initial={{ opacity: 0, y: 10, scale: 0.8 }}
//             animate={{
//               opacity: isHovered ? 1 : 0,
//               y: isHovered ? 0 : 10,
//               scale: isHovered ? 1 : 0.8
//             }}
//             transition={{ duration: 0.2 }}
//           >
//             <span className="text-xs font-mono text-primary whitespace-nowrap flex items-center gap-1">
//               <Coffee className="w-3 h-3" />
//               Let's chat!
//             </span>
//             {/* Arrow */}
//             <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/20" />
//           </motion.div>

//           {/* Pulse ring */}
//           <motion.div
//             className="absolute inset-0 rounded-full border-2 border-primary/30"
//             animate={{
//               scale: [1, 1.4, 1],
//               opacity: [0.5, 0, 0.5]
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//         </motion.button>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 transform flex-col items-center sm:flex"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: [0, 1, 1, 0], y: [0, 10, 0, -10] }}
//         transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
//       >
//         <span className="text-xs md:text-sm text-muted-foreground mb-2 flex items-center gap-1 font-mono">
//           <MousePointerClick className="h-3 w-3" /> Scroll to explore
//         </span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </motion.div>
//     </section>
//   );
// };

// import { ArrowDown, MousePointerClick, Sparkles, Github, Linkedin, Youtube, Volume2, VolumeX, Sun, Moon, Zap, Code2, Coffee } from "lucide-react";
// import { motion } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { useInView } from "framer-motion";

// export const HeroSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   // --- Theme Toggle ---
//   const [theme, setTheme] = useState("light");
//   useEffect(() => {
//     const stored = localStorage.getItem("theme");
//     if (stored === "dark") {
//       document.documentElement.classList.add("dark");
//       setTheme("dark");
//     }
//   }, []);
//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     document.documentElement.classList.toggle("dark");
//     localStorage.setItem("theme", newTheme);
//     setTheme(newTheme);
//   };

//   // --- Music Toggle ---
//   const [isMusicPlaying, setIsMusicPlaying] = useState(false);
//   const [isAudioReady, setIsAudioReady] = useState(false);
//   const audioRef = useRef(null);
//   const musicUrl = "/music.mp3";
//   useEffect(() => {
//     audioRef.current = new Audio(musicUrl);
//     audioRef.current.loop = true;
//     audioRef.current.volume = 0.5;
//     audioRef.current.preload = "auto";
//     const handleCanPlay = () => setIsAudioReady(true);
//     audioRef.current.addEventListener("canplaythrough", handleCanPlay);
//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
//         audioRef.current = null;
//       }
//     };
//   }, []);
//   const toggleMusic = () => {
//     if (!audioRef.current || !isAudioReady) return;
//     if (isMusicPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play().catch(console.error);
//     }
//     setIsMusicPlaying(!isMusicPlaying);
//   };

//   // --- Floating Button State ---
//   const [isHovered, setIsHovered] = useState(false);

//   // --- Animations ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
//   };
//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
//   };

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-background via-background/80 to-primary/5"
//       ref={ref}
//     >
//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden -z-10">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-primary/10"
//             style={{
//               width: Math.random() * 10 + 2 + "px",
//               height: Math.random() * 10 + 2 + "px",
//               left: Math.random() * 100 + "%",
//               top: Math.random() * 100 + "%",
//             }}
//             animate={{
//               y: [0, (Math.random() - 0.5) * 100],
//               x: [0, (Math.random() - 0.5) * 50],
//               opacity: [0.2, 0.8, 0.2],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Main hero content */}
//       <div className="container max-w-5xl mx-auto text-center z-10">
//         <motion.div
//           className="space-y-6 sm:space-y-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {/* Tagline */}
//           <motion.div variants={itemVariants}>
//             <motion.div
//               className="text-sm md:text-base font-mono text-primary mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               <Sparkles className="h-3 w-3" />
//               <span className="text-secondary">const</span> <span className="text-primary">developer</span> = {"{"} fullstack: true {"}"}
//             </motion.div>
//           </motion.div>

//           {/* Code-styled Name */}
//           <motion.h1
//             className="text-3xl font-bold tracking-tight font-mono sm:text-5xl md:text-6xl lg:text-7xl"
//             variants={itemVariants}
//           >
//             <span className="text-muted-foreground">{"<h1>"}</span>{" "}
//             <span className="text-primary">Satyam Gupta</span>{" "}
//             <span className="text-muted-foreground">{"</h1>"}</span>
//           </motion.h1>

//           {/* Subtitle in terminal style */}
//           <motion.p
//             className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground font-mono sm:text-base md:text-lg lg:text-xl"
//             variants={itemVariants}
//           >
//             <span className="text-green-500">$</span> npm run <span className="text-primary">build</span> → <span className="text-secondary">"Crafting scalable apps & solving real-world problems"</span>
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             className="flex flex-col justify-center gap-4 pt-6 sm:flex-row sm:gap-6 sm:pt-8"
//             variants={itemVariants}
//           >
//             <motion.a
//               href="#projects"
//               className="relative cosmic-button group overflow-hidden rounded-md px-4 py-3 text-sm font-mono sm:px-6 md:text-base"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">{"<Explore My Work />"}</span>
//               <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-100 group-hover:opacity-90 transition-opacity duration-300"></span>
//             </motion.a>

//             <motion.a
//               href="#contact"
//               className="relative outline-button group overflow-hidden px-6 py-3 rounded-md font-mono text-sm md:text-base border-2 border-primary/50 hover:border-primary transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">&lt;Let's Connect /&gt;</span>
//               <span className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></span>
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Enhanced Sidebar */}
//       <motion.div
//         className="fixed bottom-0 left-3 z-50 hidden flex-col items-center justify-end gap-3 sm:flex lg:left-6"
//         initial={{ x: -50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         {/* Social Links with enhanced animations */}
//         <motion.a
//           href="https://github.com/satyam-gupta93"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="relative group p-2.5 rounded-lg bg-background/80 backdrop-blur-sm border border-transparent hover:border-primary/30 transition-all duration-300"
//           whileHover={{ scale: 1.1, y: -2 }}
//           whileTap={{ scale: 0.95 }}
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           <motion.div
//             className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             layoutId="sidebar-hover"
//           />
//           <Github className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors relative z-10" />
          
//           {/* Floating particles on hover */}
//           <motion.div
//             className="absolute inset-0 pointer-events-none"
//             initial={false}
//             animate={{ opacity: 0 }}
//             whileHover={{ opacity: 1 }}
//           >
//             {[...Array(3)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-1 h-1 bg-primary rounded-full"
//                 style={{
//                   left: "50%",
//                   top: "50%",
//                 }}
//                 animate={{
//                   x: [0, (Math.random() - 0.5) * 20],
//                   y: [0, (Math.random() - 0.5) * 20],
//                   opacity: [0, 1, 0],
//                   scale: [0, 1, 0],
//                 }}
//                 transition={{
//                   duration: 1,
//                   delay: i * 0.1,
//                   repeat: Infinity,
//                   repeatDelay: 1,
//                 }}
//               />
//             ))}
//           </motion.div>
          
//           {/* Tooltip */}
//           <motion.div
//             className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-background/90 backdrop-blur-sm border border-primary/20 rounded text-xs font-mono text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             initial={{ x: -10 }}
//             whileHover={{ x: 0 }}
//           >
//             GitHub
//           </motion.div>
//         </motion.a>

//         <motion.a
//           href="https://www.linkedin.com/in/satyam-gupta-000549304/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="relative group p-2.5 rounded-lg bg-background/80 backdrop-blur-sm border border-transparent hover:border-primary/30 transition-all duration-300"
//           whileHover={{ scale: 1.1, y: -2 }}
//           whileTap={{ scale: 0.95 }}
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <motion.div
//             className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           />
//           <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors relative z-10" />
          
//           <motion.div
//             className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-background/90 backdrop-blur-sm border border-primary/20 rounded text-xs font-mono text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             initial={{ x: -10 }}
//             whileHover={{ x: 0 }}
//           >
//             LinkedIn
//           </motion.div>
//         </motion.a>


       

//         {/* Music button with enhanced animation */}
//         <motion.button
//           onClick={toggleMusic}
//           disabled={!isAudioReady}
//           className="relative group p-2.5 rounded-lg bg-background/80 backdrop-blur-sm border border-transparent hover:border-primary/30 transition-all duration-300 disabled:opacity-40"
//           whileHover={{ scale: 1.1, y: -2 }}
//           whileTap={{ scale: 0.95 }}
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           <motion.div
//             className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           />
//           <motion.div
//             animate={isMusicPlaying ? { scale: [1, 1.2, 1] } : {}}
//             transition={{ duration: 0.6, repeat: isMusicPlaying ? Infinity : 0 }}
//             className="relative z-10"
//           >
//             {isMusicPlaying ? (
//               <Volume2 className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
//             ) : (
//               <VolumeX className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
//             )}
//           </motion.div>
          
//           {/* Sound waves animation when playing */}
//           {isMusicPlaying && (
//             <div className="absolute -right-1 top-1/2 -translate-y-1/2 flex gap-0.5">
//               {[...Array(3)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="w-0.5 bg-green-500/60 rounded-full"
//                   animate={{
//                     height: [2, 8, 2],
//                   }}
//                   transition={{
//                     duration: 0.8,
//                     repeat: Infinity,
//                     delay: i * 0.1,
//                     ease: "easeInOut",
//                   }}
//                 />
//               ))}
//             </div>
//           )}
          
//           <motion.div
//             className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-background/90 backdrop-blur-sm border border-primary/20 rounded text-xs font-mono text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             initial={{ x: -10 }}
//             whileHover={{ x: 0 }}
//           >
//             {isMusicPlaying ? 'Pause' : 'Play'} Music
//           </motion.div>
//         </motion.button>

//         {/* Theme toggle with sun/moon transition */}
//         <motion.button
//           onClick={toggleTheme}
//           className="relative group p-2.5 rounded-lg bg-background/80 backdrop-blur-sm border border-transparent hover:border-primary/30 transition-all duration-300"
//           whileHover={{ scale: 1.1, y: -2 }}
//           whileTap={{ scale: 0.95 }}
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           <motion.div
//             className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           />
//           <motion.div
//             key={theme}
//             initial={{ rotate: -180, scale: 0 }}
//             animate={{ rotate: 0, scale: 1 }}
//             transition={{ duration: 0.5, ease: "backOut" }}
//             className="relative z-10"
//           >
//             {theme === "dark" ? (
//               <Sun className="w-5 h-5 text-gray-400 group-hover:text-yellow-500 transition-colors" />
//             ) : (
//               <Moon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
//             )}
//           </motion.div>
          
//           {/* Orbiting particles for theme button */}
//           <motion.div className="absolute inset-0 pointer-events-none">
//             {[...Array(2)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className={`absolute w-1 h-1 ${theme === 'dark' ? 'bg-yellow-400' : 'bg-blue-400'} rounded-full opacity-0 group-hover:opacity-60`}
//                 style={{
//                   left: "50%",
//                   top: "50%",
//                 }}
//                 animate={{
//                   x: [0, Math.cos(i * 180 * Math.PI / 180) * 15],
//                   y: [0, Math.sin(i * 180 * Math.PI / 180) * 15],
//                   rotate: [0, 360],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   delay: i * 0.5,
//                   ease: "linear"
//                 }}
//               />
//             ))}
//           </motion.div>
          
//           <motion.div
//             className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-background/90 backdrop-blur-sm border border-primary/20 rounded text-xs font-mono text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             initial={{ x: -10 }}
//             whileHover={{ x: 0 }}
//           >
//             {theme === 'dark' ? 'Light' : 'Dark'} Mode
//           </motion.div>
//         </motion.button>

//         {/* Animated bottom line */}
//         <motion.div
//           className="w-px h-24 bg-gradient-to-t from-primary/50 via-primary/20 to-transparent mt-4 relative overflow-hidden"
//           initial={{ scaleY: 0 }}
//           animate={{ scaleY: 1 }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//         >
//           {/* Moving gradient effect */}
//           <motion.div
//             className="absolute inset-0 w-full bg-gradient-to-t from-transparent via-primary to-transparent"
//             animate={{
//               y: ["-100%", "100%"]
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//           />
//         </motion.div>
//       </motion.div>

//       {/* Interesting Floating Button - Bottom Right */}
//       <motion.div
//         className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
//         initial={{ scale: 0, rotate: -180 }}
//         animate={{ scale: 1, rotate: 0 }}
//         transition={{ delay: 1, duration: 0.8, type: "spring", bounce: 0.4 }}
//       >
//         <motion.button
//           className="relative group"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => {
//             // Add your custom action here
//             window.open('mailto:satyamgupta9302@gmail.com', '_blank');
//           }}
//         >
//           {/* Main button circle */}
//           <motion.div
//             className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25 flex items-center justify-center relative overflow-hidden"
//             animate={{
//               boxShadow: isHovered 
//                 ? "0 20px 40px rgba(var(--primary-rgb, 59, 130, 246), 0.4)" 
//                 : "0 10px 20px rgba(var(--primary-rgb, 59, 130, 246), 0.25)"
//             }}
//           >
//             {/* Rotating background effect */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//               animate={{ rotate: isHovered ? 360 : 0 }}
//               transition={{ duration: 0.8, ease: "linear" }}
//             />
            
//             {/* Main icon */}
//             <motion.div
//               animate={{ rotate: isHovered ? 12 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Zap className="w-6 h-6 text-white drop-shadow-sm" />
//             </motion.div>
//           </motion.div>

//           {/* Orbiting particles */}
//           {[...Array(3)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-primary rounded-full"
//               style={{
//                 left: "50%",
//                 top: "50%",
//               }}
//               animate={{
//                 x: isHovered 
//                   ? [0, Math.cos(i * 120 * Math.PI / 180) * 35]
//                   : [0, Math.cos(i * 120 * Math.PI / 180) * 25],
//                 y: isHovered 
//                   ? [0, Math.sin(i * 120 * Math.PI / 180) * 35]
//                   : [0, Math.sin(i * 120 * Math.PI / 180) * 25],
//                 scale: isHovered ? [1, 0.8, 1] : [1, 0.6, 1],
//                 opacity: [0.6, 1, 0.6],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 delay: i * 0.3,
//                 ease: "linear"
//               }}
//             />
//           ))}

//           {/* Tooltip */}
//           <motion.div
//             className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg shadow-lg"
//             initial={{ opacity: 0, y: 10, scale: 0.8 }}
//             animate={{
//               opacity: isHovered ? 1 : 0,
//               y: isHovered ? 0 : 10,
//               scale: isHovered ? 1 : 0.8
//             }}
//             transition={{ duration: 0.2 }}
//           >
//             <span className="text-xs font-mono text-primary whitespace-nowrap flex items-center gap-1">
//               <Coffee className="w-3 h-3" />
//               Let's chat!
//             </span>
//             {/* Arrow */}
//             <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/20" />
//           </motion.div>

//           {/* Pulse ring */}
//           <motion.div
//             className="absolute inset-0 rounded-full border-2 border-primary/30"
//             animate={{
//               scale: [1, 1.4, 1],
//               opacity: [0.5, 0, 0.5]
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//         </motion.button>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 transform flex-col items-center sm:flex"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: [0, 1, 1, 0], y: [0, 10, 0, -10] }}
//         transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
//       >
//         <span className="text-xs md:text-sm text-muted-foreground mb-2 flex items-center gap-1 font-mono">
//           <MousePointerClick className="h-3 w-3" /> Scroll to explore
//         </span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </motion.div>
//     </section>
//   );
// };

import { ArrowDown, MousePointerClick, Sparkles, Github, Linkedin, Youtube, Volume2, VolumeX, Sun, Moon, Zap, Code2, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // --- Theme Toggle ---
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // --- Music Toggle ---
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const audioRef = useRef(null);
  const musicUrl = "/music.mp3";
  useEffect(() => {
    audioRef.current = new Audio(musicUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
    audioRef.current.preload = "auto";
    const handleCanPlay = () => setIsAudioReady(true);
    audioRef.current.addEventListener("canplaythrough", handleCanPlay);
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
        audioRef.current = null;
      }
    };
  }, []);
  const toggleMusic = () => {
    if (!audioRef.current || !isAudioReady) return;
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  // --- Floating Button State ---
  const [isHovered, setIsHovered] = useState(false);

  // --- Animations ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/80 to-red-500/5 px-4 pt-28 pb-24 sm:pt-24"
      ref={ref}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-500/10"
            style={{
              width: Math.random() * 10 + 2 + "px",
              height: Math.random() * 10 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main hero content */}
      <div className="container max-w-5xl mx-auto text-center z-10">
        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Tagline */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="mx-auto mb-4 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-mono text-red-500 sm:px-4 sm:text-sm md:text-base"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Sparkles className="h-3 w-3" />
              <span className="text-secondary">const</span> <span className="text-red-500">developer</span> = {"{"} fullstack: true {"}"}
            </motion.div>
          </motion.div>

          {/* Code-styled Name */}
          <motion.h1
            className="text-3xl font-bold tracking-tight font-mono sm:text-5xl md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            <span className="text-muted-foreground">{"<h1>"}</span>{" "}
            <span className="text-red-500">Satyam Gupta</span>{" "}
            <span className="text-muted-foreground">{"</h1>"}</span>
          </motion.h1>

          {/* Subtitle in terminal style */}
          <motion.p
            className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground font-mono sm:text-base md:text-lg lg:text-xl"
            variants={itemVariants}
          >
            <span className="text-green-500">$</span> npm run <span className="text-red-500">build</span> → <span className="text-secondary">"Crafting scalable apps & solving real-world problems"</span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col justify-center gap-4 pt-6 sm:flex-row sm:gap-6 sm:pt-8"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="relative cosmic-button group overflow-hidden rounded-md px-4 py-3 text-sm font-mono sm:px-6 md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{"<Explore My Work />"}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 opacity-100 group-hover:opacity-90 transition-opacity duration-300"></span>
            </motion.a>

            <motion.a
              href="#contact"
              className="relative outline-button group overflow-hidden rounded-md border-2 border-red-500/50 px-4 py-3 text-sm font-mono transition-colors hover:border-red-500 sm:px-6 md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">&lt;Let's Connect /&gt;</span>
              <span className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors duration-300"></span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Sidebar */}
      <motion.div
        className="fixed bottom-0 left-3 z-50 hidden flex-col items-center justify-end gap-3 sm:flex lg:left-6"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Social Links with enhanced animations */}
        <motion.a
          href="https://github.com/satyam-gupta93"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-2.5 rounded-lg bg-background/80 backdrop-blur-sm border border-transparent hover:border-red-500/30 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            layoutId="sidebar-hover"
          />
          <Github className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors relative z-10" />
          
          {/* Floating particles on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={false}
            animate={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-red-500 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 20],
                  y: [0, (Math.random() - 0.5) * 20],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            ))}
          </motion.div>
          
          {/* Tooltip */}
          <motion.div
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-background/90 backdrop-blur-sm border border-red-500/20 rounded text-xs font-mono text-red-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            GitHub
          </motion.div>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/satyam-gupta-000549304/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-2.5 rounded-lg bg-background/80 backdrop-blur-sm border border-transparent hover:border-red-500/30 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors relative z-10" />
          
          <motion.div
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-background/90 backdrop-blur-sm border border-red-500/20 rounded text-xs font-mono text-red-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            LinkedIn
          </motion.div>
        </motion.a>

        {/* Music button with enhanced animation */}
        <motion.button
          onClick={toggleMusic}
          disabled={!isAudioReady}
          className="relative group p-2.5 rounded-lg bg-background/80 backdrop-blur-sm border border-transparent hover:border-red-500/30 transition-all duration-300 disabled:opacity-40"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <motion.div
            animate={isMusicPlaying ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.6, repeat: isMusicPlaying ? Infinity : 0 }}
            className="relative z-10"
          >
            {isMusicPlaying ? (
              <Volume2 className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
            ) : (
              <VolumeX className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
            )}
          </motion.div>
          
          {/* Sound waves animation when playing */}
          {isMusicPlaying && (
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 flex gap-0.5">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-0.5 bg-green-500/60 rounded-full"
                  animate={{
                    height: [2, 8, 2],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}
          
          <motion.div
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-background/90 backdrop-blur-sm border border-red-500/20 rounded text-xs font-mono text-red-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            {isMusicPlaying ? 'Pause' : 'Play'} Music
          </motion.div>
        </motion.button>

        {/* Theme toggle with sun/moon transition */}
        <motion.button
          onClick={toggleTheme}
          className="relative group p-2.5 rounded-lg bg-background/80 backdrop-blur-sm border border-transparent hover:border-red-500/30 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <motion.div
            key={theme}
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="relative z-10"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-gray-400 group-hover:text-yellow-500 transition-colors" />
            ) : (
              <Moon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
            )}
          </motion.div>
          
          {/* Orbiting particles for theme button */}
          <motion.div className="absolute inset-0 pointer-events-none">
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 ${theme === 'dark' ? 'bg-yellow-400' : 'bg-blue-400'} rounded-full opacity-0 group-hover:opacity-60`}
                style={{
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: [0, Math.cos(i * 180 * Math.PI / 180) * 15],
                  y: [0, Math.sin(i * 180 * Math.PI / 180) * 15],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear"
                }}
              />
            ))}
          </motion.div>
          
          <motion.div
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-background/90 backdrop-blur-sm border border-red-500/20 rounded text-xs font-mono text-red-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </motion.div>
        </motion.button>

        {/* Animated bottom line */}
        <motion.div
          className="w-px h-24 bg-gradient-to-t from-red-500/50 via-red-500/20 to-transparent mt-4 relative overflow-hidden"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Moving gradient effect */}
          <motion.div
            className="absolute inset-0 w-full bg-gradient-to-t from-transparent via-red-500 to-transparent"
            animate={{
              y: ["-100%", "100%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Interesting Floating Button - Bottom Right */}
      <motion.div
        className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        <motion.button
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            window.open('mailto:satyamgupta9302@gmail.com', '_blank');
          }}
        >
          {/* Main button circle */}
          <motion.div
            className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-red-400 shadow-lg shadow-red-500/25 sm:h-14 sm:w-14"
            animate={{
              boxShadow: isHovered 
                ? "0 20px 40px rgba(239, 68, 68, 0.4)" 
                : "0 10px 20px rgba(239, 68, 68, 0.25)"
            }}
          >
            {/* Rotating background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.8, ease: "linear" }}
            />
            
            {/* Main icon */}
            <motion.div
              animate={{ rotate: isHovered ? 12 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Zap className="w-6 h-6 text-white drop-shadow-sm" />
            </motion.div>
          </motion.div>

          {/* Orbiting particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-500 rounded-full"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: isHovered 
                  ? [0, Math.cos(i * 120 * Math.PI / 180) * 35]
                  : [0, Math.cos(i * 120 * Math.PI / 180) * 25],
                y: isHovered 
                  ? [0, Math.sin(i * 120 * Math.PI / 180) * 35]
                  : [0, Math.sin(i * 120 * Math.PI / 180) * 25],
                scale: isHovered ? [1, 0.8, 1] : [1, 0.6, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear"
              }}
            />
          ))}

          {/* Tooltip */}
          <motion.div
            className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-background/90 backdrop-blur-sm border border-red-500/20 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
              scale: isHovered ? 1 : 0.8
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-xs font-mono text-red-500 whitespace-nowrap flex items-center gap-1">
              <Coffee className="w-3 h-3" />
              Let's chat!
            </span>
            {/* Arrow */}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-500/20" />
          </motion.div>

          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-red-500/30"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 transform flex-col items-center sm:flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1, 0], y: [0, 10, 0, -10] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
      >
        <span className="text-xs md:text-sm text-muted-foreground mb-2 flex items-center gap-1 font-mono">
          <MousePointerClick className="h-3 w-3" /> Scroll to explore
        </span>
        <ArrowDown className="h-5 w-5 text-red-500" />
      </motion.div>
    </section>
  );
};
