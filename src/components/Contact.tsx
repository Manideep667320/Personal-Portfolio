// filepath: c:\Users\manid\OneDrive\Desktop\personal portfolio\src\components\Contact.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your EmailJS Service ID, Template ID, and Public Key
      const serviceID = "your_service_id";
      const templateID = "your_template_id";
      const publicKey = "your_public_key";

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        publicKey
      );

      setSuccessMessage("Your message has been sent successfully!");
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      setSuccessMessage("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            className="text-accent text-sm font-medium mb-2 inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            GET IN TOUCH
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <AnimatedText text="Let's Work Together" once={true} />
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project in mind or want to say hello? Feel free to reach out, and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            className="lg:col-span-2 glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Email</h4>
                  <p className="text-muted-foreground">manideepmasna1@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Phone</h4>
                  <p className="text-muted-foreground">+91 9550667320</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Location</h4>
                  <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3 glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200 resize-none"
                  placeholder="Your message"
                  required
                />
              </div>
              <div>
                <motion.button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg transition-transform duration-300 hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
            {successMessage && (
              <p className="text-center mt-4 text-sm text-accent">{successMessage}</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;