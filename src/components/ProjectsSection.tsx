import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "ARIA",
    subtitle: "Adaptive Reasoning & Intelligence Architecture",
    status: "In Development",
    statusColor: "text-accent",
    description:
      "Multi-brain AI analytics agent with three-brain cognitive loop: Planner, Advisor, and Meta-Evaluator. Hybrid local/cloud execution with SHA-256 audit trails and three-layer memory system.",
    tech: ["Python", "LangGraph", "Ollama", "ChromaDB", "Streamlit", "NetworkX"],
    highlights: [
      "Three-brain cognitive loop",
      "Per-step data sensitivity routing",
      "Episodic Memory + Knowledge Graph",
    ],
  },
  {
    title: "ANEM AI Engine",
    subtitle: "Intelligent Employability Scoring System",
    status: "Active — Gov. Internship",
    statusColor: "text-green-400",
    description:
      "Multi-agent ML system for national employment analytics. NoSQL Big Data pipeline across 4 data streams with KNN-based recommendation engine for skill gap analysis.",
    tech: ["MongoDB", "Elasticsearch", "scikit-learn", "Python", "NoSQL"],
    highlights: [
      "4-stream Big Data pipeline",
      "Dynamic weight optimization",
      "National-scale analytics",
    ],
  },
  {
    title: "Wyag Lite",
    subtitle: "Git Reimplementation in Python",
    status: "Complete",
    statusColor: "text-primary",
    description:
      "Git internals rebuilt from scratch in pure Python. Repository objects, commits, trees, refs, tags, and log commands — zero dependencies.",
    tech: ["Python", "Systems Programming", "Git Internals"],
    highlights: [
      "Pure Python, zero deps",
      "Full Git object model",
      "Built from scratch",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">
            // Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            What I've <span className="text-gradient">Built</span>
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card/50 p-8 card-hover overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <GitBranch size={18} className="text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full border border-border bg-secondary ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
