import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Redux", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "Git", level: 88, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "Responsive Design", level: 95, category: "other" },
];

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Next.js", icon: "▲" },
  { name: "Redux", icon: "🔄" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Git", icon: "📦" },
  { name: "REST API", icon: "🔌" },
  { name: "HTML5", icon: "📄" },
  { name: "CSS3", icon: "🎯" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit refined over 2+ years of professional
            development
          </p>
        </motion.div>

        {/* Technology Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all cursor-default"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
              className="group"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-muted-foreground font-mono text-sm">
                  {skill.level}%
                </span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.05,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(199,89%,48%)]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "5+", label: "Projects Completed" },
            { value: "3", label: "Companies Worked" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.9 + index * 0.1,
                  type: "spring",
                }}
                className="text-4xl sm:text-5xl font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
