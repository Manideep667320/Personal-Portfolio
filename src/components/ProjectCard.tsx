<<<<<<< HEAD

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  delay?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  githubUrl, 
  delay = 0 
}: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);

  const handleProjectClick = () => {
    window.open(githubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl glass h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      
      <div className="relative h-48 md:h-64 overflow-hidden">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
          animate={{ 
            scale: hovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <div className="relative p-6 z-20">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-between p-6 opacity-0 group-hover:opacity-100"
          initial={{ y: 20 }}
          animate={{ y: hovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <button 
            className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm flex items-center gap-2"
            onClick={handleProjectClick}
          >
            View Project <ExternalLink size={16} />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
=======

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  delay?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  githubUrl, 
  delay = 0 
}: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);

  const handleProjectClick = () => {
    window.open(githubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl glass h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      
      <div className="relative h-48 md:h-64 overflow-hidden">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
          animate={{ 
            scale: hovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <div className="relative p-6 z-20">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-between p-6 opacity-0 group-hover:opacity-100"
          initial={{ y: 20 }}
          animate={{ y: hovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <button 
            className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm flex items-center gap-2"
            onClick={handleProjectClick}
          >
            View Project <ExternalLink size={16} />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
>>>>>>> 44dbfa124cfba114f16e2188d25ab41a642f01c9
