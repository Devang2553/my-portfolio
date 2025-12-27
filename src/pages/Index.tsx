import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyHireMeSection from "@/components/WhyHireMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Devang Prajapati | React Developer - Building High-Performance Web Apps</title>
        <meta 
          name="description" 
          content="Hire Devang Prajapati, a skilled React Developer with 2+ years of experience building scalable, high-performance web applications. Available for freelance and full-time opportunities." 
        />
        <meta name="keywords" content="React Developer, Frontend Developer, TypeScript, JavaScript, Web Development, Freelance Developer" />
        <meta property="og:title" content="Devang Prajapati | React Developer" />
        <meta property="og:description" content="Building exceptional digital experiences that help businesses scale faster and convert more." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://devangprajapati.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <WhyHireMeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
