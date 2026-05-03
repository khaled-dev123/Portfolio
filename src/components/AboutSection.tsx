import { motion } from "framer-motion";
import { GraduationCap, Brain, Building2, Rocket, Users, Monitor, Download } from "lucide-react";

const highlights = [
  { icon: GraduationCap, text: "Final-year CS @ Université Badji Mokhtar, Annaba" },
  { icon: Brain, text: "Self-taught AI agent architecture & data engineering" },
  { icon: Building2, text: "Member, AI & Robotics Association of Annaba Wilaya" },
  { icon: Rocket, text: "Goal: Build AI systems that matter, then build a startup" },
];

const memberships = [
  { icon: Users, text: "Member, AI and Robotics Association of Annaba Wilaya — government-recognized organization promoting AI innovation in Algeria" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">
            // About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Building <span className="text-gradient">AI Systems</span> That Matter
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Final-year Computer Science student passionate about building fully local,
              privacy-first AI systems using Ollama — <span className="text-accent font-medium">zero cloud, zero API cost</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently interning at <span className="text-foreground font-medium">ANEM</span> (Agence Nationale de l'Emploi),
              building a national employment intelligence platform with multi-agent ML systems
              and NoSQL Big Data pipelines.
            </p>

            <div className="mt-8">
              <a
                href="/Ramdani_Khaled_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <Download size={18} />
                Download CV / Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/50 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <h.icon size={20} className="text-primary" />
                </div>
                <p className="text-muted-foreground">{h.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Memberships & Activities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20"
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">
            // Memberships & Activities
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Community & <span className="text-gradient">Engagement</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {memberships.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card/50 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <m.icon size={20} className="text-primary" />
                </div>
                <p className="text-muted-foreground">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
