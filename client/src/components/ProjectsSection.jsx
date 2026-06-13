import { ArrowRight, ExternalLink, Github, ChevronUp, Star, Code, ChevronDown, MoveRight } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Arogya",
    category: "AI-Powered Healthcare Platform",
    description: "Full-stack healthcare platform for doctor discovery, appointment scheduling, EHR management, JWT role access, and multi-workflow dashboards.",
    image: "/projects/arogya.png",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    demoUrl: "https://innov8tech-frontend-lh4p.onrender.com/",
    githubUrl: "https://github.com/satyam-gupta93/Innov8Tech.git",
    featured: true,
    accentColor: "from-red-600 to-red-400"
  },
  {
    id: 2,
    title: "LoopTalk",
    category: "Real-Time Communication",
    description: "Real-time video conferencing and chat app with WebRTC peer connections, Socket.IO signaling, rooms, sender identity, and live synchronization.",
    image: "/projects/looptalk.png",
    tags: ["React.js", "Node.js", "Express.js", "Socket.IO", "WebRTC"],
    demoUrl: "https://loop-talk-theta.vercel.app/",
    githubUrl: "https://github.com/satyam-gupta93/LOOPTALK",
    featured: true,
    accentColor: "from-red-600 to-red-400"
  },
  {
    id: 3,
    title: "FoodiFy",
    category: "E-Commerce Platform",
    description: "Scalable food ordering app with real-time order tracking, secure payments, JWT role access, REST APIs, and an AI assistant for recommendations.",
    image: "/projects/foodify.png",
    tags: ["React.js", "Node.js", "JWT", "Cloudinary", "LangChain"],
    demoUrl: "#",
    githubUrl: "https://github.com/satyam-gupta93/HungerPoint.git",
    featured: true,
    accentColor: "from-red-600 to-red-400"
  },
  {
    id: 4,
    title: "GitPlex",
    category: "Version Control Platform",
    description: "Git-inspired VCS with staging, commits, push, pull, revert, remote commit storage, JWT auth, and repository-scoped issue tracking.",
    image: "/projects/gitplex.png",
    tags: ["Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT", "Yargs"],
    demoUrl: "#",
    githubUrl: "https://github.com/satyam-gupta93/Gitplex.git",
    featured: true,
    accentColor: "from-red-600 to-red-400"
  },
  {
  id: 5,
  title: "FreshMart",
  category: "E-Commerce Platform",
  description:
    "Modern mobile-first grocery delivery platform with simulated authentication, OTP verification, real-time search debouncing, cart management, coupon system, checkout flow, order tracking, and responsive UI.",
  image: "/projects/freshmart.png",
  tags: [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "Responsive Design"
  ],
  demoUrl: "https://ahoum-frontend-fresh-mart.vercel.app/",
  githubUrl: "https://github.com/satyam-gupta93/Ahoum_Frontend_FreshMart",
  featured: true,
  accentColor: "from-red-600 to-red-400"
},
{
  id: 6,
  title: "NPL Auction System",
  category: "Real-Time Communication",
  description:
    "Full-stack MERN auction platform for IIIT Nagpur Premier League (NPL) featuring real-time Socket.io bidding, live auction rooms, team purse management, countdown timers, auction history tracking, and role-based auctioneer controls.",
  image: "/projects/npl.png",
  tags: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "Socket.io",
    "Tailwind CSS"
  ],
  demoUrl: "https://npl-iiitn.vercel.app/",
  githubUrl: "https://github.com/satyam-gupta93/NPL_iiitn",
  featured: true,
  accentColor: "from-red-600 to-red-400"
}
  
];

