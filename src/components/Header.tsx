
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 md:px-12",
        scrolled ? "glass" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-xl font-semibold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.a>

        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-8 mr-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="link-underline text-sm font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <motion.button
            className="p-2 rounded-full bg-secondary mr-4 transition-colors hover:bg-accent/20"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-foreground" />
            ) : (
              <Moon size={18} className="text-foreground" />
            )}
          </motion.button>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 top-16 glass z-40 flex flex-col p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-6 py-8">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-2xl font-medium"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
