import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, MessageCircle, Star, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "I deliver high-quality work on time, every time. No excuses, just results.",
  },
  {
    icon: Shield,
    title: "Clean Code",
    description: "Scalable, maintainable code that's built to last and easy to extend.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "Regular updates, quick responses, and transparent project progress.",
  },
  {
    icon: Star,
    title: "Quality First",
    description: "Pixel-perfect UI, smooth animations, and polished user experience.",
  },
  {
    icon: Clock,
    title: "Reliable Partner",
    description: "2+ years of professional experience with a track record of success.",
  },
  {
    icon: Heart,
    title: "Passionate",
    description: "I genuinely care about your project's success as much as you do.",
  },
];

const WhyHireMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-hire-me" className="py-24 relative bg-secondary/30">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="gradient-text">Hire Me</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            When you work with me, you're not just hiring a developer — 
            you're gaining a dedicated partner invested in your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="card-gradient rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <reason.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="card-gradient rounded-3xl p-8 md:p-12 border border-primary/30 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-[hsl(199,89%,48%)]/10" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Build Something <span className="gradient-text">Amazing</span>?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's turn your ideas into reality. I'm currently available for new projects 
                and would love to hear about yours.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">Start a Conversation</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMeSection;