const categoryColors = {
  "Version Control Platform": "bg-red-500/10 text-red-500 dark:bg-red-500/10 dark:text-red-400",
  "Real-Time Communication": "bg-red-500/10 text-red-500 dark:bg-red-500/10 dark:text-red-400",
  "Food Ordering Platform": "bg-red-500/10 text-red-500 dark:bg-red-500/10 dark:text-red-400",
  "AI-Powered Healthcare Platform": "bg-red-500/10 text-red-500 dark:bg-red-500/10 dark:text-red-400",
  "E-Commerce Platform": "bg-red-500/10 text-red-500 dark:bg-red-500/10 dark:text-red-400"
};

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.15, 0.1]);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  return (
    <section 
      id="projects" 
      className="relative overflow-hidden py-14 sm:py-16 md:py-24 lg:py-32"
      ref={sectionRef}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent"></div>
      </motion.div>
      
      {/* Floating animated orbs */}
      <motion.div 
        className="absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-red-500/10 blur-3xl"
        animate={{
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-red-500/10 blur-3xl"
        animate={{
          x: [20, -20, 20],
          y: [10, -10, 10],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header with animation */}
        <motion.div 
          className="mb-10 text-center md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.span 
            className="mb-4 inline-flex max-w-full flex-wrap items-center justify-center gap-2 text-center text-[0.68rem] font-medium uppercase tracking-widest text-red-500/80 sm:text-xs md:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-8 md:w-12 h-px bg-red-500/50"></div>
            PROJECT PORTFOLIO
            <div className="w-8 md:w-12 h-px bg-red-500/50"></div>
          </motion.span>
          
          <motion.h2 
            className="mb-4 text-3xl font-bold sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Selected </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
              Works
            </span>
          </motion.h2>
          
          <motion.p 
            className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:text-xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A curated collection of my most impactful digital solutions, blending innovative design with robust functionality.
          </motion.p>
        </motion.div>

        {/* Interactive filter tabs - Desktop */}
        <div className="mb-12 hidden justify-center md:flex">
          <motion.div 
            className="flex max-w-full flex-wrap justify-center gap-1 rounded-2xl border border-muted-foreground/10 bg-muted p-1 shadow-sm lg:rounded-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setShowAll(false);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 lg:px-5 lg:text-sm ${
                  activeFilter === category
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Mobile filter dropdown */}
        <div className="relative mx-auto mb-8 max-w-xs md:hidden">
          <motion.button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-between gap-3 rounded-lg border border-muted-foreground/20 bg-background px-4 py-3 text-left shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="truncate">{activeFilter}</span>
            <ChevronDown 
              size={16} 
              className={`transition-transform duration-200 ${isMobileFilterOpen ? "rotate-180" : ""}`}
            />
          </motion.button>
          <AnimatePresence>
            {isMobileFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-10 mt-1 w-full bg-background border border-muted-foreground/20 rounded-lg shadow-lg overflow-hidden"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveFilter(category);
                      setIsMobileFilterOpen(false);
                      setShowAll(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      activeFilter === category
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted/50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Projects grid - Enhanced masonry layout */}
        <div className="grid grid-cols-1 gap-5 auto-rows-fr sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl bg-card border border-muted/20 hover:border-red-500/30 transition-all duration-500 hover:shadow-lg"
              >
                {/* Gradient accent */}
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${project.accentColor}`}></div>
                
                {/* Featured badge */}
                {project.featured && (
                  <motion.div 
                    className="absolute right-3 top-3 z-10 flex items-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 px-2 py-1 text-[0.65rem] font-bold text-amber-900 shadow-md sm:right-4 sm:top-4 sm:px-2.5 sm:text-[0.7rem]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Star size={12} className="mr-1" /> Featured
                  </motion.div>
                )}

                {/* Project image with hover effect */}
                <div className="relative h-44 overflow-hidden sm:h-52 md:h-56">
                  <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 opacity-100 transition-opacity duration-500 sm:p-5 md:opacity-0 md:group-hover:opacity-100">
                    <motion.p 
                      className="text-xs text-white/90 transition-transform duration-500 md:translate-y-5 md:text-sm md:group-hover:translate-y-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Project content */}
                <div className="p-4 pt-3 sm:p-5 sm:pt-3">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-base font-bold text-foreground transition-colors duration-300 group-hover:text-red-500 sm:text-lg">
                      {project.title}
                    </h3>
                    <span className={`w-fit rounded px-2 py-1 text-[0.68rem] font-medium leading-tight sm:text-xs ${
                      categoryColors[project.category] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`px-2 py-0.5 text-[0.7rem] font-medium rounded-full ${
                          tag.includes("Coming")
                            ? "bg-destructive/10 text-destructive border border-destructive/20"
                            : "bg-muted/80 text-foreground/80 hover:bg-red-500 hover:text-white"
                        } transition-colors duration-300`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col gap-3 border-t border-muted/20 pt-3 min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-medium sm:text-sm ${
                        project.demoUrl === "#"
                          ? "text-muted-foreground cursor-not-allowed"
                          : "text-foreground/80 hover:text-red-500 group"
                      } transition-colors duration-300`}
                      onClick={(e) => project.demoUrl === "#" && e.preventDefault()}
                    >
                      <ExternalLink size={15} />
                      {project.demoUrl === "#" ? "Coming Soon" : "Live Demo"}
                      <MoveRight size={13} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-medium sm:text-sm ${
                        project.githubUrl === "#"
                          ? "text-muted-foreground cursor-not-allowed"
                          : "text-foreground/80 hover:text-red-500 group"
                      } transition-colors duration-300`}
                      onClick={(e) => project.githubUrl === "#" && e.preventDefault()}
                    >
                      <Code size={15} />
                      {project.githubUrl === "#" ? "Private" : "View Code"}
                      <MoveRight size={13} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more/less button */}
        {filteredProjects.length > 3 && (
          <motion.div 
            className="text-center mt-12 md:mt-16"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                showAll
                  ? "bg-muted text-foreground hover:bg-muted/90 border border-muted-foreground/20"
                  : "bg-gradient-to-r from-red-600 to-red-400 text-white hover:shadow-lg"
              }`}
            >
              {showAll ? (
                <>
                  Show Less Projects
                  <ChevronUp size={18} className="ml-2" />
                </>
              ) : (
                <>
                  View All Projects ({filteredProjects.length})
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* CTA section */}
        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-3xl rounded-xl border border-muted-foreground/10 bg-gradient-to-r from-muted/30 to-muted/10 p-5 sm:p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Have a project in mind?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and exceptional design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-400 text-white font-medium hover:shadow-md transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={16} className="ml-2" />
              </motion.a>
              <motion.a
                href="https://github.com/satyam-gupta93"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-transparent text-foreground font-medium hover:bg-muted transition-all duration-300 border border-muted-foreground/30 hover:border-red-500/50"
              >
                Explore GitHub
                <Github size={16} className="ml-2" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

