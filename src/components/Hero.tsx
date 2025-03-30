
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate movement based on mouse position (reduced strength for subtlety)
      const moveX = clientX / innerWidth - 0.5;
      const moveY = clientY / innerHeight - 0.5;
      
      // Apply the transform with reduced movement for subtlety
      imageRef.current.style.transform = `translateX(${moveX * 5}px) translateY(${moveY * 5}px)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm md:text-base text-accent font-medium mb-3">
            Hello, I'm Masna Manideep
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <AnimatedText 
              text="AI/ML Student & Developer" 
              className="leading-tight" 
              delay={0.5}
            />
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-md mb-8">
            2nd year Computer Science Engineering student at KG Reddy College, specializing in Artificial Intelligence and Machine Learning.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full transition-transform duration-300 ease-in-out hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-primary rounded-full transition-transform duration-300 ease-in-out hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        <div className="relative flex justify-center">
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 overflow-hidden animate-float"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div 
              ref={imageRef} 
              className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out"
            >
              <Avatar className="w-60 h-60 md:w-72 md:h-72 border-4 border-accent/20">
                <AvatarImage
                  src="./Profile-Photo.jpg"
                  alt="Your profile photo"
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl font-bold text-accent">
                  You
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div
            className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-tr from-accent/30 to-accent/5"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
          <motion.div
            className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/5"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
