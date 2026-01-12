
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/Manideep667320", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/masna-manideep-386b1b319/", label: "LinkedIn" },
  { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/manideep__masna/", label: "Instagram" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
            <p className="text-muted-foreground max-w-md mb-6">
              Crafting minimal, beautiful, and functional experiences that blend aesthetics with purpose.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/60 hover:bg-accent/10 transition-colors duration-300"
                  whileHover={{ y: -3 }}
                  aria-label={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["Home", "Projects", "About", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;