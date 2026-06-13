import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import sassIcon from "@/assets/icons/saas.png";
import jsIcon from "@/assets/icons/javascript.png";
import tsIcon from "@/assets/icons/typescript.png";
import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/nextjs.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressIcon from "@/assets/icons/express.png";
import mongodbIcon from "@/assets/icons/mongodb.png";
import postgresqlIcon from "@/assets/icons/postgresql.png";
import graphqlIcon from "@/assets/icons/graphql.png";
import javaIcon from "@/assets/icons/java.png";
import pythonIcon from "@/assets/icons/python.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import dockerIcon from "@/assets/icons/docker.png";
import firebaseIcon from "@/assets/icons/firebase.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import clearkIcon from "@/assets/icons/cleark.png";
import SQLIcon from "@/assets/icons/sql.png";
import MySQLIcon from "@/assets/icons/mysql.png";

const skills = [
  // Frontend
  { name: "HTML5", level: 95, category: "frontend", icon: "html" },
  { name: "CSS3", level: 90, category: "frontend", icon: "css" },
  { name: "SASS", level: 85, category: "frontend", icon: "sass" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "javascript" },
  { name: "TypeScript", level: 75, category: "frontend", icon: "typescript" },
  { name: "React", level: 90, category: "frontend", icon: "react" },
  { name: "Next.js", level: 75, category: "frontend", icon: "nextjs" },

  // Backend
  { name: "Node.js", level: 90, category: "backend", icon: "nodejs" },
  { name: "Express", level: 85, category: "backend", icon: "express" },
  { name: "MongoDB", level: 90, category: "backend", icon: "mongodb" },
  { name: "PostgreSQL", level: 65, category: "backend", icon: "postgresql" },
  { name: "GraphQL", level: 60, category: "backend", icon: "graphql" },
  { name: "Java", level: 60, category: "backend", icon: "java" },
  { name: "Python", level: 60, category: "backend", icon: "python" },

  // Tools
  { name: "Git", level: 90, category: "tools", icon: "git" },
  { name: "GitHub", level: 90, category: "tools", icon: "github" },
  { name: "Docker", level: 70, category: "tools", icon: "docker" },
  { name: "Firebase", level: 80, category: "tools", icon: "firebase" },
  { name: "VS Code", level: 95, category: "tools", icon: "vscode" },
  { name: "Cleark", level: 90, category: "tools", icon: "cleark" },
  { name: "SQL", level: 90, category: "tools", icon: "sql" },
  { name: "MySQL", level: 90, category: "tools", icon: "mysql" },
];

const categories = [
  { id: "all", label: "All Skills", color: "bg-gradient-to-r from-red-600 to-red-400" },
  { id: "frontend", label: "Frontend", color: "bg-gradient-to-r from-red-600 to-red-400" },
  { id: "backend", label: "Backend", color: "bg-gradient-to-r from-red-600 to-red-400" },
  { id: "tools", label: "Tools", color: "bg-gradient-to-r from-red-600 to-red-400" },
];

// Create an icon mapping object
const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  sass: sassIcon,
  javascript: jsIcon,
  typescript: tsIcon,
  react: reactIcon,
  nextjs: nextjsIcon,
  nodejs: nodejsIcon,
  express: expressIcon,
  mongodb: mongodbIcon,
  postgresql: postgresqlIcon,
  graphql: graphqlIcon,
  java: javaIcon,
  python: pythonIcon,
  git: gitIcon,
  github: githubIcon,
  docker: dockerIcon,
  firebase: firebaseIcon,
  vscode: vscodeIcon,
  cleark: clearkIcon,
  sql: SQLIcon,
  mysql: MySQLIcon,
  
};

const SkillBar = ({ level }) => {
  const variants = {
    initial: { width: 0 },
    animate: { 
      width: `${level}%`,
      transition: { 
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2
      }
    }
  };

  return (
    <div className="w-full h-3 bg-secondary/20 rounded-full overflow-hidden">
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        className={`h-full rounded-full ${level > 75 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 
                     level > 50 ? 'bg-gradient-to-r from-yellow-400 to-amber-500' : 
                     'bg-gradient-to-r from-red-400 to-pink-500'}`}
      />
    </div>
  );
};

