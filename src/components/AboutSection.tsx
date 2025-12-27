import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Devineglobe Technology",
    role: "React Developer",
    duration: "1 Year 6 Months",
    current: true,
    url: "https://devineglobe.com/",
    highlights: [
      "Building scalable React applications for diverse clients",
      "Implementing modern UI/UX with performance optimization",
      "Collaborating with cross-functional teams on complex projects"
    ]
  },
  {
    company: "Excellent Web World",
    role: "React Developer",
    duration: "1 Year",
    current: false,
    url: "https://www.excellentwebworld.com/",
    highlights: [
      "Developed responsive web applications using React.js",
      "Integrated REST APIs and managed state with Redux",
      "Mentored junior developers on best practices"
    ]
  },
  {
    company: "The Special Character",
    role: "Full Stack Developer Intern",
    duration: "Paid Internship & Training",
    current: false,
    url: "https://thespecialcharacter.graphy.com/",
    highlights: [
      "Completed intensive full-stack development training",
      "Built end-to-end applications with React & Node.js",
      "Gained hands-on experience with real-world projects"
    ]
  }
];

const solveItems = [
  "Transform complex requirements into clean, maintainable code",
  "Improve application performance and user experience",
  "Build responsive interfaces that work across all devices",
  "Integrate modern technologies and third-party services",
  "Deliver projects on time with clear communication"
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-20" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A passionate React Developer with 2+ years of experience building 
            high-performance web applications that drive business results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-primary" />
              Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 pb-6 border-l-2 border-border last:border-transparent"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                  
                  <div className="card-gradient rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <div>
                        <h4 className="font-bold text-lg">{exp.role}</h4>
                        <a 
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          {exp.company}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <CheckCircle size={14} className="text-primary mt-1 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex items-center gap-3 text-muted-foreground"
            >
              <GraduationCap className="text-primary" />
              <span className="font-medium">B.Tech in Information Technology</span>
            </motion.div>
          </motion.div>

          {/* What I Solve */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8">
              Problems I <span className="gradient-text">Solve</span>
            </h3>
            
            <div className="card-gradient rounded-2xl p-8 border border-border">
              <ul className="space-y-6">
                {solveItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-primary" size={18} />
                    </div>
                    <span className="text-foreground text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/30"
            >
              <p className="text-lg text-foreground font-medium text-center">
                "I don't just write code — I craft solutions that 
                <span className="text-primary"> grow your business</span>."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
