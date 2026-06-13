import {
  ArrowUp,
  Linkedin,
  Github,
  Mail,
  Phone,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/satyam-gupta-000549304/", label: "LinkedIn" },
    { icon: <Github size={18} />, href: "https://github.com/satyam-gupta93", label: "GitHub" },
    { icon: <Code size={18} />, href: "https://leetcode.com/u/satyamgupta9302/", label: "LeetCode" },
    { icon: <Code size={18} />, href: "https://www.geeksforgeeks.org/user/satyamgulcgq/", label: "GFG" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: "satyamgupta9302@gmail.com", href: "mailto:satyamgupta9302@gmail.com" },
    { icon: <Phone size={16} />, text: "+91-9302596940", href: "tel:+919302596940" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="px-4 sm:px-6 py-12 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Glass background container */}
        <motion.div 
          className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 rounded-xl p-8 border border-red-500/10 dark:border-red-500/20 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-[1.35fr_0.75fr_1.25fr_1fr] lg:gap-8">
            {/* Branding */}
            <motion.div variants={itemVariants} className="space-y-4 md:max-w-sm">
              <h3 className="text-xl font-bold text-red-500">Satyam Gupta</h3>
              <p className="mx-auto max-w-sm text-gray-600 dark:text-gray-300 text-sm md:mx-0">
                Full stack developer building clean, scalable, and user-focused web experiences.
              </p>
              <div className="flex justify-center gap-4 md:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500 transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants} className="md:max-w-xs">
              <h4 className="text-gray-900 dark:text-white font-medium mb-4 text-sm uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href={link.href} 
                      className="hover:text-red-500 transition-colors duration-300 text-sm text-gray-600 dark:text-gray-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="text-gray-900 dark:text-white font-medium mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start justify-center gap-3 text-sm md:justify-start"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-red-500 mt-0.5">{info.icon}</span>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="hover:text-red-500 transition-colors duration-300 text-gray-600 dark:text-gray-300 break-all"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-600 dark:text-gray-300">{info.text}</span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Call to action */}
            <motion.div variants={itemVariants} className="space-y-4 md:max-w-xs">
              <h4 className="text-gray-900 dark:text-white font-medium text-sm uppercase tracking-wider">Let's Build</h4>
              <p className="mx-auto max-w-sm text-gray-600 dark:text-gray-300 text-sm md:mx-0">
                Have an idea, internship opportunity, or project in mind? I would love to hear from you.
              </p>
              <a
                href="#contact"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-md bg-gradient-to-r from-red-600 to-red-400 px-4 py-2 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-90 md:max-w-none"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div 
            className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-gray-200 pt-8 text-center text-xs text-gray-600 dark:border-gray-700/50 dark:text-gray-400 sm:flex-row sm:justify-between sm:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <p>&copy; {currentYear} Satyam Gupta. All rights reserved.</p>
            </div>
            
            <div className="flex items-center">
              <motion.a
                href="#hero"
                aria-label="Back to top"
                className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={16} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
