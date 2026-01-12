import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-tr from-accent/20 to-accent/5 rounded-2xl overflow-hidden">
                <motion.div
                  className="absolute inset-4 bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop')" }}
                  initial={{ scale: 1.1, filter: "blur(5px)" }}
                  whileInView={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-accent/30 to-accent/5 rounded-full" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-tr from-accent/20 to-accent/5 rounded-full" />
            </div>
          </motion.div>

          <div>
            <motion.span
              className="text-accent text-sm font-medium mb-2 inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              ABOUT ME
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <AnimatedText text="AI/ML Enthusiast & CS Engineering Student" once={true} />
            </h2>
            <motion.div
              className="space-y-4 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                I'm currently a 3rd year Computer Science Engineering student at KG Reddy College of Engineering and Technology,
                specializing in Artificial Intelligence and Machine Learning.
              </p>
              <p>
                My academic journey has equipped me with a strong foundation in programming, data structures, and algorithms,
                while my specialization has fueled my passion for neural networks, deep learning, and computer vision applications.
              </p>
              <p>
                I'm particularly interested in the intersection of AI and real-world problem solving. Through coursework and personal
                projects, I'm developing skills to build intelligent systems that can make a meaningful impact in various domains.
              </p>
              <p>
                Outside of academics, I enjoy participating in hackathons, contributing to open-source projects, and staying updated
                with the latest advancements in the rapidly evolving field of AI/ML.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;