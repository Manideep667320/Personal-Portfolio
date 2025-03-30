
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { Brain, Code, Database, FileCode, GraduationCap, LineChart, Layers } from "lucide-react";

const skills = [
  { name: "Python", level: 85 },
  { name: "C", level: 80 },
  { name: "HTML/CSS", level: 75 },
  { name: "Machine Learning", level: 75 },
  { name: "Data Analysis", level: 80 },
  { name: "Deep Learning", level: 70 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium">{name}</h3>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const skillCards = [
    {
      title: "Programming Languages",
      content: "Proficient in Python and C for algorithm implementation, data processing, and software development.",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Web Development",
      content: "Experienced with HTML and CSS for creating responsive web interfaces and applications.",
      icon: <FileCode className="w-5 h-5" />
    },
    {
      title: "Machine Learning",
      content: "Building models using supervised and unsupervised learning techniques to solve complex problems.",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Data Analysis",
      content: "Extracting insights from data using statistical methods and visualization techniques.",
      icon: <LineChart className="w-5 h-5" />
    },
    {
      title: "Deep Learning",
      content: "Working with neural networks for image recognition, natural language processing, and other AI applications.",
      icon: <Layers className="w-5 h-5" />
    },
    {
      title: "Continuous Learning",
      content: "Actively expanding my knowledge through coursework, projects, and online resources.",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            className="text-accent text-sm font-medium mb-2 inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            MY EXPERTISE
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <AnimatedText text="Technical Skills" once={true} />
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A showcase of my technical skills in programming, data science, and AI/ML, developed through coursework and personal projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div ref={ref} className="glass rounded-2xl p-8">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              viewport={{ once: true }}
            >
              {skillCards.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="glass rounded-xl p-6 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-accent">{item.icon}</div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.content}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;