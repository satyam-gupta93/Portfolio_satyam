// import React from 'react';
// import { Briefcase, Code, User, Download } from 'lucide-react';

// export const AboutSection = () => {
//   return (
//     <section id="about" className="relative overflow-hidden bg-background px-4 py-12 sm:px-6 md:py-20">
//       {/* Animated background elements - reduced size on mobile */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//         <div className="absolute top-1/3 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-0 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="container relative mx-auto max-w-6xl">
//         <div className="mb-10 text-center md:mb-16">
//           <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary mb-3 sm:mb-4 transition-all duration-300 hover:scale-105 hover:bg-primary/20">
//             About Me
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold transition-all duration-500 hover:text-primary/80">
//             Crafting Digital <span className="text-primary hover:text-primary/70 transition-colors duration-300">Experiences</span>
//           </h2>
//         </div>

//         <div className="flex flex-col items-stretch gap-5 md:gap-8 lg:flex-row">
//           {/* Left Column - Profile Card */}
//           <div className="group lg:w-1/2">
//             <div className="h-full bg-muted/20 border border-muted rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
//               <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
//                 <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 transition-all duration-300 group-hover:border-primary/50 group-hover:scale-110 mx-auto sm:mx-0">
//                   <img
//                     src="/profile-logo.png"
//                     alt="Profile Picture"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="text-center sm:text-left">
//                   <h3 className="text-lg sm:text-xl font-bold transition-colors duration-300 group-hover:text-primary">Personal Profile</h3>
//                   <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">Full Stack Developer</p>
//                 </div>
//               </div>

//               <div className="space-y-4 md:space-y-6">
//                 <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 sm:text-base">
//                   I specialize in building modern web applications with a focus on performance,
//                   accessibility, and user experience. My approach combines technical expertise
//                   with creative problem-solving to deliver impactful digital solutions.
//                 </p>

//                 <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
//                   <div className="bg-background p-3 sm:p-4 rounded-lg border border-muted transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:scale-[1.02]">
//                     <h4 className="text-sm sm:text-base font-semibold text-primary transition-colors duration-300 hover:text-primary/80">Frontend</h4>
//                     <p className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">React, Next.js, Tailwind</p>
//                   </div>
//                   <div className="bg-background p-3 sm:p-4 rounded-lg border border-muted transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:scale-[1.02]">
//                     <h4 className="text-sm sm:text-base font-semibold text-primary transition-colors duration-300 hover:text-primary/80">Backend</h4>
//                     <p className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">Node.js, Express, Java</p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-3 pt-4 sm:flex-row md:gap-4">
//                   <a
//                     href="#contact"
//                     className="px-4 py-2 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 text-center hover:shadow-md hover:scale-[1.02] active:scale-95 text-sm sm:text-base"
//                   >
//                     Contact Me
//                   </a>

