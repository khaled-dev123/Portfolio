import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">
            // Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            I'm actively looking for Master's opportunities in Europe and open to
            collaborations on AI agent systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12"
        >
          <a
            href="mailto:ramdanikhaled23@gmail.com"
            className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary card-hover"
          >
            <Mail size={20} />
            <span className="text-sm">ramdanikhaled23@gmail.com</span>
          </a>
          <a
            href="https://github.com/khaled-dev123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary card-hover"
          >
            <Github size={20} />
            <span className="text-sm">khaled-dev123</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ramdani-khaled-80347830a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary card-hover"
          >
            <Linkedin size={20} />
            <span className="text-sm">Ramdani Khaled</span>
          </a>
          <a
            href="https://x.com/khaledrd__"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary card-hover"
          >
            <Twitter size={20} />
            <span className="text-sm">@khaledrd__</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin size={14} />
          Annaba, Algeria
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-border pt-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ramdani Khaled. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50 font-mono">
            Built with passion & local AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
