import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const socials = [
  { icon: Github, href: "https://github.com/khaled-dev123", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ramdani-khaled-80347830a/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/khaledrd__", label: "X" },
  { icon: Mail, href: "mailto:ramdanikhaled23@gmail.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            Open to Master's opportunities in Europe
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Ramdani{" "}
          <span className="text-gradient glow-text">Khaled</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-4"
        >
          AI Systems Builder · Agent Architecture · Data Engineering
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10"
        >
          <MapPin size={14} className="text-primary" />
          Annaba, Algeria
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center justify-center gap-4"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-12 h-12 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-border transition-all duration-300"
            >
              <s.icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