const InfiniteScrollSkills = ({ skills }) => {
  // Duplicate skills for seamless looping
  const duplicatedSkills = [...skills, ...skills, ...skills];
  
  return (
    <div className="overflow-hidden py-5 sm:py-8">
      {/* First row */}
      <motion.div
        className="mb-6 flex gap-4 sm:mb-8 sm:gap-8"
        animate={{ 
          x: ["0%", "-100%"],
          transition: { 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          } 
        }}
      >
        {duplicatedSkills.map((skill, index) => {
          const iconSrc = iconImages[skill.icon];
          return (
            <div 
              key={`${skill.name}-${index}`} 
              className="flex-shrink-0 flex w-20 flex-col items-center gap-2 sm:w-24"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-500/50 bg-card shadow-lg transition-transform hover:scale-110 sm:h-16 sm:w-16">
                <img 
                  src={iconSrc} 
                  alt={skill.name} 
                  className="h-6 w-6 object-contain sm:h-8 sm:w-8" 
                />
              </div>
              <span className="text-center text-xs font-medium sm:text-sm">{skill.name}</span>
            </div>
          );
        })}
      </motion.div>
      
      {/* Second row (reverse direction) */}
      <motion.div
        className="flex gap-4 sm:gap-8"
        animate={{ 
          x: ["-100%", "0%"],
          transition: { 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          } 
        }}
      >
        {[...duplicatedSkills].reverse().map((skill, index) => {
          const iconSrc = iconImages[skill.icon];
          return (
            <div 
              key={`${skill.name}-reverse-${index}`} 
              className="flex-shrink-0 flex w-20 flex-col items-center gap-2 sm:w-24"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-500/50 bg-card shadow-lg transition-transform hover:scale-110 sm:h-16 sm:w-16">
                <img 
                  src={iconSrc} 
                  alt={skill.name} 
                  className="h-6 w-6 object-contain sm:h-8 sm:w-8" 
                />
              </div>
              <span className="text-center text-xs font-medium sm:text-sm">{skill.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative bg-gradient-to-br from-background via-red-500/5 to-background px-4 py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-14 lg:mb-20"
        >
          <h2 className="mb-4 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Technologies I've mastered and my proficiency levels
          </p>
        </motion.div>

        <motion.div 
          className="mb-10 flex flex-wrap justify-center gap-2 sm:mb-16 sm:gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={[
                "rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-sm md:text-base",
                "border border-transparent hover:shadow-lg",
                "flex items-center gap-2",
                activeCategory === category.id
                  ? `${category.color} text-white shadow-md`
                  : "bg-secondary/50 text-foreground hover:bg-secondary/70"
              ].join(" ")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {activeCategory === "all" ? (
          <InfiniteScrollSkills skills={skills} />
        ) : (
          <motion.div 
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => {
                const iconSrc = iconImages[skill.icon];
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group rounded-xl border border-border/30 bg-card p-4 shadow-sm transition-all duration-300 hover:border-red-500/50 hover:shadow-lg sm:rounded-2xl sm:p-6"
                  >
                    <div className="mb-5 flex items-start gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-red-500/50 bg-card sm:h-12 sm:w-12">
                        <img 
                          src={iconSrc} 
                          alt={skill.name} 
                          className="h-5 w-5 object-contain sm:h-6 sm:w-6" 
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="truncate text-base font-semibold transition-colors group-hover:text-red-500 sm:text-lg">
                            {skill.name}
                          </h3>
                          <span className={`shrink-0 rounded-full px-2 py-1 text-xs font-medium sm:text-sm 
                            ${skill.level > 75 ? 'bg-emerald-500/10 text-emerald-500' : 
                              skill.level > 50 ? 'bg-amber-500/10 text-amber-500' : 
                              'bg-pink-500/10 text-pink-500'}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <SkillBar level={skill.level} />
                        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                          <span>Basic</span>
                          <span>Advanced</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {filteredSkills.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground text-lg">No skills found in this category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

