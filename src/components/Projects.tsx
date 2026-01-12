
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import AnimatedText from "./AnimatedText";

const projects = [
  {
    title: "Waste Classification Model",
    description: "Machine learning model that classifies waste items into recyclable, organic, and non-recyclable categories with high accuracy.",
    tags: ["Machine Learning", "Python", "Computer Vision", "AI"],
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com/Manideep667320/Waste_Classification_Model_Website"
  },
  {
    title: "Attendance Management System",
    description: "Automated system for tracking student attendance using facial recognition and generating analytical reports.",
    tags: ["Python", "OpenCV", "Database", "GUI"],
    imageUrl: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com/Manideep667320/Attendance_Management_System_Using_Face_Recognition"
  },
  {
    title: "Emotion Detection System",
    description: "Real-time facial recognition system that detects and analyzes human emotions for various applications.",
    tags: ["Computer Vision", "Deep Learning", "Python", "TensorFlow"],
    imageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com/Manideep667320/ShadowFox/tree/main/Image%20tagging"
  },
  {
    title: "Personal Portfolio Website",
    description: "Responsive portfolio website showcasing my skills, projects, and achievements using modern web technologies.",
    tags: ["React", "Tailwind CSS", "Frontend", "UI/UX"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    githubUrl: ""
  }
];

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <motion.span
            className="text-accent text-sm font-medium mb-2 inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            MY WORK
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <AnimatedText text="Featured Projects" once={true} />
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A collection of AI/ML and software development projects that showcase my technical skills and expertise.
          </p>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 stagger-container ${isInView ? 'active' : ''}`}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;