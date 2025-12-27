import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Play, X, Briefcase, User } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectType = "office" | "freelance";

interface Project {
  title: string;
  description: string;
  tech: string[];
  type: ProjectType;
  videoUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with product management, cart functionality, and secure checkout process.",
    tech: ["React", "TypeScript", "Redux", "Node.js", "MongoDB"],
    type: "office",
    liveUrl: "#",
  },
  {
    title: "Real Estate Dashboard",
    description: "Analytics dashboard for property management with interactive charts, property listings, and lead tracking.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    type: "office",
    liveUrl: "#",
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling, medical records, and telemedicine integration.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    type: "office",
    liveUrl: "#",
  },
  {
    title: "Restaurant Ordering App",
    description: "Mobile-first food ordering application with menu management, order tracking, and payment integration.",
    tech: ["React", "Redux", "Stripe", "Firebase"],
    type: "freelance",
    liveUrl: "#",
  },
  {
    title: "Portfolio for Photographer",
    description: "Stunning visual portfolio showcasing photography work with gallery views and client inquiry forms.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    type: "freelance",
    liveUrl: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "Personal fitness companion with workout plans, progress tracking, and nutrition logging features.",
    tech: ["React", "TypeScript", "Chart.js", "Node.js"],
    type: "freelance",
    liveUrl: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<"all" | ProjectType>("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.type === filter
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-20" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            A selection of projects I've worked on across different companies and as a freelancer
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { value: "all", label: "All Projects", icon: null },
              { value: "office" as ProjectType, label: "Office Projects", icon: Briefcase },
              { value: "freelance" as ProjectType, label: "Freelance", icon: User },
            ].map((btn) => (
              <Button
                key={btn.value}
                variant={filter === btn.value ? "default" : "secondary"}
                onClick={() => setFilter(btn.value as typeof filter)}
                className="gap-2"
              >
                {btn.icon && <btn.icon size={16} />}
                {btn.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card-gradient rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Project Image/Preview */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-[hsl(199,89%,48%)]/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-foreground/20">
                      {project.title.split(" ").map(w => w[0]).join("")}
                    </span>
                  </div>
                  
                  {project.videoUrl && (
                    <button
                      onClick={() => setSelectedVideo(project.videoUrl!)}
                      className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <Play className="text-primary-foreground ml-1" size={24} />
                      </div>
                    </button>
                  )}
                  
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.type === "office" 
                        ? "bg-primary/20 text-primary" 
                        : "bg-secondary text-secondary-foreground"
                    }`}>
                      {project.type === "office" ? "Office" : "Freelance"}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-md bg-muted text-xs font-mono text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline font-medium text-sm"
                    >
                      <ExternalLink size={14} />
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative max-w-4xl w-full aspect-video bg-card rounded-xl overflow-hidden">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
              >
                <X size={20} />
              </button>
              <iframe
                src={selectedVideo}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
