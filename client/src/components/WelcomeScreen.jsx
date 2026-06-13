

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TerminalSquare, Code, Loader2 } from "lucide-react";
import { useTheme } from "next-themes";

// A new component for the numerical loading animation
const LoadingCounter = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 1500; // milliseconds
    const interval = 15; // milliseconds

    const increment = (end / duration) * interval;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(100);
        clearInterval(timer);
        if (onComplete) onComplete();
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono">
      <span>[</span>
      <span style={{ color: "#ef4444" }} className="">{count}%</span>
      <span>]</span>
    </div>
  );
};

const WelcomeScreen = ({ onWelcomeComplete }) => {
  const [phase, setPhase] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [typedText, setTypedText] = useState("");
  const { theme } = useTheme();

  const colors = {
    light: {
      primary: "#ef4444", // Red accent
      secondary: "#f87171", // Lighter red accent
      background: "hsl(222 47% 4%)", // Your requested background color
      muted: "hsl(215 20.2% 65.1%)", // Gray for secondary text
      link: "#ef4444", // Red font accent
    },
    dark: {
      primary: "#ef4444",
      secondary: "#f87171",
      background: "hsl(222 47% 4%)",
      muted: "hsl(215 20.2% 65.1%)",
      link: "#ef4444",
    }
  };

  const currentColors = colors[theme] || colors.dark;
  const portfolioUrl = "https://portfolio-satyam-one.vercel.app";
  const welcomeMessages = [
    "Initializing systems",
    "Compiling data streams",
    "Authenticating user: Satyam"
  ];

  useEffect(() => {
    const phase1 = setTimeout(() => setPhase(1), 500);
    const phase2 = setTimeout(() => setPhase(2), 1500);
    const phase3 = setTimeout(() => setPhase(3), 3500);
    const complete = setTimeout(() => {
      setExitAnimation(true);
      setTimeout(onWelcomeComplete, 1000);
    }, 6000);

    return () => {
      clearTimeout(phase1);
      clearTimeout(phase2);
      clearTimeout(phase3);
      clearTimeout(complete);
    };
  }, [onWelcomeComplete]);

  useEffect(() => {
    if (phase === 1) {
      let i = 0;
      const typingInterval = setInterval(() => {
        const message = "Accessing Satyam's Dev_Log...";
        if (i <= message.length) {
          setTypedText(message.substring(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 40);

      return () => clearInterval(typingInterval);
    }
  }, [phase]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const contentVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: { duration: 1, repeat: Infinity }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <motion.div
        className="h-full w-full flex items-center justify-center p-4"
        style={{ backgroundColor: currentColors.background }}
        variants={containerVariants}
        initial="hidden"
        animate={exitAnimation ? "exit" : "visible"}
      >
        {/* Background */}
        <motion.div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full blur-[50px] md:blur-[100px]"
            style={{ 
              background: `linear-gradient(to right, ${currentColors.primary}, ${currentColors.secondary})`
            }}
            animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/4 w-36 h-36 md:w-72 md:h-72 rounded-full blur-[60px] md:blur-[120px]"
            style={{ 
              background: `linear-gradient(to right, ${currentColors.secondary}, #dc2626)`
            }}
            animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
        </motion.div>

        <div className="w-full max-w-2xl mx-auto text-center px-4">
          <motion.div className="space-y-4 md:space-y-8">
            {phase >= 0 && (
              <motion.div variants={contentVariants}>
                <motion.div 
                  className="text-sm md:text-lg lg:text-xl font-mono mb-2 md:mb-4 inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full border"
                  style={{
                    color: currentColors.link,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <Code className="h-3 w-3 md:h-4 md:w-4" />
                  {welcomeMessages[0]}
                </motion.div>
              </motion.div>
            )}

            {phase >= 1 && (
              <motion.div variants={contentVariants}>
                <motion.p 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-mono"
                  style={{ color: currentColors.muted }}
                >
                  {typedText}
                  <motion.span 
                    className="ml-0.5 h-4 sm:h-5 md:h-6 w-0.5 sm:w-1 inline-block"
                    style={{ backgroundColor: currentColors.link }}
                    variants={cursorVariants}
                    animate="blinking"
                  />
                </motion.p>
              </motion.div>
            )}

            {phase >= 2 && (
              <motion.div className="pt-4 sm:pt-6 md:pt-8" variants={contentVariants}>
                <LoadingCounter />
                <motion.p 
                  className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base font-mono tracking-wider"
                  style={{ color: currentColors.link, textShadow: `0 0 8px ${currentColors.link}` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  {"C:/"}{">"}{portfolioUrl}
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
