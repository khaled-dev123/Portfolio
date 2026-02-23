import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Agents",
    skills: [
      "Multi-agent Architecture",
      "LLM Orchestration",
      "Ollama (Local Inference)",
      "LangGraph",
      "RAG",
      "Vector Stores",
      "Agentic Pipelines",
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      "scikit-learn",
      "NumPy",
      "Pandas",
      "OpenCV",
      "MediaPipe",
      "Supervised Learning",
      "KNN",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "MongoDB",
      "Elasticsearch",
      "NoSQL Design",
      "ChromaDB",
      "Pinecone",
      "Stream Processing",
    ],
  },
  {
    title: "Development",
    skills: [
      "Python",
      "JavaScript",
      "C",
      "Java",
      "Git",
      "Streamlit",
      "REST APIs",
    ],
  },
  {
    title: "Languages",
    skills: [
      "Arabic (Native)",
      "English (B1-B2)",
      "French (Intermediate)",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative neural-grid">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">
            // Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card/50 p-6 card-hover"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