//                   <a
//                     href="/Satyam_Gupta_IIIT_Nagpur_Resume.pdf"
//                     className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg border border-muted hover:bg-muted/50 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-md hover:scale-[1.02] active:scale-95 text-sm sm:text-base"
//                     download
//                   >
//                     <Download className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 hover:translate-y-0.5" />
//                     Resume
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Details */}
//           <div className="space-y-4 md:space-y-6 lg:w-1/2">
//             <div className="bg-muted/20 border border-muted rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
//               <div className="flex items-start gap-3 md:gap-4">
//                 <div className="p-2 md:p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-110">
//                   <Code className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 hover:rotate-12" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg md:text-xl font-bold mb-2 transition-colors duration-300 hover:text-primary">Development Philosophy</h3>
//                   <p className="text-sm md:text-base text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
//                     I believe in writing clean, maintainable code with thorough documentation.
//                     My development process emphasizes testing, performance optimization, and
//                     progressive enhancement.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-muted/20 border border-muted rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
//               <div className="flex items-start gap-3 md:gap-4">
//                 <div className="p-2 md:p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-110">
//                   <Briefcase className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 hover:rotate-12" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg md:text-xl font-bold mb-2 transition-colors duration-300 hover:text-primary">Professional Approach</h3>
//                   <p className="text-sm md:text-base text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
//                     With experience in both startups and enterprise environments,
//                     I adapt my workflow to project needs. I value clear communication,
//                     agile methodologies, and continuous learning.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 md:gap-4">
//               <div className="bg-muted/20 border border-muted rounded-xl md:rounded-2xl p-4 md:p-6 text-center transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
//                 <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2 transition-all duration-300 hover:scale-110">15+</div>
//                 <div className="text-xs md:text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">Projects Completed</div>
//               </div>
//               <div className="bg-muted/20 border border-muted rounded-xl md:rounded-2xl p-4 md:p-6 text-center transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
//                 <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2 transition-all duration-300 hover:scale-110">100%</div>
//                 <div className="text-xs md:text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">Client Satisfaction</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import React from 'react';
import { Briefcase, Code, Download } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about"
      className="relative overflow-hidden bg-background px-4 py-12 sm:px-6 md:py-20">

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-3rem] top-0 h-44 w-44 rounded-full bg-red-500/10 opacity-20 mix-blend-multiply blur-3xl filter animate-blob sm:left-1/4 sm:h-56 sm:w-56 md:h-72 md:w-72"></div>
        <div className="absolute right-[-3rem] top-1/3 h-44 w-44 rounded-full bg-red-500/10 opacity-20 mix-blend-multiply blur-3xl filter animate-blob animation-delay-2000 sm:right-1/4 sm:h-56 sm:w-56 md:h-72 md:w-72"></div>
        <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-red-500/10 opacity-20 mix-blend-multiply blur-3xl filter animate-blob animation-delay-4000 sm:left-1/2 sm:h-56 sm:w-56 md:h-72 md:w-72"></div>
      </div>

      <div className="container relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-10 text-center md:mb-16">
          <span className="mb-3 inline-block rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-500 transition-all duration-300 hover:scale-105 hover:bg-red-500/20 sm:mb-4 sm:text-sm">
            About Me
          </span>
          <h2 className="text-3xl font-bold leading-tight transition-all duration-500 hover:text-red-500/80 sm:text-4xl md:text-5xl">
            Crafting Digital{' '}
            <span className="text-red-500 hover:text-red-500/70 transition-colors duration-300">Experiences</span>
          </h2>
        </div>

        <div className="flex flex-col items-stretch gap-5 md:gap-8 lg:flex-row">

          {/* Left — Profile Card */}
          <div className="group lg:w-1/2">
            <div className="h-full rounded-xl border border-muted bg-muted/20 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:bg-muted/30 hover:shadow-xl sm:p-6 md:rounded-2xl md:p-8">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full border-2 border-red-500/30 transition-all duration-300 group-hover:scale-110 group-hover:border-red-500/50 sm:mx-0">
                  <img src="/profile-logo.jpeg" alt="Profile Picture" className="w-full h-full object-cover" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold transition-colors duration-300 group-hover:text-red-500">Personal Profile</h3>
                  <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">Full Stack Developer</p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 sm:text-base">
                  I specialize in building modern web applications with a focus on performance,
                  accessibility, and user experience. My approach combines technical expertise
                  with creative problem-solving to deliver impactful digital solutions.
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
                  <div className="rounded-lg border border-muted bg-background p-3 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/50 hover:shadow-md sm:p-4">
                    <h4 className="text-sm sm:text-base font-semibold text-red-500">Frontend</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">React, Next.js, Tailwind</p>
                  </div>
                  <div className="rounded-lg border border-muted bg-background p-3 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/50 hover:shadow-md sm:p-4">
                    <h4 className="text-sm sm:text-base font-semibold text-red-500">Backend</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Node.js, Express, Java</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4 sm:flex-row md:gap-4">
                  <a href="#contact"
                    className="rounded-lg bg-red-500 px-4 py-2 text-center text-sm text-white transition-all duration-300 hover:scale-[1.02] hover:bg-red-500/90 hover:shadow-md active:scale-95 sm:px-6 sm:py-3 sm:text-base">
                    Contact Me
                  </a>
                  <a href="/Satyam_Gupta_IIIT_Nagpur_Resume.pdf"
                    className="flex items-center justify-center gap-2 rounded-lg border border-red-500/50 px-4 py-2 text-sm transition-all duration-300 hover:scale-[1.02] hover:border-red-500 hover:bg-muted/50 hover:shadow-md active:scale-95 sm:px-6 sm:py-3 sm:text-base"
                    download>
                    <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Details */}
          <div className="space-y-4 md:space-y-6 lg:w-1/2">
            <div className="rounded-xl border border-muted bg-muted/20 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:bg-muted/30 hover:shadow-xl sm:p-6 md:rounded-2xl md:p-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="shrink-0 rounded-lg bg-red-500/10 p-2 text-red-500 transition-all duration-300 hover:scale-110 hover:bg-red-500/20 md:p-3">
                  <Code className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-bold transition-colors duration-300 hover:text-red-500 sm:text-lg md:text-xl">Development Philosophy</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    I believe in writing clean, maintainable code with thorough documentation.
                    My development process emphasizes testing, performance optimization, and
                    progressive enhancement.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-muted bg-muted/20 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:bg-muted/30 hover:shadow-xl sm:p-6 md:rounded-2xl md:p-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="shrink-0 rounded-lg bg-red-500/10 p-2 text-red-500 transition-all duration-300 hover:scale-110 hover:bg-red-500/20 md:p-3">
                  <Briefcase className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-bold transition-colors duration-300 hover:text-red-500 sm:text-lg md:text-xl">Professional Approach</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    With experience in both startups and enterprise environments,
                    I adapt my workflow to project needs. I value clear communication,
                    agile methodologies, and continuous learning.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 md:gap-4">
              <div className="rounded-xl border border-muted bg-muted/20 p-4 text-center transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:bg-muted/30 hover:shadow-xl md:rounded-2xl md:p-6">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1 md:mb-2 transition-all duration-300 hover:scale-110">15+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="rounded-xl border border-muted bg-muted/20 p-4 text-center transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:bg-muted/30 hover:shadow-xl md:rounded-2xl md:p-6">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1 md:mb-2 transition-all duration-300 hover:scale-110">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


